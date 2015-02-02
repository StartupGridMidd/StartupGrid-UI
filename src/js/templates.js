module.exports = (function() {
    var Hogan = require('hogan.js');
    var templates = {};
    templates['browse'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"container-fluid\">");t.b("\n" + i);t.b("  <div class=\"row\">");t.b("\n" + i);t.b("    <div id=\"sidebar\" class=\"sidebar col-md-2\"></div>");t.b("\n" + i);t.b("    <div id=\"sg-grid\" class=\"sg-grid col-md-10\"></div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n" + i);t.b("<!-- <div class=\"sort-bar col-md-12\">");t.b("\n" + i);t.b("  <a href=\"\" class=\"selected\">relevance</a>");t.b("\n" + i);t.b("  <a href=\"\">popularity</a>");t.b("\n" + i);t.b("  <a href=\"\">recent</a>");t.b("\n" + i);t.b("</div> -->");return t.fl(); },partials: {}, subs: {  }});
    templates['grid'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<nav id=\"navbar\" class=\"navbar navbar-default\">");t.b("\n" + i);t.b("  <div class=\"container-fluid\">");t.b("\n" + i);t.b("    <div class=\"navbar-header\">");t.b("\n" + i);t.b("      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#main-navbar-collapse\">");t.b("\n" + i);t.b("        <span class=\"sr-only\">Toggle navigation</span>");t.b("\n" + i);t.b("        <span class=\"icon-bar\"></span>");t.b("\n" + i);t.b("        <span class=\"icon-bar\"></span>");t.b("\n" + i);t.b("        <span class=\"icon-bar\"></span>");t.b("\n" + i);t.b("      </button>");t.b("\n" + i);t.b("      <a class=\"navbar-brand\" href=\"#\">");t.b("\n" + i);t.b("        <img src=\"img/logo.png\" alt=\"StartupGrid\" height=\"60\">");t.b("\n" + i);t.b("      </a>");t.b("\n" + i);t.b("    </div>");t.b("\n");t.b("\n" + i);t.b("    <div class=\"collapse navbar-collapse\" id=\"main-navbar-collapse\">");t.b("\n" + i);t.b("      <div class=\"main-search navbar-form navbar-left\" role=\"search\">");t.b("\n" + i);t.b("        <div class=\"form-group\">");t.b("\n" + i);t.b("          <input type=\"text\" id=\"nav-search\" value=\"");t.b(t.v(t.f("query",c,p,0)));t.b("\" class=\"form-control\" placeholder=\"Search\">");t.b("\n" + i);t.b("          <div class=\"results\">");t.b("\n");t.b("\n" + i);t.b("          </div>");t.b("\n" + i);t.b("        </div><button id=\"nav-search-btn\" class=\"btn btn-default\">");t.b("\n" + i);t.b("        <span class=\"glyphicon glyphicon-search\" aria-hidden=\"true\"></span>");t.b("\n" + i);t.b("        </button>");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("      <ul class=\"nav navbar-nav navbar-right\">");t.b("\n" + i);t.b("        <li><a href=\"#\">who we are</a></li>");t.b("\n" + i);t.b("        <li><a href=\"#\">thought leaders</a></li>");t.b("\n" + i);t.b("        <li><a href=\"#\">contact</a></li>");t.b("\n" + i);t.b("        <li><a href=\"#\">blog</a></li>");t.b("\n" + i);t.b("      </ul>");t.b("\n" + i);t.b("    </div><!-- /.navbar-collapse -->");t.b("\n" + i);t.b("  </div><!-- /.container-fluid -->");t.b("\n" + i);t.b("</nav>");t.b("\n" + i);t.b("<div id=\"main\"></div>");return t.fl(); },partials: {}, subs: {  }});
    templates['landing'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"container\">");t.b("\n" + i);t.b("  <div class =\"logo-container row\">");t.b("\n" + i);t.b("    <div class=\"col-md-8 col-md-offset-2\">");t.b("\n" + i);t.b("      <img src=\"img/logo_large.png\" alt=\"\" class=\"logo img-responsive\">");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("  <div class=\"row\"> ");t.b("\n" + i);t.b("    <div class=\"search\">");t.b("\n" + i);t.b("      <div class=\"col-md-12 col-md-offset\">");t.b("\n" + i);t.b("        <div class=\"left-inner-addon\">");t.b("\n" + i);t.b("          <i id=\"landing-search-img\" class=\"glyphicon glyphicon-search\"></i>");t.b("\n" + i);t.b("          <input type=\"text\" id=\"landing-search\" class=\"search-input form-control input-lg\" name=\"search\" placeholder=\"Search the grid...\"/> ");t.b("\n" + i);t.b("          <div class=\"results col-md-12\">");t.b("\n");t.b("\n" + i);t.b("          </div>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("  </div>    ");t.b("\n" + i);t.b("  <div class=\"subtopics-row row\">");t.b("\n" + i);if(t.s(t.f("topics",c,p,1),c,p,0,702,949,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <div class=\"subtopic-container col-md-3 col-sm-4 col-xs-12 text-center\">");t.b("\n" + i);t.b("      <div class=\"subtopic-card\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b("\n" + i);t.b("      <div><img src=\"img/ui-elements/");t.b(t.v(t.f("name",c,p,0)));t.b(".png\" alt=\"\" width=\"70\"/></div>");t.b("\n" + i);t.b("      ");t.b(t.v(t.f("name",c,p,0)));t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);});c.pop();}t.b("  </div>");t.b("\n" + i);t.b("    <div class=\"row footer\">");t.b("\n" + i);t.b("      <li><a href=\"#\"> who we are </a></li>");t.b("\n" + i);t.b("      <li><a href=\"#\"> thought leaders </a></li>");t.b("\n" + i);t.b("      <li><a href=\"#\"> contact </a></li>");t.b("\n" + i);t.b("      <li><a href=\"#\"> blog </a></li>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("</div>");return t.fl(); },partials: {}, subs: {  }});
    templates['post'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<ul class=\"reviewers\">");t.b("\n" + i);t.b("   <li>SG</li>");t.b("\n" + i);t.b(" </ul>");t.b("\n" + i);t.b("<div class=\"image-container\">");t.b("\n" + i);t.b("  <div class=\"card-image\">");t.b("\n" + i);t.b("    <img src=\"");t.b(t.v(t.d("author.image_url",c,p,0)));t.b("\" alt=\"\">");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n" + i);t.b("<div class=\"text-container\">");t.b("\n" + i);t.b("  <div class=\"card-row\">");t.b("\n" + i);t.b("    <div class=\"col-md-3 author-name\">");t.b(t.v(t.d("author.name",c,p,0)));t.b("</div>");t.b("\n" + i);t.b("    <div class=\"col-md-9 article-title\">");t.b(t.v(t.f("title",c,p,0)));t.b("</div>");t.b("\n" + i);t.b("  </div>");t.b("\n");t.b("\n" + i);t.b("  <div class=\"card-row\">");t.b("\n" + i);t.b("    <div class=\"col-md-3 company-name\">");t.b(t.v(t.d("author.title",c,p,0)));t.b("</div>");t.b("\n" + i);t.b("    <div class=\"col-md-9 quote\">");t.b(t.v(t.f("summary",c,p,0)));t.b("</div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n" + i);t.b("<div class=\"expanded-section col-md-12\">");t.b("\n" + i);t.b("  <div class=\"col-md-12 tags\">");t.b("\n" + i);if(t.s(t.f("tags",c,p,1),c,p,0,580,642,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <span class=\"tag\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b(t.v(t.f("name",c,p,0)));t.b("</span>");t.b("\n" + i);});c.pop();}t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }});
    templates['search'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"container-fluid\">");t.b("\n" + i);t.b("  <div class=\"row\">");t.b("\n" + i);t.b("    <div id=\"sidebar\" class=\"sidebar col-md-2\"></div>");t.b("\n" + i);t.b("    <div id=\"sg-grid\" class=\"sg-grid col-md-10 col-md-offset-2\"></div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n" + i);t.b("<!-- <div class=\"sort-bar col-md-12\">");t.b("\n" + i);t.b("  <a href=\"\" class=\"selected\">relevance</a>");t.b("\n" + i);t.b("  <a href=\"\">popularity</a>");t.b("\n" + i);t.b("  <a href=\"\">recent</a>");t.b("\n" + i);t.b("</div> -->");t.b("\n");return t.fl(); },partials: {}, subs: {  }});
    templates['sidebar'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"topics\">");t.b("\n" + i);if(t.s(t.f("topics",c,p,1),c,p,0,32,1020,"{{ }}")){t.rs(c,p,function(c,p,t){if(!t.s(t.f("topicInvisible",c,p,1),c,p,1,0,0,"")){t.b("<div class=\"sidebar-item topic ");t.b(t.v(t.f("topicSelected",c,p,0)));t.b("\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b("\n" + i);t.b("  <i class=\"glyphicon glyphicon-remove\"></i>");t.b("\n" + i);t.b("  <span class=\"number\">");t.b(t.v(t.f("count",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("  <span class=\"item-name\">");t.b(t.v(t.f("name",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("</div>");t.b("\n" + i);if(t.s(t.f("topicSelected",c,p,1),c,p,0,275,981,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("  <div class=\"subtopics\">");t.b("\n" + i);if(t.s(t.f("children",c,p,1),c,p,0,317,956,"{{ }}")){t.rs(c,p,function(c,p,t){if(!t.s(t.f("subtopicInvisible",c,p,1),c,p,1,0,0,"")){t.b("    <div class=\"sidebar-item subtopic ");t.b(t.v(t.f("subtopicSelected",c,p,0)));t.b("\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b("\n" + i);t.b("      <i class=\"glyphicon glyphicon-remove\"></i>");t.b("\n" + i);t.b("      <span class=\"number\">");t.b(t.v(t.f("count",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("      <span class=\"item-name\">");t.b(t.v(t.f("name",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);if(t.s(t.f("subtopicSelected",c,p,1),c,p,0,598,905,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <div class=\"tags\">");t.b("\n" + i);if(t.s(t.f("children",c,p,1),c,p,0,641,876,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <div class=\"sidebar-item tag ");t.b(t.v(t.f("tagSelected",c,p,0)));t.b("\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b("\n" + i);t.b("        <i class=\"glyphicon glyphicon-remove\"></i>");t.b("\n" + i);t.b("        <span class=\"number\">");t.b(t.v(t.f("count",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("        <span class=\"item-name\">");t.b(t.v(t.f("name",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);});c.pop();}t.b("    </div>");t.b("\n" + i);});c.pop();}};});c.pop();}t.b("  </div>");t.b("\n" + i);});c.pop();}};});c.pop();}t.b("</div>");t.b("\n");t.b("\n");return t.fl(); },partials: {}, subs: {  }});
    return templates;
})();