"use strict";

var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;
var templates = require("../templates");
var NavView = require("./components/nav_view");
var NavModel = require("../models/nav_model");
var templates = require("../templates");

var AboutView = Backbone.View.extend({
  tagName: "div",
  id: "container",
  events: {
    "focus #nav-search": "navFocus"
  },
  navFocus: function(e) {
    e.preventDefault();
    // var query = $(e.currentTarget).val();
    // var path = query.length ? "search/" + encodeURIComponent(query) : "search";
    window.router.navigate("search", {trigger: true});
  },
  initialize: function() {
    this.navModel = new NavModel({page: "about"});
    this.navView = new NavView({model: this.navModel});
    this.render();
  },
  render: function() {
    this.$el.html(templates.about.render());
    this.$("#nav-container").html(this.navView.el);
  }
});

module.exports = AboutView;
