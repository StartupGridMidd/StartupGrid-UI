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
  initialize: function() {
    this.navModel = new NavModel();
    this.render();
  },
  render: function() {
    this.navView = new NavView({model: this.navModel});
    this.$el.html(templates.about.render());
    this.$("#nav-container").html(this.navView.el);
  }
});

module.exports = AboutView;
