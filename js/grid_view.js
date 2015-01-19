var $ = require("jquery");
var Backbone = require("backbone");
var _ = require("underscore");
var hogan = require("hogan.js");
Backbone.$ = $;

var Navbar = require("./navbar");
var Sidebar = require("./sidebar");
var MainGrid = require("./main_grid");

var GridView = Backbone.View.extend({
  initialize: function(params) {
    this.router = params.router;
    this.id = params.id;
  },
  template: function(obj) {
    return hogan.compile($("#template-gridview").html()).render(obj);
  },
  show: function() { this.render(); },
  render: function(params) {
    this.$el.html(this.template());
    this.$el.removeClass('landing');
    this.navbar = new Navbar({
      el: "#navbar"
    });
    this.sidebar = new Sidebar({
      el: "#sidebar"
    });
    this.mainGrid = new MainGrid({
      el: "#sg-grid"
    });
  }
});

module.exports = GridView;