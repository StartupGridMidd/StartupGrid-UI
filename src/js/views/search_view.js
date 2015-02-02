"use strict";

var $ = require("jquery");
var Backbone = require("backbone");
var _ = require("underscore");
var templates = require("../templates");
Backbone.$ = $;

var PostView = require('./post_view');
var SearchedPostCollection = require("../collections/searched_post_collection");

var SearchView = Backbone.View.extend({
  id: 'main',
  events: {
    "click .result-card": "expand",
    "click .result-card.expanded": "goToPost",
    "click .tag": "select"
  },
  initialize: function(params) {
    this.gridModel = params.gridModel;
    _.bindAll(this, 'render');
    this.listenTo(this.gridModel, 'change:query', this.render);
  },
  addPost: function(postModel) {
    var postView = new PostView({model: postModel});
    postView.render();
    this.$('#sg-grid').append(postView.el);
  },
  removePost: function(postModel) {
    postModel.destroy();
  },  
  render: function() {
    var query = this.gridModel.get('query');
    if (query.length > 0) {
      this.$el = $('#' + this.id);
      this.$el.removeClass();
      this.$el.addClass('browse');
      this.$el.html(templates.search.render());
      this.collection = new SearchedPostCollection(null, {query: query});
      this.listenTo(this.collection, 'add', this.addPost);
      this.listenTo(this.collection, 'remove', this.removePost);
      this.collection.fetch();
    }
  },
  expand: function(e) {
    $(e.currentTarget).addClass('expanded');
  },
  goToPost: function(e) {
    var url = $(e.currentTarget).data("url");
    window.open(url, '_blank');
  },
  select: function(e) {
    var id = $(e.currentTarget).data("id");
    this.model.set("showing", null);
    e.stopPropagation();
  },
});

module.exports = SearchView;