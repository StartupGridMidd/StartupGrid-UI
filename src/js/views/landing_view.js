"use strict";

var $ = require("jquery");
var Backbone = require("backbone");
var templates = require("../templates");
var common = require("../common");
var LandingModel = require("../models/landing_model");
Backbone.$ = $;

var LandingView = Backbone.View.extend({
  initialize: function(params) {
    this.model = new LandingModel();
    this.model.on("topics_change", this.render, this);
    this.model.on("search_received", this.renderResults, this);
  },
  events: {
    "click .subtopic-card": "goToTopic",
    "keypress .search-input": "searchPosts",
    "click .btn": "clickSearchPosts",
  },
  searchPosts: function(e) {
    var query = $('.search-input').val();
    if (e.keyCode === 13) {
      router.navigate("search/" + encodeURIComponent(query), {trigger: true});
      e.preventDefault();
    }
  },
  clickSearchPosts: function(e) {
    var query = $('.search-input').val();
    router.navigate("search/" + encodeURIComponent(query), {trigger: true});
    e.preventDefault();
  },
  goToTopic: function(e) {
    var id = $(e.currentTarget).data("id");
    router.navigate("tags/" + id + '/posts', {trigger: true});
  },
  resultsTemplate: function() {
    return templates.results.render(this.model.attributes);
  },
  render: function() {
    this.$el.html(templates.landing.render(this.model.toJSON()));
    this.$el.addClass('landing');
  },
  renderResults: function() {
    this.$el.find(".results").html(this.resultsTemplate());
  }
});

module.exports = LandingView;