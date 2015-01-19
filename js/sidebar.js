var $ = require("jquery");
var Backbone = require("backbone");
var _ = require("underscore");
var hogan = require("hogan.js");

Backbone.$ = $;
var sampleData = {
  topics: [
    {name: "Operations", count: 450}
  ],
  subtopics: [
    {name: "Administrative", count: 29},
    {name: "Compensation", count: 36},
    {name: "Recruiting", count: 12},
    {name: "Product & Design", count: 50}
  // ],
  // tags: [
  //   {name: "Sample Tag", count: 2},
  //   {name: "Sample Tag 2 ", count: 1},
  //   {name: "Sample Tag 3", count: 10}
  ]
};
var Sidebar = Backbone.View.extend({
  el: "#sidebar",
  events: {
    "click .sidebar-item": "select",
    "click .sidebar-item i": "cancel"
  },
  initialize: function() {
    this.render();
  },
  template: function(obj) {
    return hogan.compile($("#template-sidebar").html()).render(obj);
  },
  render: function() {
    this.$el.html(this.template(sampleData));
    if(sampleData.tags === undefined) {
      this.$el.find(".sidebar-item.topic").addClass('selected');
    }
  },
  select: function(e) {
    console.log("selected");
    $(e.currentTarget).siblings().removeClass("selected");
    $(e.currentTarget).addClass("selected");
  },
  cancel: function(e) {
    // TODO: Need to pull a list of parent tags from server
    $(e.currentTarget).parent().removeClass("selected");
    console.log($(e.currentTarget).parent());
    e.stopPropagation();
  }
});
module.exports = Sidebar;