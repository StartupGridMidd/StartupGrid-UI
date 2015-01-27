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
        url: 'http://startupgrid-api-production.herokuapp.com/tags/' + me.get("tagId") + '/posts.json',
        type: 'GET',
        dataType: 'json'
      })
      .done(function(posts) {
        me.set("posts", posts);
      });

  }
});

var MainGrid = Backbone.View.extend({
  events: {
    "click .result-card": "expand",

    //"click .result-card.expanded": "goToPost"
  },
  initialize: function(params) {
    this.router = params.router;
    this.model.on("change", this.render, this);
  },
  template: function() {
    return hogan.compile($("#template-maingrid").html()).render(this.model.attributes);
  },
  render: function() {
    this.$el.html(this.template({}));
  },
  

  expand: function(e) {
    $(e.currentTarget).toggleClass('expanded');
    $(e.currentTarget).toggleClass('article-link');
  },
  goToPost: function(e) {
    var url = $(e.currentTarget).data("url");
    window.open(url, '_blank');
  }
});

module.exports = {
  MainGrid: MainGrid,
  MainGridModel: MainGridModel
};