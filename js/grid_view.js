var $ = require("jquery");
var Backbone = require("backbone");
var hogan = require("hogan.js");
Backbone.$ = $;

var Navbar = require("./navbar");
var Sidebar = require("./sidebar");
var MainGrid = require("./main_grid");

var GridView = Backbone.View.extend({
  initialize: function(params) {
    this.router = params.router;
    this.id = params.id;
    this.topicId = params.topicId;
  },
  template: function(obj) {
    return hogan.compile($("#template-gridview").html()).render(obj);
  },
  show: function() { this.render(); },
  render: function() {
    this.$el.html(this.template());
    this.$el.removeClass('landing');
    this.navbar = new Navbar({
      el: "#navbar"
    });
    this.sidebar = new Sidebar({
      el: "#sidebar",
      topicId: this.topicId,
      router: this.router
    });
    this.mainGrid = new MainGrid({
      el: "#sg-grid"
    });
  }
});

module.exports = GridView;