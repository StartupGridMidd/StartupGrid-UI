var $ = require("jquery");
var Backbone = require("backbone");
var _ = require("underscore");
var hogan = require("hogan.js");
Backbone.$ = $;

var sampleData = { topics: [
  {id: 2, name: "Operations"},
  {id: 2, name: "Entrepeneurship"},
  {id: 2, name: "Finance"},
  {id: 2, name: "Stategy"},
  {id: 2, name: "Venture Funding"},
  {id: 2, name: "Leadership & Management"},
  {id: 2, name: "Marketing & Sales"},
  {id: 2, name: "Legal "}]
};

var LandingView = Backbone.View.extend({
  initialize: function(obj) {
    this.render();
  },
  events: {
    "click .subtopic-card": "goToTopic",
    "keypress .search-input": "search"
  },
  search: function() {
    console.log(arguments);
  },
  goToTopic: function() {
    console.log(this.navigate);
  },
  template: function(obj) {
    return hogan.compile($("#template-landing").html()).render(obj);
  },
  render: function() {
    this.$el.html(this.template(sampleData));
    this.$el.addClass('landing');
  }
});

module.exports = LandingView;