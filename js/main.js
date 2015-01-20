var $ = require('jquery');
var Backbone = require("backbone");
var GridView = require("./grid_view");
var LandingView = require("./landing");

$(document).ready(function() {

  var AppRouter = Backbone.Router.extend({
    routes: {
      "": "landing",
      "tags": "tag",
      "tag/:id": "tag"
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
        topicId: id
      });
      this.gridView.render();
    }
  });

  var router = new AppRouter();
  Backbone.history.start();
});