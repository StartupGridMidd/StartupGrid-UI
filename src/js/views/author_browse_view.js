"use strict";

var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;
var _ = require("underscore");
var templates = require("../templates");

var AuthorCollection = require("../collections/author_collection");
var AuthorCardView = require("./components/author_card_view");

var AuthorBrowseView = Backbone.View.extend({
  id: 'main',
  initialize: function(params) {
    this.gridModel = params.gridModel;
    _.bindAll(this, 'render', 'addAuthor', 'onScrollNearBottom');
    this.listenTo(this.gridModel, "change:authorId", this.render);
    this.listenTo(this.gridModel, "scroll:nearBottom", this.onScrollNearBottom);
  },
  onScrollNearBottom: function () {
    var self = this;
    if (!this.loading && this.$el.hasClass('author_browse')) {
      this.loading = true;
      try {
        this.collection.getNextPage().done(function() {
          self.loading = false;
        });
      } catch (e) {
        if (!/^No link found/g.test(e.message)) {
          throw e;
        }
      }
    }
  },
  addAuthor: function(authorModel) {
    var authorCardView = new AuthorCardView({model: authorModel});
    authorCardView.render();
    this.$('#sg-grid').append(authorCardView.el);
    authorCardView.delegateEvents();
  },
  render: function() {
    this.loading = false;
    this.$el = $('#' + this.id);
    // TODO: trade this out for a more deliberate using the GridView to switch active state
    if (!this.$el.hasClass('author_browse')) {
      this.$el.removeClass();
      this.$el.addClass('author_browse');
      this.$el.html(templates.author_browse.render());
    }
    this.$('#sg-grid').empty();
    if (this.collection) {
      this.stopListening(this.collection.fullCollection);
    }
    var authorId = this.gridModel.get('authorId');
    this.collection = new AuthorCollection(null, {authorId: authorId});
    this.listenTo(this.collection.fullCollection, "add", this.addAuthor);
    this.collection.getFirstPage();

    // TODO: this needs some work
    // Backbone.on("post:tag:clicked", function(tagId) {
    //   var route = (tagId == null) ? "/tags" : "/tags/" + tagId + '/posts';
    //   self.sidebarView.model.select(tagId);
    //   router.navigate(route);
    // });
  }
});

module.exports = AuthorBrowseView;
