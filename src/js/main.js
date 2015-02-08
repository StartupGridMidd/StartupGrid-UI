"use strict";

var Backbone = require("backbone");
var $ = require("jquery");
Backbone.$ = $;
var AppRouter = require("./router");

$(document).ready(function() {
  window.router = new AppRouter();
  Backbone.history.start();
  // Backbone.history.start({pushState: true});
});
