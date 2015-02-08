"use strict";

var $ = require('jquery');
var Backbone = require("backbone");
var _ = require("underscore");
// require('backbone-query-parameters');

var LandingView = require("./views/landing_view");
// TODO: Figure out why SearchView must be imported before PostBrowseView nav_view.js#29
var SearchView = require("./views/search_view");
var PostBrowseView = require("./views/post_browse_view");
var PostDetailView = require("./views/post_detail_view");
var AuthorBrowseView = require("./views/author_browse_view");
var AuthorDetailView = require("./views/author_detail_view");
var AboutView = require("./views/about_view");
var InterviewsView = require("./views/interviews_view");

var AppRouter = Backbone.Router.extend({
  routes: {
    "":                 "landing",
    "about":            "about",
    "interviews":       "interviews",
    "posts":            "post_browse",
    "tags/:id/posts":   "post_browse",
    "posts/:id":        "post_detail",
    "authors":          "author_browse",
    "authors/:id":      "author_detail",
    "search":           "search",
    "search/:query":    "search", // TODO: Make query routes more standard
    "*default":         "default"
  },
  initialize: function() {
    this.body = $("body");
  },
  setView: function(view) {
    if (this.view) {
      this.view.remove();
    }
    this.view = view;
    this.view.render();
    this.body.append(this.view.el);
  },
  landing: function() {
    var view = new LandingView();
    this.setView(view);
  },
  about: function() {
    var view = new AboutView();
    this.setView(view);
  },
  interviews: function() {
    var view = new InterviewsView();
    this.setView(view);
  },
  post_browse: function(tagId) {
    if (tagId && !_.isNaN(parseInt(tagId))) {
      tagId = parseInt(tagId);
    } else {
      tagId = null;
      this.navigate("posts");
    };
    var view = new PostBrowseView({tagId: tagId});
    this.setView(view);
  },
  post_detail: function(postId) {
    if (postId && !_.isNaN(parseInt(postId))) {
      postId = parseInt(postId);
    } else {
      this.navigate("posts");
    };
    var view = new PostDetailView({postId: postId});
    this.setView(view);
  },
  author_browse: function() {
    var view = new AuthorBrowseView();
    this.setView(view);
  },
  author_detail: function(authorId) {
    if (authorId && !_.isNaN(parseInt(authorId))) {
      authorId = parseInt(authorId);
    } else {
      return this.navigate("authors", {trigger: true});
    };
    var view = new AuthorDetailView({authorId: authorId});
    this.setView(view);
  },
  search: function(query) {
    query = query || "";
    var view = new SearchView({query: query});
    this.setView(view);
    // TODO: Make this work without the hack
    $("#nav-search").focus();
  },
  default: function() {
    this.navigate('', {trigger: true});
  }
});

module.exports = AppRouter;
