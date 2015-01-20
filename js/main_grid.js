var $ = require("jquery");
var Backbone = require("backbone");
var _ = require("underscore");
var hogan = require("hogan.js");
Backbone.$ = $;

var MainGridModel = Backbone.Model.extend({
  attributes: {
    tagId: null
  },
  initialize: function(params) {
    var tagId = (params.tagId === null) ? 0 : parseInt(params.tagId, 10);
    this.set("tagId", tagId);
    this.fetch();
  },
  setId: function(id) {
    this.set("tagId", id);
    this.fetch();
  },
  fetch: function() {
    var me = this;
    $.ajax({
        url: 'http://startupgrid-api-staging.herokuapp.com/tags/' + me.get("tagId") + '/posts.json',
        type: 'GET',
        dataType: 'json'
      })
      .done(function(posts) {
        me.set("posts", posts);
      });

  }
});

var MainGrid = Backbone.View.extend({
  initialize: function(params) {
    this.router = params.router;
    this.model.on("change", this.render, this);
  },
  template: function() {
    return hogan.compile($("#template-maingrid").html()).render(this.model.attributes);
  },
  render: function() {
    this.$el.html(this.template({}));
  }
});

module.exports = {
  MainGrid: MainGrid,
  MainGridModel: MainGridModel
};