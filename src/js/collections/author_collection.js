"use strict";

var Backbone = require("backbone");
Backbone.PageableCollection = require('backbone.paginator');
var common = require("../common");

var AuthorModel = require('../models/author_model');

var AuthorCollection = Backbone.PageableCollection.extend({
  model: AuthorModel,
  mode: "infinite",
  url: common.API_URL + '/authors',
});

module.exports = AuthorCollection;