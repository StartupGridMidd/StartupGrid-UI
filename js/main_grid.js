var $ = require("jquery");
var Backbone = require("backbone");
var _ = require("underscore");
var hogan = require("hogan.js");
Backbone.$ = $;

var MainGridModel = Backbone.Model.extend({
  attributes: {
    tagId: null,
    router: null
  },
  initialize: function(params) {
    var tagId = (params.tagId === null) ? null : parseInt(params.tagId, 10);
    this.set("tagId", tagId);
    this.fetch();
  },
  setId: function(id) {
    this.set("tagId", id);
    this.fetch();
  },
  fetch: function() {
    var me = this;
    var tagPortion;
    if(this.get("tagId") !== null) {
      tagPortion = '/tags/' + me.get("tagId");
    } else {
      tagPortion = '';
    }
    var fetchUrl = 'http://startupgrid-api-production.herokuapp.com' + tagPortion + '/posts.json';
    $.ajax({
        url: fetchUrl,
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
    "click .result-card.expanded": "goToPost",
    "click .tag": "select"
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
    $(e.currentTarget).addClass('expanded');
  },
  goToPost: function(e) {
    var url = $(e.currentTarget).data("url");
    window.open(url, '_blank');
  },
  select: function(e) {
    var id = $(e.currentTarget).data("id");
    this.router.navigate("tag/"+id, {trigger: true});
    e.stopPropagation();
  },
});

module.exports = {
  MainGrid: MainGrid,
  MainGridModel: MainGridModel
};