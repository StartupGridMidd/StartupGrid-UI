var $ = require("jquery");
var Backbone = require("backbone");
var common = require("../common");
Backbone.$ = $;

var NavbarModel = Backbone.Model.extend({
  initialize: function() {

  },
  search: function(query) {
    var me = this;
    console.log("Fetching", query);
    if (me.get("query") !== query) {
      me.set("query", query);
      $.ajax({
        url: common.API_URL + '/search.json?q=' + query,
        type: 'GET',
        dataType: 'json'
      }).done(function(results) {
        console.log("Found", results.length, "results");
        me.set({
          "results": results,
          "showing": (results.length > 0 ? true : false)
        });
        me.trigger("search_results");
      });
    }
  }
});

module.exports = NavbarModel