var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');
var compile = require('gulp-hogan-compile');

gulp.task('default', ['sass', 'mustache', 'js', 'html', 'img']);

gulp.task('js', function() {
  gulp.src('./src/js/main.js')
    .pipe(browserify({
      insertGlobals: true,
      debug: true
    }))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('sass', function() {
  gulp.src('./src/scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('mustache', function() {
  gulp.src('./src/tmpl/**/*.mustache')
    .pipe(compile('templates.js', {wrapper: 'commonjs', hoganModule: 'hogan.js'}))
    .pipe(gulp.dest('./src/js'));
});

gulp.task('html', function() {
  gulp.src('./src/index.html').pipe(gulp.dest('./dist'));
});

gulp.task('img', function() {
  gulp.src('./src/img/**').pipe(gulp.dest('./dist/img'));
});

gulp.task('watch', ['default'], function() {
  gulp.watch('./src/scss/*.scss', ['sass']);
  gulp.watch('./src/js/**/*.js', ['js']);
  gulp.watch('./src/tmpl/**/*.mustache', ['mustache', 'js']);
  gulp.watch('./src/index.html', ['html']);
  gulp.watch('./src/img/**', ['img']);
});