var $ = require("jquery");
var Backbone = require("backbone");
var _ = require("underscore");
var hogan = require("hogan.js");
var common = require("../common");
Backbone.$ = $;

var SearchModel = Backbone.Model.extend({
  attributes: {
    searchQuery: null,
    router: null,
    showing: false
  },
  initialize: function(params) {
    this.set("searchQuery", params.searchQuery);
    this.search();
  },
  setQuery: function(id, options) {
    this.set({
      "searchQuery": id,
      "showing": true
    });
    this.search();
  },
  search: function() {
    var me = this;
    var searchUrl = common.API_URL + '/search.json?q=' + me.get("searchQuery");
    $.ajax({
      url: searchUrl,
      type: 'GET',
      dataType: 'json'
    }).done(function(posts) {
      console.log("got search posts", posts);
      me.set("posts", posts);
    });
  }
});

module.exports = SearchModel;