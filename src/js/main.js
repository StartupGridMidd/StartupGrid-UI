var $ = require('jquery');
var Backbone = require("backbone");
var GridView = require("./views/grid_view");
var LandingView = require("./views/landing_view");

$(document).ready(function() {

  var AppRouter = Backbone.Router.extend({
    routes: {
      "": "landing",
      "tags": "tag",
      "tag/:id": "tag",
      "search/:query": "search"
    },
    initialize: function() {

    },
    landing: function() {
      this.landingView = new LandingView({
        el: "#container",
        router: this
      });
      this.landingView.render();
    },
    tag: function(id) {
      this.gridView = new GridView({
        el: "#container",
        router: this,
        tagId: id
      });
      this.gridView.render();
    },
    search: function(query) {
      this.gridView = new GridView({
        el: "#container",
        router: this,
        searchQuery: query
      });
      this.gridView.render();
    }
  });

  var router = new AppRouter();
  Backbone.history.start();
});