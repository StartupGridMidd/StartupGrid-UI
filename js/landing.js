var $ = require("jquery");
var Backbone = require("backbone");
var hogan = require("hogan.js");
Backbone.$ = $;

var LandingModel = Backbone.Model.extend({
  initialize: function() {
    this.fetch();
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
    "keypress .search-input": "searchPosts",
  },
  searchPosts: function(e) {
    if (e.keyCode == 13) {
      var searchText = document.getElementById('landing-search').value;
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