"use strict";
var NavView = require("./components/nav_view");

var $ = require("jquery");
var Backbone = require("backbone");
var _ = require("underscore");
var templates = require("../templates");
var common = require("../common");
Backbone.$ = $;
var Scroller = require("../utilities/scroller");
var NavModel = require("../models/nav_model");
var PostCardView = require('./components/post_card_view');
var SearchedPostCollection = require("../collections/searched_post_collection");

var SearchView = Backbone.View.extend({
  tagName: "div",
  id: "container",
  events: {
    "blur #nav-search": "navBlur"
  },
  initialize: function(params) {
    _.bindAll(this, 'queryChange');
    this.navModel = new NavModel({query: params.query});
    this.navView = new NavView({model: this.navModel, parent: this});
    this.scroller = new Scroller();
    this.collection = new SearchedPostCollection();
    this.listenTo(this.collection, 'add', this.addPost);
    this.listenTo(this.collection, 'remove', this.removePost);
    this.listenTo(this.scroller, "scroll:nearBottom", this.loadMore);
    this.listenTo(this.navModel, 'change:query', this.queryChange);
    // this.listenTo(this.navModel, 'change:query', this.setSearchInput);
    this.queryChange();
  },
  navBlur: function() {
    window.router.navigate('posts', {trigger: true});
  },
  queryChange: function(model, query) {
    query = query || this.navModel.get("query");
    if (query.length) {
      this.collection.url = common.API_URL + '/search?q=' + query;
      this.collection.fetch();
    }
    var path = query.length ? "search/" + encodeURIComponent(query) : "search";
    window.router.navigate(path);
  },
  addPost: function(postModel) {
    var postCardView = new PostCardView({model: postModel});
    postCardView.render();
    this.$('#sg-grid').append(postCardView.el);
  },
  removePost: function(postModel) {
    postModel.trigger("destroy");
  },
  render: function() {
    this.loading = false;
    this.navView.render();
    // this.sidebarView.render();
    this.$el.html(templates.search.render());
    this.$("#nav-container").html(this.navView.el);
    this.$("#nav-search").focus();
  }
});

module.exports = SearchView;
