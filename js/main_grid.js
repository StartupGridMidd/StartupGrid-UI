var $ = require("jquery");
var Backbone = require("backbone");
var _ = require("underscore");
var hogan = require("hogan.js");
Backbone.$ = $;

var sampleData = {
  subtopics: [{
    "id": 1,
    "name": "Administrative"
  }, {
    "id": 1,
    "name": "Compensation"
  }, {
    "id": 1,
    "name": "Recruiting"
  }, {
    "id": 1,
    "name": "Product & Design "
  }]
};

var MainGrid = Backbone.View.extend({
  initialize: function(params) {
    this.router = params.router;
    this.render();
    console.log("Loading maingrid");
  },
  template: function(obj) {
    return hogan.compile($("#template-maingrid").html()).render(obj);
  },
  render: function() {
    console.log(this.template(sampleData));
    this.$el.html(this.template(sampleData));
  }
});

module.exports = MainGrid;