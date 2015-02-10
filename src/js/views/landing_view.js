"use strict";

var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;
var _ = require("underscore");

var templates = require("../templates");
var LandingModel = require("../models/landing_model");


var LandingView = Backbone.View.extend({
  tagName: "div",
  id: "container",
  className: "landing",
  initialize: function() {
    _.bindAll(this, 'resize');
    this.model = new LandingModel();
    this.model.on("topics_change", this.render, this);
    this.model.on("search_received", this.renderResults, this);
    $( window ).on("resize", this.resize);
  },
  events: {
    "click .subtopic-card": "goToTopic",
    "keypress .search-input": "searchPosts",
    "click .btn": "clickSearchPosts",
  },
  searchPosts: function(e) {
    var query = $('.search-input').val();
    if (e.keyCode === 13) {
      window.router.navigate("search/" + encodeURIComponent(query), {trigger: true});
      e.preventDefault();
    }
  },
  clickSearchPosts: function(e) {
    var query = $('.search-input').val();
    window.router.navigate("search/" + encodeURIComponent(query), {trigger: true});
    e.preventDefault();
  },
  goToTopic: function(e) {
    var id = $(e.currentTarget).data("id");
    window.router.navigate("tags/" + id + '/posts', {trigger: true});
  },
  resultsTemplate: function() {
    return templates.results.render(this.model.attributes);
  },
  render: function() {
    this.$el.html(templates.landing.render(this.model.toJSON()));
  },
  renderResults: function() {
    this.$el.find(".results").html(this.resultsTemplate());
  },
  resize: function() {
    console.log("window-width: " + $( window ).width());
    console.log("window-height: " + $( window ).height());
    console.log("container-width: " + this.$el.find(".row").width());
    console.log("container-height: " + this.$el.find(".row").height());
    console.log("col-md-3-height: " + this.$el.find(".col-md-3").height());
    console.log("col-sm-4-height: " + this.$el.find(".col-sm-4").height());
  }
});

module.exports = LandingView;
