var $ = require('jquery');
var Backbone = require("backbone");
var Sidebar = require("./sidebar");
var SubtopicList = require("./subtopic_list");
var GridView = require("./grid_view");
var LandingView = require("./landing");

$(document).ready(function() {

  var AppRouter = Backbone.Router.extend({
    routes: {
      "": "landing",
      "topic/:id": "topic",
      "subtopic/:id": "subtopic",
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
    topic: function(id) {
      this.gridView = new GridView({
        el: "#container",
        router: this
      });
      this.gridView.render({topicId: id});
    },
    subtopic: function() {},
    tag: function() {}
  });

  var router = new AppRouter();
  Backbone.history.start();
});