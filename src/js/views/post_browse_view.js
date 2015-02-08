"use strict";

var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;
var _ = require("underscore");
var templates = require("../templates");
var Scroller = require("../utilities/scroller");

var PostCardView = require("./components/post_card_view");
var SidebarView = require("./components/sidebar_view");
var SidebarModel = require("../models/sidebar_model");
var NavView = require("./components/nav_view");
var NavModel = require("../models/nav_model");

var PostCollection = require("../collections/post_collection");
var TaggedPostCollection = require("../collections/tagged_post_collection");

var PostBrowseView = Backbone.View.extend({
  tagName: "div",
  id: "container",
  events: {
    "focus #nav-search": "navFocus"
  },
  initialize: function(params) {
    _.bindAll(this, "render", "addPost", "loadMore", "tagChange");
    this.sidebarModel = new SidebarModel({tagId: params.tagId});
    this.navModel = new NavModel();
    this.scroller = new Scroller();
    this.listenTo(this.scroller, "scroll:nearBottom", this.loadMore);
    this.listenTo(this.sidebarModel, "change:tagId", this.tagChange);
    this.listenTo(this.sidebarModel, "sidebar:selected sidebar:deselected", this.tagChange);
    this.render();
    this.tagChange();
  },
  tagChange: function() {
    var tagId = this.sidebarModel.get("tagId");
    if (this.collection) {
      this.stopListening(this.collection.fullCollection);
    }
    if (tagId) {
      this.collection = new TaggedPostCollection(null, {tagId: tagId});
    } else {
      this.collection = new PostCollection();
    }
    this.listenTo(this.collection.fullCollection, "add", this.addPost);
    this.$("#sg-grid").empty();
    // TODO: Address the race condition between this and render
    this.collection.getFirstPage();
    var route = tagId ? "tags/" + tagId + "/posts" : "posts";
    window.router.navigate(route);
  },
  navFocus: function(e) {
    e.preventDefault();
    // var query = $(e.currentTarget).val();
    // var path = query.length ? "search/" + encodeURIComponent(query) : "search";
    window.router.navigate("search", {trigger: true});
  },
  loadMore: function () {
    var self = this;
    if (!this.loading) {
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
  addPost: function(postModel) {
    var postCardView = new PostCardView({model: postModel});
    postCardView.render();
    this.$("#sg-grid").append(postCardView.el);
    postCardView.delegateEvents();
  },
  render: function() {
    this.loading = false;
    this.navView = new NavView({model: this.navModel});
    this.sidebarView = new SidebarView({model: this.sidebarModel});
    this.$el.html(templates.post_browse.render());
    this.$("#nav-container").html(this.navView.el);
    this.$("#sidebar-container").html(this.sidebarView.el);
  }
});

module.exports = PostBrowseView;
