var Backbone = require("backbone");

var NavModel = Backbone.Model.extend({
  defaults: {
    "pages": [
      {
        "path": "authors",
        "name": "thought leaders"
      },
      {
        "path": "about",
        "name": "about"
      },
      {
        "path": "contact",
        "name": "contact"
      }
    ]
  }
});

module.exports = NavModel
