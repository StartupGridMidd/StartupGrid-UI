var Backbone = require('backbone');

var Topic = Backbone.Model.extend({

});

var Topics = Backbone.Collection.extend({
  model: Topic
});

module.exports = {
  Topic: Topic,
  Topics: Topics
};