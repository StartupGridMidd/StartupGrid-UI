"use strict";

var $ = require("jquery");
var Backbone = require("backbone");
Backbone.PageableCollection = require("backbone.paginator");
var _ = require("underscore");
var common = require("../common");
Backbone.$ = $;

var PostCollection = require("./post_collection");

var AuthorPostCollection = PostCollection.extend({
  initialize: function(models, params) {
    this.authorId = params.authorId;
  },
  url: function() {
    return common.API_URL + '/authors/' + this.authorId + '/posts';
  }
});

module.exports = AuthorPostCollection;