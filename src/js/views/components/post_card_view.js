"use strict";

var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;
var templates = require("../../templates");

var PostView = Backbone.View.extend({
  tagName: 'div',
  className: 'result-card',
  events: {
    "click .link": "goToPost",
    "click .tag": "goToTag",
    "click": "toggleExpand"
  },
  initialize: function() {
    this.listenTo(this.model, "destroy", this.remove);
  },
  render: function() {
    this.$el.html(templates.post.render(this.model.toJSON()));
  },
  toggleExpand: function(e) {
    this.$el.toggleClass('expanded');
  },
  goToTag: function(e) {
    var tagId = $(e.target).data('id');
    router.navigate('tags/' + tagId + '/posts', {trigger: true});
  },
  goToPost: function(e) {
    e.preventDefault();
    e.stopPropagation();
    var url = $(e.currentTarget).attr("href");
    location.assign(url);
  }
});

module.exports = PostView;