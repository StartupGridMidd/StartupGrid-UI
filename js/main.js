var $ = require('jquery');
var Backbone = require("backbone");
var Sidebar = require("./sidebar");
var SubtopicList = require("./subtopic_list");
var GridView = require("./grid_view");
var LandingView = require("./landing");

$(document).ready(function() {
  console.log("Initialize Page");

  var AppRouter = Backbone.Router.extend({

    routes: {
      "/": "landing",
      "topic/:id": "topics"
    },
    landing: function() {
      
    },
    topics: function(id) {
      console.log(id);
    },
    search: function(query, page) {

    }
  });

  var gridView = new GridView({
    el: "#container"
  });
  var landingView = new LandingView({
    el: "#container",
    gridView: gridView
  });
  Backbone.history.start({pushState: true});
  // var sidebar = new Sidebar({});
  // var subtopicList = new SubtopicList({});
});