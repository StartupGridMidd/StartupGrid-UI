(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["index.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>StartupGrid</title>\n\n  <link rel=\"stylesheet\" href=\"dist/css/main.css\">\n</head>\n<body>\n  <div id=\"container\">\n    ";
env.getTemplate("partials/_header.html", function(t_3,t_1) {
if(t_3) { cb(t_3); return; }
t_1.render(context.getVariables(), frame.push(), function(t_4,t_2) {
if(t_4) { cb(t_4); return; }
output += t_2
output += "\n\n    <div id=\"main\"></div>\n  </div>\n\n  <script data-main=\"js/main\" src=\"bower_components/requirejs/require.js\"></script>\n</body>\n</html>";
cb(null, output);
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
