var $ = require("jquery");
var Backbone = require("backbone");
var _ = require("underscore");
var hogan = require("hogan.js");
Backbone.$ = $;

var NavbarModel = Backbone.Model.extend({
  initialize: function() {

  },
  search: function(query) {
    var me = this;
    console.log("Fetching", query);
    $.ajax({
      url: 'http://startupgrid-api-production.herokuapp.com/search.json?q=' + query,
      type: 'GET',
      dataType: 'json'
    }).done(function(results) {
      me.set({ 
        "results": results,
        "showing": (results.length > 0 ? true : false)
      });
    });
  }
});

var Navbar = Backbone.View.extend({
  initialize: function() {
    this.render();
    this.model.on("change", this.renderResults, this);
  },
  events: {
    "keyup .form-control": "searchPosts",
    "click .btn": "clickSearchPosts"
  },
  searchPosts: function(e) {
    var searchText = $(e.currentTarget).val();
    this.model.search(searchText);
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  },
  clickSearchPosts: function() {
    var searchText = $('nav-search').val();
    this.model.search(searchText);
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

module.exports = {
  Navbar:Navbar,
  NavbarModel:NavbarModel
};