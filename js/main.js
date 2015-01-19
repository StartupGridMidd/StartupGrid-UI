var $ = require('jquery');
var Sidebar = require("./sidebar");
var SubtopicList = require("./subtopic-list");
var LandingView = require("./landing");

$(document).ready(function() {
  console.log("Initialize Page");
  var landingView = new LandingView({
    el: "#container"
  });
  // var sidebar = new Sidebar({});
  // var subtopicList = new SubtopicList({});
});