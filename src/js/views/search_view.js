var $ = require("jquery");
var Backbone = require("backbone");
var _ = require("underscore");
var templates = require("../templates");
Backbone.$ = $;

var SearchView = Backbone.View.extend({
  events: {
    "click .result-card": "expand",
    "click .result-card.expanded": "goToPost",
    "click .tag": "select"
  },
  initialize: function() {
    this.model.on("change", this.render, this);
  },
  template: function() {
    return templates.maingrid.render(this.model.attributes);
  },
  render: function() {
    if(this.model.get("searchQuery") != null) {
      this.$el.html(this.template({}));
    }
  },
  expand: function(e) {
    $(e.currentTarget).addClass('expanded');
  },
  goToPost: function(e) {
    var url = $(e.currentTarget).data("url");
    window.open(url, '_blank');
  },
  select: function(e) {
    var id = $(e.currentTarget).data("id");
    this.model.set("showing", null);
    e.stopPropagation();
  },
});

module.exports = SearchView;