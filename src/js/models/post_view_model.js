var $ = require("jquery");
var Backbone = require("backbone");
var _ = require("underscore");
var common = require("../common");
Backbone.$ = $;

var PostModel = Backbone.Model.extend({
  attributes: {
    tagId: null,
    router: null
  },
  initialize: function(params) {
    var tagId = (params.tagId === null) ? null : parseInt(params.tagId, 10);
    this.setId(tagId);
    this.listenTo(this.model, "remove", function() {console.log("removed"); });
  },
  setId: function(id, clicked) {
    if(clicked == true) {
      Backbone.trigger("post:tag:clicked", id);
    }
    this.set("tagId", id);
    this.fetch();
  },
  fetch: function() {
    var me = this;
    var tagPortion;
    if (this.get("tagId") !== null) {
      tagPortion = '/tags/' + me.get("tagId");
    } else {
      tagPortion = '';
    }
    var fetchUrl = common.API_URL + tagPortion + '/posts.json';
    $.ajax({
      url: fetchUrl,
      type: 'GET',
      dataType: 'json'
    }).done(function(posts) {
      me.set("posts", posts);
    });
  }
});

module.exports = PostModel;
