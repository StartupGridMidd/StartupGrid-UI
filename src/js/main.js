"use strict";

var Backbone = require("backbone");
var $ = require("jquery");
Backbone.$ = $;
var AppRouter = require("./router");

$(document).ready(function() {
  window.router = new AppRouter();
  // var pushState = window.location.hostname === "www.startupgrid.co";
  var pushState = true;
  Backbone.history.start({pushState: pushState});
});
