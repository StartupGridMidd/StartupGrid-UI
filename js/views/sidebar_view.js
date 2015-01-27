var $ = require("jquery");
var Backbone = require("backbone");
var hogan = require("hogan.js");
var common = require("../common");
Backbone.$ = $;

var SidebarView = Backbone.View.extend({
  router: null,
  el: "#sidebar",
  events: {
    "click .sidebar-item": "select",
    "click .sidebar-item i": "cancel"
  },
  initialize: function(params) {
    this.router = params.router;
    this.model.on("change", this.render, this);
  },
  template: function() {
    return hogan.compile($("#template-sidebar").html()).render(this.model.attributes);
  },
  render: function() {
    console.log("rendering sidebar");
    this.$el.html(this.template());
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