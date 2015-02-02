"use strict";

var $ = require("jquery");
var Backbone = require("backbone");
var templates = require("../templates");
var common = require("../common");
Backbone.$ = $;

var SidebarView = Backbone.View.extend({
  el: "#sidebar",
  events: {
    "click .sidebar-item": "select",
    "click .sidebar-item i": "cancel"
  },
  initialize: function(params) {
    this.model.on("change", this.render, this);
  },
  template: function() {
    return templates.sidebar.render(this.model.attributes);
  },
  render: function() {
    this.$el.html(templates.sidebar.render(this.model.toJSON()));
  },
  select: function(e) {
    var id = $(e.currentTarget).data("id");
    this.model.select(id, true);
  },
  showTags: function() {

  },
  cancel: function(e) {
    var id = $(e.currentTarget).parent().data("id");
    this.model.deselect(id, true);
    e.stopPropagation();
  }
});

module.exports = SidebarView