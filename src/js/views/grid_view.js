"use strict";

var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;
var _ = require('underscore');

var templates = require("../templates");
var common = require("../common");

var GridModel = require("../models/grid_model");
var SidebarModel = require("../models/sidebar_model");

var BrowseView = require("./browse_view");
var SearchView = require("./search_view");
var SidebarView = require("./sidebar_view");

var GridView = Backbone.View.extend({
  el: "#container",
  events: {
    "keyup #nav-search": "searchKeyup",
    "click #nav-search-btn": "search",
    "click .results li": "navigate"
  },
  contacts: {
    d: $(document),
    w: $(window),
    loadingMessage: $('.loading'),
    doneMessage: $('.no-more')
  },
  infiniscroll: {
    scrollSampleRate: 10
  },
  initialize: function(params) {
    this.model = this.model || new GridModel();
    this.searchActionTimeout = 0;

    this.subViews = {
      browse: new BrowseView({
        gridModel: this.model,
      }),
      search: new SearchView({
        gridModel: this.model,
      })
    };

    _.bindAll(this, 'search', 'searchAction');
    // Listen to one in 10 scroll events
    var detectPageBottom = _.bind(this.detectPageBottom, this);
    // possibly put this in the events hash?
    this.contacts.d.scroll(function(){ setTimeout(detectPageBottom); });
    // this.model.on("search_results", this.renderResults, this);
    this.listenTo(this.model, 'change:query', this.setSearchInput);
    this.listenTo(this.model, 'change:tagId', this.setTagUrl);
  },
  setSearchInput: function() {
    if (this.searchActionTimeout.cleared) {
      var query = this.model.get('query');
      var input = this.$('#nav-search');
      if (query !== input.val()) {
        input.val(query);
      }
    }
  },
  searchAction: function(query, force) {
    if (query.length === 0) {
      var modelQuery = this.model.get('query');
      if (modelQuery !== query) {
        this.model.set('query', '');
        this.subViews.browse.render();
        router.navigate('posts');
      }
    } else if (query.length > 3 || force) {
      this.router.navigate("search/" + encodeURIComponent(query));
      this.model.set('query', query);
    }   
  },
  setTagUrl: function() {
    var tagId = this.model.get('tagId');
    var route = (tagId == null) ? "posts" : "tags/" + tagId + '/posts';
    router.navigate(route);
  },
  searchKeyup: function(e) {
    var self = this;
    setTimeout(function() { self.search(e); });
  },
  search: function(e) {
    e.preventDefault(); e.stopPropagation();
    var query = $(e.target).val();
    clearTimeout(this.searchActionTimeout);
    if (e.keyCode === 13) {
      this.searchAction(query, true);
    } else {
      this.searchActionTimeout = setTimeout(this.searchAction, 100, query, false);
    }
  },
  // resultsTemplate: function() {
  //   return templates.results.render(this.model.attributes);
  // },
  // renderResults: function() {
  //   this.$el.find(".results").html(this.resultsTemplate());
  // }
  render: function() {
    var self = this;
    this.$el.removeClass('landing');
    this.$el.html(templates.grid.render(this.model.toJSON()));
  },

  detectPageBottom: function() {
    if (!this.infiniscroll.sampleWait || this.infiniscroll.sampleWait == 0) {
      this.sampleWait = this.infiniscroll.scrollSampleRate;
      var loadLine = this.contacts.d.height() - (this.contacts.w.height() * 1.5);
      if (window.pageYOffset >= loadLine) {
        this.model.trigger('scroll:nearBottom');
      }
    } else {
      this.infiniscroll.sampleWait -= 1;
    }
  }
});

module.exports = GridView;