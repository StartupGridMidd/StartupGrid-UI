var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var bower = require('gulp-bower');


gulp.task('default', function () {
   // Your default task
});

gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest('build/lib/'));
});

gulp.task('js', function () {
   return gulp.src('js/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('default'))
      .pipe(uglify())
      .pipe(concat('app.js'))
      .pipe(gulp.dest('build'));
});

gulp.task('sass', function () {
    gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/css'));
});