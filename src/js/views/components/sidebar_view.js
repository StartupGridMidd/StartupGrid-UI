"use strict";

var $ = require("jquery");
var Backbone = require("backbone");
var _ = require("underscore");
Backbone.$ = $;
var templates = require("../../templates");

var SidebarView = Backbone.View.extend({
  tagName: "div",
  id: "sidebar",
  className: "sidebar",
  events: {
    "click .sidebar-item": "select",
    "click .sidebar-item i": "cancel"
  },
  initialize: function() {
    _.bindAll(this, 'render');
    this.listenTo(this.model, "change", this.render);
    this.render();
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

module.exports = SidebarView;
