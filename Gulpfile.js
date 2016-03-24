var gulp = require('gulp');

// Require Sass

var sass = require('gulp-sass');

// Tasks

gulp.task('sass', function(){
  return gulp.src('css/main.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('_site/css'))
});
