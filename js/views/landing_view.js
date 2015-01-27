var $ = require("jquery");
var Backbone = require("backbone");
var hogan = require("hogan.js");
var common = require("../common");
var LandingModel = require("../models/landing_model");
Backbone.$ = $;

var LandingView = Backbone.View.extend({
  initialize: function(params) {
    this.router = params.router;
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
      this.router.navigate("search/" + encodeURIComponent(query), {trigger: true});
      e.preventDefault();
    }
  },
  clickSearchPosts: function(e) {
    var query = $('.search-input').val();
    this.router.navigate("search/" + encodeURIComponent(query), {trigger: true});
    e.preventDefault();
  },
  goToTopic: function(e) {
    var id = $(e.currentTarget).data("id");
    this.router.navigate("tag/" + id, {trigger: true});
  },
  template: function() {
    return hogan.compile($("#template-landing").html()).render(this.model.attributes);
  },
  resultsTemplate: function() {
    return hogan.compile($("#template-results").html()).render(this.model.attributes);
  },
  render: function() {
    this.$el.html(this.template());
    this.$el.addClass('landing');
  },
  renderResults: function() {
    this.$el.find(".results").html(this.resultsTemplate());
  }
});

module.exports = LandingView;