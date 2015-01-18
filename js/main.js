var $ = require('jquery');
var Sidebar = require("./sidebar");

$(document).ready(function() {
  console.log("jQuery loaded");
  var sidebar = new Sidebar({
    $el: $("#sidebar")
  });
});