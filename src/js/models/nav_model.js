var Backbone = require("backbone");

var NavModel = Backbone.Model.extend({
  defaults: {
    "pages": [
      {
        "path": "posts",
        "active": false,
        "name": "the grid"
      },
      {
        "path": "about",
        "active": false,
        "name": "who we are"
      },
      {
        "path": "authors",
        "active": false,
        "name": "thought leaders"
      }
    ]
  }
});

module.exports = NavModel
