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
    "click #nav-search-btn": "search",
    "click a": "goToPage"
  },
  searchActionTimeout: 0,
  initialize: function(params) {
    this.parent = params.parent;
    _.bindAll(this, 'search', 'setQuery');
    this.render();
  },
  render: function() {
    var pages = this.model.get("pages");
    var currentPage = this.model.get("page");
    _.each(pages, function(page) {
      page.active = page.path === currentPage;
    });
    this.$el.html(templates.nav.render(this.model.toJSON()));
  },
  searchKeyup: function(e) {
    setTimeout(this.search, 0, e);
  },
  setQuery: function(query) {
    var curQuery = this.model.get("query");
    if (curQuery !== query) {
      this.model.set("query", query);
    } else {
      this.model.trigger("change:query", this.model, query);
    }
  },
  goToPage: function(e) {
    e.preventDefault(); e.stopPropagation();
    var path = $(e.currentTarget).attr("href");
    window.router.navigate(path, {trigger: true});
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
