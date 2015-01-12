var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var nunjucks = require('gulp-nunjucks');


gulp.task('default', ['sass', 'js'], function () {
   // Your default task
});


gulp.task('js', function () {
   return gulp.src('js/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('default'))
      .pipe(uglify())
      .pipe(concat('app.js'))
      .pipe(gulp.dest('./dist/js'));
});

gulp.task('templates', function () {
    return gulp.src('templates/index.html')
        .pipe(nunjucks())
        .pipe(gulp.dest('dist'));
});

gulp.task('sass', function () {
    gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function() {
  gulp.watch('scss/*.scss', ['sass']);
  gulp.watch('js/*.js', ['js']);
});