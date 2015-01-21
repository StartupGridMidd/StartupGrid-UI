var $ = require("jquery");
var Backbone = require("backbone");
var hogan = require("hogan.js");
Backbone.$ = $;

var LandingModel = Backbone.Model.extend({
  initialize: function() {
    this.fetch();
    this.fetchTags();
  },
  fetch: function() {
    var me = this;
    $.ajax({
      url: 'http://startupgrid-api-production.herokuapp.com/topics.json',
      type: 'GET',
      dataType: 'json'
    })
    .done(function(data) {
      me.set("topics", data);
    });
  },
  fetchTags: function() {
    var me = this;
    $.ajax({
      url: 'http://startupgrid-api-production.herokuapp.com/tags.json',
      type: 'GET',
      dataType: 'json'
    })
    .done(function(searchTag) {
      me.set("tags", searchTag);
    });
  }
});
var LandingView = Backbone.View.extend({
  initialize: function(params) {
    this.router = params.router;
    this.model = new LandingModel();
    this.model.on("change", this.render, this);
  },
  events: {
    "click .subtopic-card": "goToTopic",
    "keypress .search-input": "searchPosts"
  },
  searchPosts: function(e) {
    if (e.keyCode == 13) {
      clickSearch();
      var searchText = document.getElementById("landing-search").value;
      var id = $(e.searchText).searchTag("id");
      //this.router.navigate("tag/" + id, {trigger: true});
      console.log(id);
    }
  },
  goToTopic: function(e) {
    var id = $(e.currentTarget).data("id");
    this.router.navigate("tag/" + id, {trigger: true});
  },
  template: function() {
    return hogan.compile($("#template-landing").html()).render(this.model.attributes);
  },
  render: function() {
    this.$el.html(this.template());
    this.$el.addClass('landing');
  }
});

module.exports = LandingView;