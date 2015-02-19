"use strict";

var Backbone = require("backbone");
var $ = require("jquery");
window.jQuery = $;
require("bootstrap");
Backbone.$ = $;
var AppRouter = require("./router");

$(document).ready(function() {
  window.router = new AppRouter();
  // var pushState = window.location.hostname === "www.startupgrid.co";
  var pushState = true;
  Backbone.history.start({pushState: pushState});
});
