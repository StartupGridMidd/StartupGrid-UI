module.exports = (function() {
    var Hogan = require('hogan.js');
    var templates = {};
    templates['about'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"nav-container\"></div>");t.b("\n" + i);t.b("<div class=\"container-fluid about\">");t.b("\n" + i);t.b("  <div class=\"row\">");t.b("\n" + i);t.b("    <div class=\"col-md-6 col-md-offset-3\">");t.b("\n" + i);t.b("      <h1>The Grid</h1>");t.b("\n" + i);t.b("      <p>We are a diverse team of Middlebury College students embarking on our first venture so others have the framework to start theirs.</p>");t.b("\n" + i);t.b("      <p>Instead of leaving it to time-starved entrepreneurs to filter through thousands of opinions, our team has gathered, curated, and organized the best startup material into one place. We’re adding a human element to this collection by incorporating exclusive interviews with top thought leaders because we believe everyone should be given the opportunity to follow their passion.</p>");t.b("\n" + i);t.b("      <p>After twenty-five days, hundreds of heady toppers, and thousands of curated posts we have set in motion a project to empower and engage the entrepreneurship community to organize its knowledge.</p>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("<h1 class=\"team\"> The Team </h1>");t.b("\n");t.b("\n" + i);t.b("<div class=\"team-container\">");t.b("\n");t.b("\n" + i);t.b("  <div class=\"row text-center\">");t.b("\n" + i);t.b("    <div class=\"col-sm-2 col-xs-6\">");t.b("\n" + i);t.b("      <div class=\"img-container img-responsive\">");t.b("\n" + i);t.b("        <img src=\"/img/face_photos/Ty_Danco.jpg\">");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("      <h4 class=\"fonts\">Ty Danco</h4>");t.b("\n" + i);t.b("      <h5>Instructor</h5>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <div class=\"col-sm-2 col-xs-6\">");t.b("\n" + i);t.b("      <div class=\"img-container\">");t.b("\n" + i);t.b("        <img src=\"/img/face_photos/Adam_Bouchard.png\">");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("      <h4>Adam Bouchard</h4>");t.b("\n" + i);t.b("      <h5>IT Design Advisor</h5>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <div class=\"col-sm-2 col-xs-6\">");t.b("\n" + i);t.b("      <div class=\"img-container\">");t.b("\n" + i);t.b("        <img src=\"/img/face_photos/David_Colander.jpg\" style=\"margin-top: -15px;\">");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("      <h4>David Colander</h4>");t.b("\n" + i);t.b("      <h5>Instructor</h5>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <div class=\"col-sm-2 col-xs-6\">");t.b("\n" + i);t.b("      <div class=\"img-container\">");t.b("\n" + i);t.b("        <img src=\"/img/face_photos/Jake_Vacovec.jpg\">");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("      <h4>Jake Vacovec</h4>");t.b("\n" + i);t.b("      <h5>Product Manager</h5>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <div class=\"col-sm-2 col-xs-6\">");t.b("\n" + i);t.b("      <div class=\"img-container\">");t.b("\n" + i);t.b("        <img src=\"/img/face_photos/Will_Potter.jpg\">");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("      <h4> Will Potter</h4>");t.b("\n" + i);t.b("      <h5>Programmer</h5>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <div class=\"col-sm-2 col-xs-6\">");t.b("\n" + i);t.b("      <div class=\"img-container\">");t.b("\n" + i);t.b("        <img src=\"/img/face_photos/Teddy_Knox.jpg\">");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("      <h4>Teddy Knox</h4>");t.b("\n" + i);t.b("      <h5>Programmer</h5>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("  </div>");t.b("\n");t.b("\n" + i);t.b(" <div class=\"row text-center\">");t.b("\n" + i);t.b("  <div class=\"col-sm-2 col-xs-6\">");t.b("\n" + i);t.b("    <div class=\"img-container\">");t.b("\n" + i);t.b("      <img src=\"/img/face_photos/Hunter_Huebsch.jpg\">");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <h4>Hunter Heubsch</h4>");t.b("\n" + i);t.b("    <h5>Designer</h5>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("  <div class=\"col-sm-2 col-xs-6\">");t.b("\n" + i);t.b("    <div class=\"img-container\">");t.b("\n" + i);t.b("      <img src=\"/img/face_photos/Will_Hanley.jpg\" style=\"margin-top: -20px; margin-right: 6px;\">");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <h4>Will Hanley</h4>");t.b("\n" + i);t.b("    <h5>Film Crew/Programmer</h5>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("  <div class=\"col-sm-2 col-xs-6\">");t.b("\n" + i);t.b("    <div class=\"img-container\">");t.b("\n" + i);t.b("      <img src=\"/img/face_photos/Weyland_Joyner.jpg\">");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <h4>Weyland Joyner</h4>");t.b("\n" + i);t.b("    <h5>Programmer</h5>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("  <div class=\"col-sm-2 col-xs-6\">");t.b("\n" + i);t.b("    <div class=\"img-container\">");t.b("\n" + i);t.b("      <img src=\"/img/face_photos/Sarah_Macy.jpg\">");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <h4>Sarah Macy</h4>");t.b("\n" + i);t.b("    <h5>Film Crew</h5>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("  <div class=\"col-sm-2 col-xs-6\">");t.b("\n" + i);t.b("    <div class=\"img-container\">");t.b("\n" + i);t.b("      <img src=\"/img/face_photos/Annesha_Bhattacharya.jpg\" style=\"\">");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <h4>Annesha Bhattacharya</h4>");t.b("\n" + i);t.b("    <h5>Social Media</h5>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("  <div class=\"col-sm-2 col-xs-6\">");t.b("\n" + i);t.b("    <div class=\"img-container\">");t.b("\n" + i);t.b("      <img src=\"/img/face_photos/Zach_Faber.jpg\">");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <h4>Zach Faber</h4>");t.b("\n" + i);t.b("    <h5>Researcher</h5>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n");t.b("\n" + i);t.b("<div class=\"row text-center\">");t.b("\n" + i);t.b("  <div class=\"col-sm-2 col-xs-6\">");t.b("\n" + i);t.b("    <div class=\"img-container\">");t.b("\n" + i);t.b("      <img src=\"/img/face_photos/Ben_Weaver.jpg\" class=\"img-wide\" style=\"margin-left: -15px;\">");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <h4>Ben Weaver</h4>");t.b("\n" + i);t.b("    <h5>Programmer</h5>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("  <div class=\"col-sm-2 col-xs-6\">");t.b("\n" + i);t.b("    <div class=\"img-container\">");t.b("\n" + i);t.b("      <img src=\"/img/face_photos/Matt_Milano.jpg\">");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <h4>Matt Milano</h4>");t.b("\n" + i);t.b("    <h5>Researcher</h5>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("  <div class=\"col-sm-2 col-xs-6\">");t.b("\n" + i);t.b("    <div class=\"img-container\">");t.b("\n" + i);t.b("      <img src=\"/img/face_photos/Cal_Williams.jpg\">");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <h4>Cal Williams</h4>");t.b("\n" + i);t.b("    <h5>Researcher</h5>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("  <div class=\"col-sm-2 col-xs-6\">");t.b("\n" + i);t.b("    <div class=\"img-container\">");t.b("\n" + i);t.b("      <img src=\"/img/face_photos/Chad_Kahn.jpg\">");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <h4>Chad Kahn</h4>");t.b("\n" + i);t.b("    <h5>Film Crew</h5>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("  <div class=\"col-sm-2 col-xs-6\">");t.b("\n" + i);t.b("    <div class=\"img-container\">");t.b("\n" + i);t.b("      <img src=\"/img/face_photos/Christian_Bonaventura.jpg\">");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <h4>Christian Bonaventura</h4>");t.b("\n" + i);t.b("    <h5>Film Crew</h5>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("  <div class=\"col-sm-2 col-xs-6\">");t.b("\n" + i);t.b("    <div class=\"img-container\">");t.b("\n" + i);t.b("      <img src=\"/img/face_photos/Leah_Fessler.jpg\" >");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <h4>Leah Fessler</h4>");t.b("\n" + i);t.b("    <h5>Social Media</h5>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n" + i);t.b("<div class=\"row text-center\">");t.b("\n" + i);t.b("  <div class=\"col-sm-2 col-xs-6\">");t.b("\n" + i);t.b("    <div class=\"img-container\">");t.b("\n" + i);t.b("      <img src=\"/img/face_photos/Gabe_Weissman.jpg\">");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <h4>Gabe Weissman</h4>");t.b("\n" + i);t.b("    <h5>Researcher</h5>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("  <div class=\"col-sm-2 col-xs-6\">");t.b("\n" + i);t.b("    <div class=\"img-container\">");t.b("\n" + i);t.b("      <img src=\"/img/face_photos/Devon_Nai.jpg\">");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <h4>Devon Nai</h4>");t.b("\n" + i);t.b("    <h5>Researcher</h5>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("  <div class=\"col-sm-2 col-xs-6\">");t.b("\n" + i);t.b("    <div class=\"img-container\">");t.b("\n" + i);t.b("      <img src=\"/img/face_photos/Chris_Frost.jpg\" class=\"img-wide\" style=\"margin-left: -25px;\">");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <h4>Chris Frost</h4>");t.b("\n" + i);t.b("    <h5>Researcher</h5>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("  <div class=\"col-sm-2 col-xs-6\">");t.b("\n" + i);t.b("    <div class=\"img-container\">");t.b("\n" + i);t.b("      <img src=\"/img/face_photos/Jim_Simmons.jpg\">");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <h4>Jim Simmons</h4>");t.b("\n" + i);t.b("    <h5>Researcher</h5>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("  <div class=\"col-sm-2 col-xs-6\">");t.b("\n" + i);t.b("    <div class=\"img-container\">");t.b("\n" + i);t.b("      <img src=\"/img/face_photos/Cathy_Wu.jpg\">");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <h4>Cathy Wu</h4>");t.b("\n" + i);t.b("    <h5>Researcher</h5>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("  <div class=\"col-sm-2 col-xs-6\">");t.b("\n" + i);t.b("    <div class=\"img-container\">");t.b("\n" + i);t.b("      <img src=\"/img/face_photos/Peter_Heidrich.jpg\" class=\"img-wide\" style=\"margin-right: 40 px\">");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <h4>Peter Heidrich</h4>");t.b("\n" + i);t.b("    <h5>Researcher</h5>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n");t.b("\n" + i);t.b("<div class=\"row text-center\">");t.b("\n" + i);t.b("  <div class=\"col-sm-2 col-xs-6\">");t.b("\n" + i);t.b("    <div class=\"img-container\">");t.b("\n" + i);t.b("      <img src=\"/img/face_photos/Anish_Johri.jpg\" style=\"margin-top: -15px\">");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <h4>Anish Johri</h4>");t.b("\n" + i);t.b("    <h5>Researcher</h5>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("  <div class=\"col-sm-2 col-xs-6\">");t.b("\n" + i);t.b("    <div class=\"img-container\">");t.b("\n" + i);t.b("      <img src=\"/img/face_photos/Raphael_Culioli.jpg\" class=\"img-wide\">");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <h4>Raphael Culioli</h4>");t.b("\n" + i);t.b("    <h5>Researcher</h5>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("  <div class=\"col-sm-2 col-xs-6\">");t.b("\n" + i);t.b("    <div class=\"img-container\">");t.b("\n" + i);t.b("      <img src=\"/img/face_photos/Kyle_Ashley.jpg\">");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <h4>Kyle Ashley</h4>");t.b("\n" + i);t.b("    <h5>Researcher</h5>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("  <div class=\"col-sm-2 col-xs-6\">");t.b("\n" + i);t.b("    <div class=\"img-container\">");t.b("\n" + i);t.b("      <img src=\"/img/face_photos/Yuan_Liu.jpg\">");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <h4>Yuan Liu</h4>");t.b("\n" + i);t.b("    <h5>Researcher </h5>");t.b("\n" + i);t.b("  </div>");t.b("\n");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n");t.b("\n");t.b("\n" + i);t.b("</div>");t.b("\n");t.b("\n");t.b("\n");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }});
    templates['author_browse'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"nav-container\"></div>");t.b("\n" + i);t.b("</nav>");t.b("\n" + i);t.b("<div class=\"container-fluid\">");t.b("\n" + i);t.b("  <div id=\"sg-grid\" class=\"author-browse\"></div>");t.b("\n" + i);t.b("</div>");t.b("\n" + i);t.b("<!-- <div class=\"sort-bar col-md-12\">");t.b("\n" + i);t.b("  <a href=\"\" class=\"selected\">relevance</a>");t.b("\n" + i);t.b("  <a href=\"\">popularity</a>");t.b("\n" + i);t.b("  <a href=\"\">recent</a>");t.b("\n" + i);t.b("</div> -->");t.b("\n");return t.fl(); },partials: {}, subs: {  }});
    templates['author_card'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"inner-img-container\">");t.b("\n" + i);t.b("  <img class=\"author-image\" src=\"");t.b(t.v(t.f("image_url",c,p,0)));t.b("\">");t.b("\n" + i);t.b("</div>");t.b("\n" + i);t.b("<div class=\"text-container\">");t.b("\n" + i);t.b("  <div class=\"author-card-name\">");t.b("\n" + i);t.b("    ");t.b(t.v(t.f("name",c,p,0)));t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("  <div class=\"authors-title\">");t.b("\n" + i);t.b("    ");t.b(t.v(t.f("title",c,p,0)));t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }});
    templates['contact'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"nav-container\"></div>");t.b("\n" + i);t.b("</nav>");t.b("\n" + i);t.b("<div class=\"container-fluid\">");t.b("\n" + i);t.b("  <div class=\"row\">");t.b("\n" + i);t.b("    <div class=\"col-md-6 col-md-offset-3\">");t.b("\n" + i);if(t.s(t.f("alert",c,p,1),c,p,0,147,222,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <div class=\"alert ");t.b(t.v(t.f("class",c,p,0)));t.b("\" role=\"alert\">");t.b(t.v(t.f("message",c,p,0)));t.b("</div>");t.b("\n" + i);});c.pop();}t.b("      <div class=\"contact\">");t.b("\n" + i);t.b("        <h1>Contact</h1>");t.b("\n" + i);t.b("        <form method=\"POST\" action=\"/__/forms/contact\">");t.b("\n" + i);t.b("          <div class=\"row\">");t.b("\n" + i);t.b("            <div class=\"form-group col-md-6\">");t.b("\n" + i);t.b("              <!-- <label for=\"name\">Name</label> -->");t.b("\n" + i);t.b("              <input class=\"form-control input-lg\" id=\"name\" type=\"text\" name=\"name\" placeholder=\"name\">");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);t.b("            <div class=\"form-group col-md-6\">");t.b("\n" + i);t.b("              <!-- <label for=\"email\">Email</label> -->");t.b("\n" + i);t.b("              <input class=\"form-control input-lg\" id=\"email\" type=\"email\" name=\"email\" placeholder=\"email\">");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);t.b("          </div>");t.b("\n" + i);t.b("          <div class=\"row\">");t.b("\n" + i);t.b("            <div class=\"form-group col-md-12\">");t.b("\n" + i);t.b("              <!-- <label for=\"message\">Message:</label> -->");t.b("\n" + i);t.b("              <textarea rows=\"4\" class=\"form-control input-lg\" id=\"message\" name=\"message\" placeholder=\"question\"></textarea>");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);t.b("          </div>");t.b("\n" + i);t.b("          <div class=\"form-group text-right no-margin\">");t.b("\n" + i);t.b("            <button type=\"submit\" class=\"btn btn-md btn-default\">submit</button>");t.b("\n" + i);t.b("            <div class=\"clear\"></div>");t.b("\n" + i);t.b("          </div>");t.b("\n" + i);t.b("        </form>");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }});
    templates['landing'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"container\">");t.b("\n" + i);t.b("  <div class =\"logo-container row\">");t.b("\n" + i);t.b("    <div class=\"col-md-8 col-md-offset-2\">");t.b("\n" + i);t.b("      <img src=\"img/logo_large.png\" alt=\"\" class=\"logo img-responsive\">");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("  <div class=\"row\">");t.b("\n" + i);t.b("    <div class=\"search\">");t.b("\n" + i);t.b("      <div class=\"col-md-12 col-md-offset\">");t.b("\n" + i);t.b("        <div class=\"left-inner-addon\">");t.b("\n" + i);t.b("          <i id=\"landing-search-img\" class=\"glyphicon glyphicon-search\"></i>");t.b("\n" + i);t.b("          <input type=\"text\" id=\"landing-search\" class=\"search-input form-control input-lg\"");t.b("\n" + i);t.b("            name=\"search\" placeholder=\"Search the grid...\" autofocus/>");t.b("\n" + i);t.b("          <div class=\"results col-md-12\">");t.b("\n");t.b("\n" + i);t.b("          </div>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("  <div class=\"subtopics-row row\">");t.b("\n" + i);if(t.s(t.f("topics",c,p,1),c,p,0,718,963,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <div class=\"subtopic-container col-md-3 col-sm-3 col-xs-6 text-center\">");t.b("\n" + i);t.b("      <div class=\"subtopic-card\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b("\n" + i);t.b("      <div><img src=\"/img/ui-elements/");t.b(t.v(t.f("id",c,p,0)));t.b(".png\" alt=\"\" width=\"70\"/></div>");t.b("\n" + i);t.b("      ");t.b(t.v(t.f("name",c,p,0)));t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);});c.pop();}t.b("  </div>");t.b("\n" + i);t.b("    <div class=\"row footer\">");t.b("\n" + i);t.b("      <li><a href=\"/about\"> who we are </a></li>");t.b("\n" + i);t.b("      <li><a href=\"/authors\"> thought leaders </a></li>");t.b("\n" + i);t.b("      <li><a href=\"/contact\"> contact </a></li>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }});
    templates['nav'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"container-fluid\">");t.b("\n" + i);t.b("  <div class=\"navbar-header\">");t.b("\n" + i);t.b("    <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#main-navbar-collapse\">");t.b("\n" + i);t.b("      <span class=\"sr-only\">Toggle navigation</span>");t.b("\n" + i);t.b("      <span class=\"icon-bar\"></span>");t.b("\n" + i);t.b("      <span class=\"icon-bar\"></span>");t.b("\n" + i);t.b("      <span class=\"icon-bar\"></span>");t.b("\n" + i);t.b("    </button>");t.b("\n" + i);t.b("    <a class=\"navbar-brand\" href=\"landing\">");t.b("\n" + i);t.b("      <img src=\"/img/logo.png\" alt=\"StartupGrid\" height=\"60\">");t.b("\n" + i);t.b("    </a>");t.b("\n" + i);t.b("  </div>");t.b("\n");t.b("\n" + i);t.b("  <div class=\"collapse navbar-collapse\" id=\"main-navbar-collapse\">");t.b("\n" + i);t.b("    <div class=\"main-search navbar-form navbar-left\" role=\"search\">");t.b("\n" + i);t.b("      <div class=\"form-group\">");t.b("\n" + i);t.b("        <input type=\"text\" id=\"nav-search\" value=\"");t.b(t.v(t.f("query",c,p,0)));t.b("\" class=\"form-control\" placeholder=\"Search\"/>");t.b("\n" + i);t.b("        <div class=\"results\">");t.b("\n");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("      </div><button id=\"nav-search-btn\" class=\"btn btn-default\">");t.b("\n" + i);t.b("      <span class=\"glyphicon glyphicon-search\" aria-hidden=\"true\"></span>");t.b("\n" + i);t.b("      </button>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <ul class=\"nav navbar-nav navbar-right\">");t.b("\n" + i);if(t.s(t.f("pages",c,p,1),c,p,0,1025,1118,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("        <li class=\"");if(t.s(t.f("active",c,p,1),c,p,0,1056,1062,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("active");});c.pop();}t.b("\"><a href=\"");t.b(t.v(t.f("path",c,p,0)));t.b("\">");t.b(t.v(t.f("name",c,p,0)));t.b("</a></li>");t.b("\n" + i);});c.pop();}t.b("    </ul>");t.b("\n" + i);t.b("  </div><!-- /.navbar-collapse -->");t.b("\n" + i);t.b("</div><!-- /.container-fluid -->");t.b("\n");return t.fl(); },partials: {}, subs: {  }});
    templates['post'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<ul class=\"reviewers\">");t.b("\n" + i);t.b("   <li>SG</li>");t.b("\n" + i);t.b("</ul>");t.b("\n" + i);t.b("<div class=\"img-frame\">");t.b("\n" + i);t.b("  <img src=\"");t.b(t.v(t.d("author.image_url",c,p,0)));t.b("\" alt=\"\">");t.b("\n" + i);t.b("</div>");t.b("\n" + i);t.b("<div class=\"text-container\">");t.b("\n" + i);t.b("  <div class=\"row card-row\">");t.b("\n" + i);t.b("    <div class=\"col-md-3 author-name\">");t.b(t.v(t.d("author.name",c,p,0)));t.b("</div>");t.b("\n" + i);t.b("    <div class=\"col-md-9 article-title\"><a class=\"link\" href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\">");t.b(t.v(t.f("title",c,p,0)));t.b("</a></div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("  <div class=\"row card-row\">");t.b("\n" + i);t.b("    <div class=\"col-md-3 company-name\">");t.b(t.v(t.d("author.title",c,p,0)));t.b("</div>");t.b("\n" + i);t.b("    <div class=\"col-md-9 summary\">");t.b(t.v(t.f("summary",c,p,0)));t.b("</div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("  <div class=\"row\">");t.b("\n" + i);t.b("    <div class=\"col-md-9 col-md-offset-3\">");t.b("\n" + i);t.b("      <ul class=\"tags\">");t.b("\n" + i);if(t.s(t.f("tags",c,p,1),c,p,0,591,660,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("          <li><a href=\"tags/");t.b(t.v(t.f("id",c,p,0)));t.b("/posts\">");t.b(t.v(t.f("name",c,p,0)));t.b("</a></li>");t.b("\n" + i);});c.pop();}t.b("      </ul>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }});
    templates['post_browse'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"nav-container\"></div>");t.b("\n" + i);t.b("</nav>");t.b("\n" + i);t.b("<div class=\"container-fluid\">");t.b("\n" + i);t.b("  <div class=\"row\">");t.b("\n" + i);t.b("    <div id=\"sidebar-container\" class=\"col-md-2\"></div>");t.b("\n" + i);t.b("    <div id=\"sg-grid\" class=\"sg-grid col-md-10\"></div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n" + i);t.b("<!-- <div class=\"sort-bar col-md-12\">");t.b("\n" + i);t.b("  <a href=\"\" class=\"selected\">relevance</a>");t.b("\n" + i);t.b("  <a href=\"\">popularity</a>");t.b("\n" + i);t.b("  <a href=\"\">recent</a>");t.b("\n" + i);t.b("</div> -->");t.b("\n");return t.fl(); },partials: {}, subs: {  }});
    templates['search'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"nav-container\"></div>");t.b("\n" + i);t.b("</nav>");t.b("\n" + i);t.b("<div class=\"container-fluid\">");t.b("\n" + i);t.b("  <div class=\"row\">");t.b("\n" + i);t.b("    <div id=\"sidebar-container\" class=\"col-md-2\"></div>");t.b("\n" + i);t.b("    <div id=\"sg-grid\" class=\"sg-grid col-md-10\"></div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n" + i);t.b("<!-- <div class=\"sort-bar col-md-12\">");t.b("\n" + i);t.b("  <a href=\"\" class=\"selected\">relevance</a>");t.b("\n" + i);t.b("  <a href=\"\">popularity</a>");t.b("\n" + i);t.b("  <a href=\"\">recent</a>");t.b("\n" + i);t.b("</div> -->");t.b("\n");return t.fl(); },partials: {}, subs: {  }});
    templates['sidebar'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"topics\">");t.b("\n" + i);if(t.s(t.f("topics",c,p,1),c,p,0,32,1020,"{{ }}")){t.rs(c,p,function(c,p,t){if(!t.s(t.f("topicInvisible",c,p,1),c,p,1,0,0,"")){t.b("<div class=\"sidebar-item topic ");t.b(t.v(t.f("topicSelected",c,p,0)));t.b("\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b("\n" + i);t.b("  <i class=\"glyphicon glyphicon-remove\"></i>");t.b("\n" + i);t.b("  <span class=\"number\">");t.b(t.v(t.f("count",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("  <span class=\"item-name\">");t.b(t.v(t.f("name",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("</div>");t.b("\n" + i);if(t.s(t.f("topicSelected",c,p,1),c,p,0,275,981,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("  <div class=\"subtopics\">");t.b("\n" + i);if(t.s(t.f("children",c,p,1),c,p,0,317,956,"{{ }}")){t.rs(c,p,function(c,p,t){if(!t.s(t.f("subtopicInvisible",c,p,1),c,p,1,0,0,"")){t.b("    <div class=\"sidebar-item subtopic ");t.b(t.v(t.f("subtopicSelected",c,p,0)));t.b("\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b("\n" + i);t.b("      <i class=\"glyphicon glyphicon-remove\"></i>");t.b("\n" + i);t.b("      <span class=\"number\">");t.b(t.v(t.f("count",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("      <span class=\"item-name\">");t.b(t.v(t.f("name",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);if(t.s(t.f("subtopicSelected",c,p,1),c,p,0,598,905,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("    <div class=\"tags\">");t.b("\n" + i);if(t.s(t.f("children",c,p,1),c,p,0,641,876,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("      <div class=\"sidebar-item tag ");t.b(t.v(t.f("tagSelected",c,p,0)));t.b("\" data-id=\"");t.b(t.v(t.f("id",c,p,0)));t.b("\">");t.b("\n" + i);t.b("        <i class=\"glyphicon glyphicon-remove\"></i>");t.b("\n" + i);t.b("        <span class=\"number\">");t.b(t.v(t.f("count",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("        <span class=\"item-name\">");t.b(t.v(t.f("name",c,p,0)));t.b("</span>");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);});c.pop();}t.b("    </div>");t.b("\n" + i);});c.pop();}};});c.pop();}t.b("  </div>");t.b("\n" + i);});c.pop();}};});c.pop();}t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }});
    return templates;
})();