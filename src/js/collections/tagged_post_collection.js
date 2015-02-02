"use strict";

var $ = require("jquery");
var Backbone = require("backbone");
Backbone.PageableCollection = require("backbone.paginator");
var _ = require("underscore");
var common = require("../common");
Backbone.$ = $;

var PostCollection = require("./post_collection");

var TaggedPostCollection = PostCollection.extend({
  initialize: function(models, params) {
    this.tagId = params.tagId;
  },
  url: function() {
    return common.API_URL + '/tags/' + this.tagId + '/posts';
  }
});

module.exports = TaggedPostCollection;