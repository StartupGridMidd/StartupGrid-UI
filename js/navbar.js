var $ = require("jquery");
var Backbone = require("backbone");
var _ = require("underscore");
var hogan = require("hogan.js");
Backbone.$ = $;

var NavBarModel = Backbone.Model.extend({
  initialize: function() {
    this.fetchTags();
  },
  fetchTags: function() {
    var me = this;
    $.ajax({
      url: 'http://startupgrid-api-staging.herokuapp.com/tags.json',
      type: 'GET',
      dataType: 'json'
    })
    .done(function(data) {
      me.set("tags", data);
    });
  },
  fetchAuthors: function() {
    var me = this;
    $.ajax({
      url: 'http://startupgrid-api-staging.herokuapp.com/authors.json',
      type: 'GET',
      dataType: 'json'
    })
    .done(function(data) {
      me.set("authors", data);
    });
  },
  fetchPosts: function() {
    var me = this;
    $.ajax({
      url: 'http://startupgrid-api-staging.herokuapp.com/posts.json',
      type: 'GET',
      dataType: 'json'
    })
    .done(function(data) {
      me.set("posts", data);
    });
  }
});

var Navbar = Backbone.View.extend({
  initialize: function() {
    this.render();
  },
  events: {
    "keypress .form-control": "searchPosts",
    "click .btn": "searchPosts"
  },
  searchPosts: function(e) {
    if (e.keyCode == 13) {
      var searchText = document.getElementById('nav-search').value;
      console.log(searchText);
    }
    var button = document.getElementById('nav-search-btn');
    if (button.click) {
      console.log('clicked button');
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