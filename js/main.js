require.config({
  baseUrl: "/js/",
  shim: {},
  packages: [],
  paths: {
    jquery: "../../bower_components/jquery/dist/jquery.min",
    underscore: "../../bower_components/underscore/underscore",
    bootstrap: "../../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap",
    backbone: "../../bower_components/backbone/backbone"
  }
});


require(['app'], function(app) {

});