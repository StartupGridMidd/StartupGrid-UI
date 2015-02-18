var Backbone = require("backbone");
var _ = require("underscore");

var PostModel = Backbone.Model.extend({
  toJSON: function() {
      var json = _.clone(this.attributes);
      json.summary_excerpt = json.summary.length > 300 ? json.summary.substring(0, 300) + "..." : json.summary;
      json.tags[json.tags.length - 1].last = true;
      return json;
  }
});

module.exports = PostModel
