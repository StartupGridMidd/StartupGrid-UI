"use strict";

var Backbone = require("backbone");
var common = require("../common");
var PostModel = require('../models/post_model');

var SearchedPostCollection = Backbone.Collection.extend({
  model: PostModel,
  // initialize: function(models, params) {
  //   this.query = params.query;
  // },
  // url: function() {
  //   return common.API_URL + '/search?q=' + this.query;
  // }
});

module.exports = SearchedPostCollection;
