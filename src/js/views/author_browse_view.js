"use strict";

var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;
var _ = require("underscore");
var templates = require("../templates");

var NavView = require("./components/nav_view");
var NavModel = require("../models/nav_model");
var AuthorCollection = require("../collections/author_collection");
var AuthorCardView = require("./components/author_card_view");
var Scroller = require("../utilities/scroller");

var AuthorBrowseView = Backbone.View.extend({
  tagName: "div",
  id: "container",
  initialize: function() {
    _.bindAll(this, 'render', 'addAuthor', 'loadMore');
    this.navModel = new NavModel();
    this.scroller = new Scroller();
    this.navView = new NavView({model: this.navModel});
    this.collection = new AuthorCollection();
    this.listenTo(this.collection.fullCollection, "add", this.addAuthor);
    this.listenTo(this.scroller, "scroll:nearBottom", this.loadMore);
    this.render();
  },
  loadMore: function() {
    var self = this;
    if (!this.loading) {
      this.loading = true;
      try {
        this.collection.getNextPage().done(function() {
          self.loading = false;
        });
      } catch (e) {
        if (!/^No link found/g.test(e.message)) {
          throw e;
        }
      }
    }
  },
  addAuthor: function(authorModel) {
    var authorCardView = new AuthorCardView({model: authorModel});
    authorCardView.render();
    this.$('#sg-grid').append(authorCardView.el);
    authorCardView.delegateEvents();
  },
  render: function() {
    this.loading = false;
    this.navView = new NavView({model: this.navModel});
    this.$el.html(templates.author_browse.render());
    this.$("#nav-container").html(this.navView.el);
    this.collection.getFirstPage();
  }
});

module.exports = AuthorBrowseView;
