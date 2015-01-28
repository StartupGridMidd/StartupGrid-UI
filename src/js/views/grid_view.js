var $ = require("jquery");
var Backbone = require("backbone");
var templates = require("../templates");

Backbone.$ = $;

var GridModel = require("../models/grid_model");

var NavbarView = require("../views/navbar_view");
var NavbarModel = require("../models/navbar_model");
var SidebarView = require("../views/sidebar_view");
var SidebarModel = require("../models/sidebar_model");
var PostView = require("../views/post_view");
var PostModel = require("../models/post_model");
var SearchView = require("../views/search_view");
var SearchModel = require("../models/search_model");

var GridView = Backbone.View.extend({
  initialize: function(params) {
    this.model = new GridModel({

    });
    this.router = params.router;
    this.tagId = params.tagId || null;
    this.searchQuery = params.searchQuery || null;
    console.log(this.searchQuery);
  },
  template: function(obj) {
    return templates.gridview.render(obj);
  },
  render: function() {
    var self = this;
    this.$el.html(this.template());
    this.$el.removeClass('landing');
    this.navbar = new NavbarView({
      el: "#navbar",
      router: this.router,
      model: new NavbarModel({
        tagId: this.tagId
      })
    });
    this.sidebar = new SidebarView({
      el: "#sidebar",
      model: new SidebarModel({
        tagId: this.tagId
      })
    });
    if (!this.searchQuery) {
      this.initializePostView();
    } else {
      this.initializeSearchView();
    }
    Backbone.on("sidebar:selected sidebar:deselected", function(tagId) {
      var route = (tagId == null) ? "/tags" : "tag/" + tagId;
      if (!self.postView) {
        self.initializePostView();
      }
      self.postView.model.setId(tagId);
      self.router.navigate(route);
    });
    Backbone.on("post:tag:clicked", function(tagId) {
      var route = (tagId == null) ? "/tags" : "tag/" + tagId;
      self.sidebar.model.select(tagId);
      self.router.navigate(route);
    });
    Backbone.on("search", function(query) {
      self.router.navigate("search/" + encodeURIComponent(query), {
        trigger: true
      });
    });
  },
  initializePostView: function() {
    this.postView = new PostView({
      el: "#sg-grid",
      model: new PostModel({
        tagId: this.tagId
      })
    });
  },
  initializeSearchView: function() {
    this.searchView = new SearchView({
      el: "#sg-grid",
      model: new SearchModel({
        searchQuery: this.searchQuery
      })
    });
  }
});

module.exports = GridView;