var $ = require("jquery");
var Backbone = require("backbone");
var hogan = require("hogan.js");
Backbone.$ = $;

var GridModel = Backbone.Model.extend({
  attributes: {
    tagId: null,
    searchQuery: null,
    authorId: null,
    postId: null
  },
  initialize: function() {

  }
});

module.exports = GridModel;