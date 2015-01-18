var $ = require("jquery");
var Backbone = require("backbone");
var _ = require("underscore");
var hogan = require("hogan.js");
Backbone.$ = $;


var subtopics = ["Administrative",
  "Compensation",
  "Recruiting",
  "Product &amp; Design",
  "Pitching",
  "Business Model",
  "Decks",
  "Education",
  "Entrepreneurs",
  "Accounting",
  "Capital",
  "Debt",
  "Equity",
  "Revenue Model",
  "Competition",
  "Customer Development",
  "Starting Up",
  "Lean",
  "Growth",
  "Angels",
  "Exits",
  "Fundraising",
  "Investment",
  "Valuation",
  "Mergers &amp; Acquisitions",
  "Negotiation",
  "Terms",
  "Advisors",
  "Board of Directors",
  "Introductions",
  "Founders",
  "Management",
  "Marketing",
  "Sales",
  "Legal/Lawyers",
  "Intellectual Property"
];

var SubtopicList = Backbone.View.extend({
  el: "#sg-grid",
  initialize: function() {
    console.log("creating subtopics template");
    var renderObject = {
      subtopics: _.map(subtopics, function(s) {
        return {
          name: s
        };
      })
    };
    this.template = hogan.compile($("#template-subtopics").html()).render(renderObject);
    this.render();

  },
  render: function() {

    $("#sg-grid").html(this.template);
  }
});

module.exports = SubtopicList;