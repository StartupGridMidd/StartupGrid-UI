"use strict";

var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;
var templates = require("../templates");
var NavView = require("./components/nav_view");
var NavModel = require("../models/nav_model");
var templates = require("../templates");

var ContactView = Backbone.View.extend({
  tagName: "div",
  id: "container",
  initialize: function(params) {
    if (params && params.status) {
      this.status = params.status;
    } else {
      this.status = "";
    }
    this.navModel = new NavModel();
    this.render();
  },
  alerts: {
    "success": {
      "class": "alert-success",
      "message": "Message sent successfully"
    },
    "failure": {
      "class": "alert-danger",
      "message": "Message failed to send",
    }
  },
  render: function() {
    var context = {
      alert: this.alerts[this.status]
    };
    this.navView = new NavView({model: this.navModel});
    this.$el.html(templates.contact.render(context));
    this.$("#nav-container").html(this.navView.el);
  }
});

module.exports = ContactView;
