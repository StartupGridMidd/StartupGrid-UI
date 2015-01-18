var $ = require("jquery");
var Backbone = require("backbone");
var _ = require("underscore");
var hogan = require("hogan.js");

Backbone.$ = $;

var Sidebar = Backbone.View.extend({
  el: "#sidebar",
  initialize: function() {
    this.template = hogan.compile($("#template-sidebar").html()).render({
      topics: [
        {name: "Sample Topic"}
      ],
      subtopics: [
        {name: "Sample Subtopic"}
      ],
      tags: [
        {name: "Sample Tag"},
        {name: "Sample Tag 2 "},
        {name: "Sample Tag 3"}
      ]
    });
    this.render();
  },
  render: function() {
    this.$el.html(this.template);
  }

});
module.exports = Sidebar;