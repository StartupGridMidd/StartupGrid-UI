var $ = require("jquery");
var Backbone = require("backbone");
var hogan = require("hogan.js");
var common = require("../common");
Backbone.$ = $;

var NavbarView = Backbone.View.extend({
  initialize: function(params) {
    this.router = params.router;
    this.render();
    this.model.on("search_results", this.renderResults, this);
  },
  events: {
    "keyup #nav-search": "searchPosts",
    "click #nav-search-btn": "clickSearchPosts",
    "click .results li": "navigate"
  },
  searchPosts: function(e) {
    var query = this.$el.find('.form-control').val();
    console.log(query);
    if (e.keyCode === 13) {
      Backbone.trigger("search", encodeURIComponent(query));
      e.preventDefault();
      e.stopPropagation();
    }
  },
  clickSearchPosts: function(e) {
    var query = this.$el.find('.form-control').val();
    Backbone.trigger("search", encodeURIComponent(query));
    e.preventDefault();
  },
  template: function() {
    return hogan.compile($("#template-navbar").html()).render({});
  },
  resultsTemplate: function() {
    return hogan.compile($("#template-results").html()).render(this.model.attributes);
  },
  render: function() {
    this.$el.html(this.template());
  },
  renderResults: function() {
    this.$el.find(".results").html(this.resultsTemplate());
  }
});

module.exports = NavbarView