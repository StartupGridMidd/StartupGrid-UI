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
      url: 'http://startupgrid-api-production.herokuapp.com/topics.json?tree=false',
      type: 'GET',
      dataType: 'json'
    })
    .done(function(data) {
      me.set("topics", data);
      me.trigger("topics_change");
    });    
  },
  search: function(query) {
    var me = this;
    console.log("Fetching", query);
    $.ajax({
      url: 'http://startupgrid-api-production.herokuapp.com/search.json?q=' + query,
      type: 'GET',
      dataType: 'json'
    }).done(function(results) {
      me.set({ 
        "results": results,
        "showing": (results.length > 0 ? true : false)
      });
      me.trigger("search_received");
    });
  }
});
var LandingView = Backbone.View.extend({
  initialize: function(params) {
    this.router = params.router;
    this.model = new LandingModel();
    this.model.on("topics_change", this.render, this);
    this.model.on("search_received", this.renderResults, this);
  },
  events: {
    "click .subtopic-card": "goToTopic",
    "keypress .search-input": "searchPosts",
    "click .btn": "clickSearchPosts",
  },
  searchPosts: function(e) {
    var searchText = $(e.currentTarget).val();
    this.model.search(searchText);
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  },
  clickSearchPosts: function() {
    var searchText = $('search-input').val();
    this.model.search(searchText);
  },
  goToTopic: function(e) {
    var id = $(e.currentTarget).data("id");
    this.router.navigate("tag/" + id, {trigger: true});
  },
  template: function() {
    return hogan.compile($("#template-landing").html()).render(this.model.attributes);
  },
  resultsTemplate: function() {
    return hogan.compile($("#template-results").html()).render(this.model.attributes);
  },
  render: function() {
    this.$el.html(this.template());
    this.$el.addClass('landing');
  },
  renderResults: function() {
    this.$el.find(".results").html(this.resultsTemplate());
  }
});

module.exports = LandingView;