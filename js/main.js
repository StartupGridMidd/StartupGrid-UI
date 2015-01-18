var $ = require('jquery');
var Sidebar = require("./sidebar");
var SubtopicList = require("./subtopic-list");

$(document).ready(function() {
  console.log("Initialize Page");
  var sidebar = new Sidebar({});
  var subtopicList = new SubtopicList({});
});