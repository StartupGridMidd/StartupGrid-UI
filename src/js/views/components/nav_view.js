"use strict";

var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;
var _ = require('underscore');

var templates = require("../../templates");

var NavView = Backbone.View.extend({
  tagName: "nav",
  id: "navbar",
  className: "navbar navbar-default",
  events: {
    "keyup #nav-search": "searchKeyup",
    "click #nav-search-btn": "search"
  },
  searchActionTimeout: 0,
  initialize: function(params) {
    this.parent = params.parent;
    _.bindAll(this, 'search', 'setQuery');
  },
  render: function() {
    this.$el.html(templates.nav.render(this.model.toJSON()));
  },
  searchKeyup: function(e) {
    setTimeout(this.search, 0, e);
  },
  setQuery: function(query) {
    this.model.set("query", query);
  },
  search: function(e) {
    e.preventDefault(); e.stopPropagation();
    var query = this.$("#nav-search").val();
    clearTimeout(this.searchActionTimeout);
    if (e.keyCode === 13) {
      this.setQuery(query);
    } else {
      this.searchActionTimeout = setTimeout(this.setQuery, 100, query, false);
    }
  },
});

module.exports = NavView;
