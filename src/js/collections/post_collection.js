"use strict";

var Backbone = require("backbone");
Backbone.PageableCollection = require('backbone.paginator');
var common = require("../common");

var PostModel = require('../models/post_model');

var PostCollection = Backbone.PageableCollection.extend({
  model: PostModel,
  mode: "infinite",
  url: common.API_URL + '/posts',
});

module.exports = PostCollection;