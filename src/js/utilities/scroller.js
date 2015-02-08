"use strict";

var Backbone = require("backbone");
var _ = require("underscore");
var $ = require('jQuery');



var Scroller = function(sampleRate) {
  if (!(this instanceof Scroller)) {
    throw new Error("Constructor called as a function");
  }
  this.sampleRate = sampleRate || 10;
  this.sampleWait = this.sampleRate;
  this.$d = $(document);
  this.$w = $(window);
  var dpb = _.bind(this.detectPageBottom, this);
  $(document).scroll(function(){ setTimeout(dpb); });
};

_.extend(Scroller.prototype, Backbone.Events, {
  detectPageBottom: function() {
    if (this.sampleWait === 0) {
      this.sampleWait = this.sampleRate;
      var loadLine = this.$d.height() - (this.$w.height() * 2);
      if (window.pageYOffset >= loadLine) {
        this.trigger('scroll:nearBottom');
      }
    } else {
      this.sampleWait -= 1;
    }
  }
});

module.exports = Scroller;
