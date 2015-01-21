var $ = require("jquery");
var Backbone = require("backbone");
var _ = require("underscore");
var hogan = require("hogan.js");

Backbone.$ = $;

var SidebarModel = Backbone.Model.extend({
  initialize: function(params) {
    this.set("tagId", parseInt(params.tagId, 10), {
      "silent": true
    });
    this.fetch();
  },
  fetch: function() {
    var me = this;
    $.ajax({
        url: 'http://startupgrid-api-staging.herokuapp.com/topics.json',
        type: 'GET',
        dataType: 'json'
      })
      .done(function(data) {
        me.defaultSelect(data, me.get("tagId"));
      });

  },
  defaultSelect: function(topics, id) {
    this.set("topics", topics, {
      "silent": true
    });
    this.select(id);
  },
  select: function(id) {
    var existsSelectedTopic = false;
    var topics = _.map(this.get("topics"), function(t) {
      var selectTopic = false;
      var topicHasSelectedSubtopic = false;
      _.each(t.children, function(st) {
        var selectSubtopic = false;
        _.each(st.children, function(tag) {
          if (tag.id === id) {
            tag.tagSelected = "selected";
            selectSubtopic = true;
          } else {
            delete tag.tagSelected;
          }
        });
        if (st.id === id || selectSubtopic === true) {
          st.subtopicSelected = "selected";
          selectTopic = true;
          topicHasSelectedSubtopic = true;
        } else {
          delete st.subtopicSelected;
        }
      });
      if (t.id === id || selectTopic === true) {
        t.topicSelected = "selected";
        existsSelectedTopic = true;
      } else {
        delete t.topicSelected;
      }
      _.each(t.children, function(st) {
        if (topicHasSelectedSubtopic === true && st.subtopicSelected !== "selected") {
          st.subtopicInvisible = true;
        } else {
          delete st.subtopicInvisible;
        }
      });
      return t;
    });
    _.each(topics, function(t) {
      if (existsSelectedTopic === true && t.topicSelected !== "selected") {
        t.topicInvisible = true;
      } else {
        delete t.topicInvisible;
      }
    });
    this.set({
      "tagId": id,
      "topics": topics
    }, {
      silent: true
    });
    this.trigger("change");
  },
  deselect: function(id) {
    var invisibleTopics = false;
    var topics = _.map(_.clone(this.get("topics")), function(t) {
      var invisibleSubtopics = false;
      var topicDeselect = false;
      if (t.id === id) {
        topicDeselect = true;
        invisibleTopics = true;
        delete t.topicSelected;
      }
      _.each(t.children, function(st) {
        var subtopicDeselect = false;
        if (st.id === id || topicDeselect === true) {
          delete st.subtopicSelected;
          invisibleSubtopics = true;
          subtopicDeselect = true;
        }
        _.each(st.children, function(tag) {
          if (tag.id === id || subtopicDeselect === true) {
            delete tag.tagSelected;
          }
        });
      });
      _.each(t.children, function(st) {
        if (invisibleSubtopics) {
          delete st.subtopicInvisible;
        }
      });
      return t;
    });
    _.each(topics, function(t) {
      if (invisibleTopics) {
        delete t.topicInvisible;
      }
    });
    this.set({
      "tagId": this.deepestSelectedTagId(topics),
      "topics": topics
    }, {
      silent: true
    });
    this.trigger("change");
  },
  deepestSelectedTagId: function(topics) {
    var selected = null;
    _.each(topics, function(t) {
      if (t.topicSelected === "selected") {
        selected = t;
      }
      _.each(t.children, function(st) {
        if (t.subtopicSelected === "selected") {
          selected = st;
        }
        _.each(st.children, function(tag) {
          if (tag.tagSelected === "selected") {
            selected = tag;
          }
        });
      });
    });
    return (selected === null) ? null : selected.id;
  }
});
var Sidebar = Backbone.View.extend({
  router: null,
  el: "#sidebar",
  events: {
    "click .sidebar-item": "select",
    "click .sidebar-item i": "cancel"
  },
  initialize: function(params) {
    this.router = params.router;
    this.model.on("change", this.render, this);
  },
  template: function() {
    return hogan.compile($("#template-sidebar").html()).render(this.model.attributes);
  },
  render: function() {
    this.$el.html(this.template());
  },
  select: function(e) {
    var id = $(e.currentTarget).data("id");
    this.model.select(id);
    var route = (this.model.get("tagId") === null) ? "/tags" : "tag/" + this.model.get("tagId");
    this.router.navigate(route);
  },
  showTags: function() {

  },
  cancel: function(e) {
    var id = $(e.currentTarget).parent().data("id");
    this.model.deselect(id);
    var route = (this.model.get("tagId") === null) ? "/tags" : "tag/" + this.model.get("tagId");
    this.router.navigate(route);
    e.stopPropagation();
  }
});
module.exports = {
  Sidebar: Sidebar,
  SidebarModel: SidebarModel
};