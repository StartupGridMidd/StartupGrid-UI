var $ = require("jquery");
var Backbone = require("backbone");
var common = require("../common");
Backbone.$ = $;

var LandingModel = Backbone.Model.extend({
  initialize: function() {
    this.fetch();
  },
  fetch: function() {
    var me = this;
    $.ajax({
      url: common.API_URL + '/topics.json?tree=false',
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
      url: common.API_URL + '/search.json?q=' + query,
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

module.exports = LandingModel;