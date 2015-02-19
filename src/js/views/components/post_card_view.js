"use strict";

var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;
var templates = require("../../templates");

var PostView = Backbone.View.extend({
  tagName: 'div',
  className: 'post-card',
  events: {
    "click .link": "goToPost",
    "click .tags li": "goToTag",
    "click": "toggleExpand"
  },
  initialize: function() {
    this.listenTo(this.model, "destroy", this.remove);
  },
  render: function() {
    this.$el.html(templates.post.render(this.model.toJSON()));
  },
  toggleExpand: function() {
    this.$el.toggleClass('expanded');
    // this.$el.css('height', 'auto');
  },
  goToTag: function(e) {
    e.preventDefault();
    e.stopPropagation();
    var path = $(e.target).attr("href");
    window.router.navigate(path, {trigger: true});
  },
  goToPost: function(e) {
    e.preventDefault();
    e.stopPropagation();
    var url = $(e.currentTarget).attr("href");
    var win = window.open(url, '_blank');
  win.focus();
  }
});

module.exports = PostView;
