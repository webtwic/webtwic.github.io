var gulp          = require('gulp');
var gulpUtil      = require('gulp-util');

var gulpIf        = require('gulp-if');
var browserSync   = require('browser-sync').create();
var uglify        = require('gulp-uglify');
var sass          = require('gulp-ruby-sass');
var jshint        = require('gulp-jshint');
var jshintStylish = require('jshint-stylish');
var useref        = require('gulp-useref');
var imagemin      = require('gulp-imagemin');
var del           = require('del');

// Tasks


gulp.task('build:sass', function () {
  return sass('scss/main.scss')
    .on('error', sass.logError)
    .pipe(gulp.dest('_site/css'));
});
