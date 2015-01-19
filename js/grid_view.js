var $ = require("jquery");
var Backbone = require("backbone");
var _ = require("underscore");
var hogan = require("hogan.js");
Backbone.$ = $;


var Navbar = require("./navbar");
var Sidebar = require("./sidebar");
var sampleData = {};

var GridView = Backbone.View.extend({
  initialize: function() {},
  template: function(obj) {
    return hogan.compile($("#template-gridview").html()).render(obj);
  },
  show: function() { this.render(); },
  render: function() {
    this.$el.html(this.template(sampleData));
    this.$el.removeClass('landing');
    this.navbar = new Navbar({
      el: "#navbar"
    });
    this.sidebar = new Sidebar({
      el: "#sidebar"
    });
  }
});

module.exports = GridView;