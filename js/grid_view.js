var $ = require("jquery");
var Backbone = require("backbone");
var hogan = require("hogan.js");
Backbone.$ = $;

var Navbar = require("./navbar");
var sidebar = require("./sidebar");
var main_grid = require("./main_grid");

var GridView = Backbone.View.extend({
  initialize: function(params) {
    this.router = params.router;
    this.id = params.id;
    this.tagId = params.tagId;
  },
  template: function(obj) {
    return hogan.compile($("#template-gridview").html()).render(obj);
  },
  render: function() {
    var self = this;
    this.$el.html(this.template());
    this.$el.removeClass('landing');
    this.navbar = new Navbar({
      el: "#navbar"
    });
    this.sidebar = new sidebar.Sidebar({
      el: "#sidebar",
      tagId: this.tagId,
      router: this.router,
      model: new sidebar.SidebarModel({
        tagId: this.tagId
      })
    });
    this.mainGrid = new main_grid.MainGrid({
      el: "#sg-grid",
      model: new main_grid.MainGridModel({
        tagId: this.tagId
      })
    });
    this.sidebar.model.on("change", function() {
      self.mainGrid.model.setId(self.sidebar.model.get("tagId"));
    });
  }
});

module.exports = GridView;