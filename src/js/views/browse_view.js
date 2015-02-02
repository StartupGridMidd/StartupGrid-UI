"use strict";

var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;
var _ = require("underscore");
var templates = require("../templates");
var common = require("../common");

var PostView = require('./post_view');
var SidebarView = require("./sidebar_view");
var SidebarModel = require("../models/sidebar_model");

var PostCollection = require("../collections/post_collection");
var TaggedPostCollection = require("../collections/tagged_post_collection");

var BrowseView = Backbone.View.extend({
  id: "main",
  events: {
    "click .tag": "select"
  },
  initialize: function(params) {
    this.gridModel = params.gridModel;
    this.sidebarModel = new SidebarModel({
      tagId: this.gridModel.get('tagId')
    });
    _.bindAll(this, 'render', 'addPost', 'onScrollNearBottom');
    this.listenTo(this.gridModel, 'change:tagId', this.render);
    this.listenTo(this.gridModel, 'change:tagId', function(m, tagId) { this.sidebarModel.set('tagId', tagId); });
    this.listenTo(this.gridModel, "scroll:nearBottom", this.onScrollNearBottom);
    this.listenTo(this.sidebarModel, "sidebar:selected sidebar:deselected", this.propagateTagChange);
  },
  onScrollNearBottom: function () {
    var self = this;
    if (!this.loading && this.$el.hasClass('browse')) {
      this.loading = true;
      try {
        this.collection.getNextPage().done(function() {
          self.loading = false;
        })
      } catch (e) {
        if (!/^No link found/g.test(e.message)) {
          throw e;
        };
      };
    }
  },
  addPost: function(postModel) {
    var postView = new PostView({model: postModel});
    postView.render();
    this.$('#sg-grid').append(postView.el);
    postView.delegateEvents();
  },
  propagateTagChange: function(tagId) {
    this.gridModel.set('tagId', tagId);
  },
  render: function() {
    this.loading = false;
    this.$el = $('#' + this.id);
    // TODO: trade this out for a more deliberate using the GridView to switch active state
    if (!this.$el.hasClass('browse')) {
      this.$el.removeClass();
      this.$el.addClass('browse');
      this.$el.html(templates.browse.render());
      this.sidebarView = new SidebarView({model: this.sidebarModel});
      this.sidebarView.render();
    }
    this.$('#sg-grid').empty();
    if (this.collection) {
      this.stopListening(this.collection.fullCollection);
    }
    var tagId = this.gridModel.get('tagId');
    if (tagId !== null) {
      this.collection = new TaggedPostCollection(null, {tagId: tagId});
    } else {
      this.collection = new PostCollection();
    }
    this.listenTo(this.collection.fullCollection, "add", this.addPost);
    this.collection.getFirstPage();

    // TODO: this needs some work
    // Backbone.on("post:tag:clicked", function(tagId) {
    //   var route = (tagId == null) ? "/tags" : "/tags/" + tagId + '/posts';
    //   self.sidebarView.model.select(tagId);
    //   router.navigate(route);
    // });   
  },
  select: function(e) {
    var id = $(e.currentTarget).data("id");
    this.model.setId(id, true);
    e.stopPropagation();
  },  
});

module.exports = BrowseView;