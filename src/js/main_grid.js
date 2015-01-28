var $ = require("jquery");
var Backbone = require("backbone");
var _ = require("underscore");
var hogan = require("hogan.js");
var common = require("./common");
Backbone.$ = $;

var MainGridModel = Backbone.Model.extend({
  attributes: {
    tagId: null,
    router: null
  },
  initialize: function(params) {
    var tagId = (params.tagId === null) ? null : parseInt(params.tagId, 10);
    this.set({
      "tagId": tagId,
      "searchQuery": params.searchQuery
    });
    if (this.get("searchQuery")) {
      this.search();
    } else {
      this.fetch();
    }
  },
  setId: function(id, options) {
    if (options.clicked === true) {
      this.set("tagId", id);
      this.fetch();
    }
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
      console.log("got tag posts", posts);
      me.set("posts", posts);
    });
  },
  search: function() {
    var me = this;
    var searchUrl = common.API_URL + '/search.json?q=' + me.get("searchQuery");
    $.ajax({
      url: searchUrl,
      type: 'GET',
      dataType: 'json'
    }).done(function(posts) {
      console.log("got search posts", posts);
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
    this.router.navigate("tag/" + id, {
      trigger: true
    });
    e.stopPropagation();
  },
});

module.exports = {
  MainGrid: MainGrid,
  MainGridModel: MainGridModel
};