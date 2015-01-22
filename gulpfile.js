var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var nunjucks = require('gulp-nunjucks');
var gulp = require('gulp');
var browserify = require('gulp-browserify');


gulp.task('default', ['sass', 'js'], function() {});

gulp.task('js', function() {
  gulp.src('js/main.js')
    .pipe(browserify({
      insertGlobals: true,
      debug: true
    }))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('templates', function() {
  return gulp.src('templates/index.html')
    .pipe(nunjucks())
    .pipe(gulp.dest('dist'));
});

gulp.task('sass', function() {
  gulp.src('./scss/*.scss')
    .pipe(sass( {
      errLogToConsole: true,
      sourceComments: 'normal'
    }))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function() {
  gulp.watch('scss/*.scss', ['sass']);
  gulp.watch('js/*.js', ['js']);
});