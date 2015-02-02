"use strict";

var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;
var templates = require("../templates");

var PostView = Backbone.View.extend({
  tagName: 'div',
  className: 'result-card',
  events: {
    "click": "toggleExpand",
    "click .tag": "goToTag"
  },
  initialize: function() {
    this.attributes = {"data-url": this.model.get('url')};
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
  }
  // goToPost: function(e) {
  //   var url = $(e.currentTarget).data("url");
  //   window.open(url, '_blank');
  // },  
});

module.exports = PostView;