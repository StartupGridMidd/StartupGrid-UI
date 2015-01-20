var $ = require("jquery");
var Backbone = require("backbone");
var _ = require("underscore");
var hogan = require("hogan.js");
Backbone.$ = $;

var GridQuery = Backbone.Model.extend({

});

var MainGrid = Backbone.View.extend({
  initialize: function(params) {
    this.router = params.router;
    this.render();
  },
  template: function(obj) {
    return hogan.compile($("#template-maingrid").html()).render(obj);
  },
  render: function() {
    this.$el.html(this.template({}));
  }
});

module.exports = MainGrid;