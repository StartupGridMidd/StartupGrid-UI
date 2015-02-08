"use strict";

var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;
var templates = require("../../templates");

var AuthorView = Backbone.View.extend({
  tagName: 'div',
  className: 'author-card',
  events: {
    "click": "goToAuthor"
  },
  initialize: function() {
    this.listenTo(this.model, "destroy", this.remove);
  },
  render: function() {
    this.$el.html(templates.author_card.render(this.model.toJSON()));
  },
  goToAuthor: function(e) {
    var path = 'authors/' + this.model.get('id');
    router.navigate(path, {trigger: true});
  }
});

module.exports = AuthorView;