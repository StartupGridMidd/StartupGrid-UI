var $ = require("jquery");
var Backbone = require("backbone");
var _ = require("underscore");
var hogan = require("hogan.js");
Backbone.$ = $;

var NavBarModel = Backbone.Model.extend({
  initialize: function() {
    this.fetch();
  },
  fetch: function() {
    }
});

var Navbar = Backbone.View.extend({
  initialize: function() {
    this.render();
  },
  events: {
    "keypress .form-control": "searchPosts",
    "click .btn": "clickSearchPosts"
  },
  searchPosts: function(e) {
    if (e.keyCode == 13) {
      var searchText = document.getElementById('nav-search').value;
    }
  },
  clickSearchPosts: function(e) {
    var button = $(e.currentTarget).id;
    if ($(button).click()) {
      var searchText = document.getElementById('nav-search').value;
    }
  },
  template: function() {
    return hogan.compile($("#template-navbar").html()).render({});
  },
  render: function() {
    this.$el.html(this.template());
  }
});

module.exports = Navbar;