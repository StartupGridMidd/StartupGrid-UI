var $ = require("jquery");
var Backbone = require("backbone");
var _ = require("underscore");
var hogan = require("hogan.js");
Backbone.$ = $;

var Navbar = Backbone.View.extend({
  initialize: function() {
    this.render();
  },
  events: {
    "keypress .main-search": "searchPosts"
  },
  searchPosts: function(e) {
    if (e.keyCode == 13) {
      console.log("enter Pressed");
      var searchText = document.getElementById('nav-search').value;
      console.log(searchText);
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