"use strict";

var $ = require('jquery');
var Backbone = require("backbone");
var common = require("./common");
var BackboneQueryParameters = require('backbone-query-parameters');
var GridModel = require("./models/grid_model");
var GridView = require("./views/grid_view");
var LandingView = require("./views/landing_view");

var AppRouter = Backbone.Router.extend({
  routes: {
    "": "landing",
    "posts": "browse",
    "tags/:id/posts": "browse",
    "search/:query": "search",
    "*default": "default"
  },
  default: function() {
    this.navigate('', {trigger: true});
  },
  landing: function() {
    this.landingView = new LandingView({
      el: "#container",
    });
    this.landingView.render();
  },
  browse: function(tagId) {
    tagId = parseInt(tagId);
    this.gridModel = new GridModel();
    this.gridView = new GridView({
      model: this.gridModel
    });
    this.gridView.render();
    tagId = tagId || null;
    this.gridModel.set('tagId', tagId);
  },
  search: function(query) {
    if (query){
      this.gridModel = new GridModel();
      this.gridView = new GridView({
        model: this.gridModel
      });
      this.gridView.render();
      this.gridModel.set('query', query);
    } else {
      router.navigate("posts", {trigger: true});
    }
  }
});

module.exports = AppRouter;