var $ = require("jquery");
var Backbone = require("backbone");
var _ = require("underscore");
var hogan = require("hogan.js");

Backbone.$ = $;

var SidebarModel = Backbone.Model.extend({
  initialize: function(params) {
    this.set("topicId", parseInt(params.topicId,10));
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
        me.defaultSelect(data, me.get("topicId"));
      });

  },
  defaultSelect: function(topics, id) {
    this.set("topics", topics);
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
        if(topicHasSelectedSubtopic === true && st.subtopicSelected !== "selected") {
          st.subtopicInvisible = true;
        } else {
          delete st.subtopicInvisible;
        }
      });
      return t;
    });
    _.each(topics, function(t) {
        if(existsSelectedTopic === true && t.topicSelected !== "selected") {
          t.topicInvisible = true;
        } else {
          delete t.topicInvisible;
        }
      }
    );
    this.set({
      "topics": topics
    });
    this.trigger('change');
  },
  deselect: function(id) {
    var invisibleTopics = false;
    var topics = _.map(this.get("topics"), function(t) {
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
        if(invisibleSubtopics) {
          delete st.subtopicInvisible;
        }
      });
      return t;
    });
    _.each(topics, function(t) {
      if(invisibleTopics) {
        delete t.topicInvisible;
      }
    });
    this.set({
      "topics": topics
    });
    this.trigger('change');
  },
  deepestSelectedTagRoute: function() {
    var topics = this.get("topics");
    var selected = null;
    _.each(topics, function(t) {
      if(t.topicSelected==="selected") {selected = t;}
      _.each(t.children, function(st) {
        if(t.subtopicSelected==="selected") {selected = st;}
        _.each(st.children, function(tag) {
          if(tag.tagSelected==="selected") {selected = tag;}
        });
      });
    });
    if(selected === null) {
      return "/tags";
    }
    else {
      return "tag/" + selected.id;
    }
  },
  renderObject: function() {
    return {
      topics: this.get("topics")
    };
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
    console.log(params);
    this.router = params.router;
    this.model = new SidebarModel({
      topicId: params.topicId
    });
    this.model.on("change", this.render, this);
  },
  template: function(obj) {
    return hogan.compile($("#template-sidebar").html()).render(obj);
  },
  render: function() {
    this.$el.html(this.template(this.model.renderObject()));
  },
  select: function(e) {
    var id = $(e.currentTarget).data("id");
    this.model.select(id);
    this.router.navigate("tag/" + id);
  },
  showTags: function() {

  },
  cancel: function(e) {
    var id = $(e.currentTarget).parent().data("id");
    this.model.deselect(id);
    ;
    this.router.navigate(this.model.deepestSelectedTagRoute());
    e.stopPropagation();
  }
});
module.exports = Sidebar;