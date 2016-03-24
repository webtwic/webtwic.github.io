var gulp          = require('gulp');
var gulpUtil      = require('gulp-util');

var gulpIf        = require('gulp-if');
var browserSync   = require('browser-sync').create();
var uglify        = require('gulp-uglify');
var sass          = require('gulp-ruby-sass');
var sourcemaps    = require('gulp-sourcemaps');
var jshint        = require('gulp-jshint');
var jshintStylish = require('jshint-stylish');
var useref        = require('gulp-useref');
var imagemin      = require('gulp-imagemin');
var del           = require('del');

// Tasks


gulp.task('build:sass', function () {
  return sass('scss/main.scss', { sourcemap: true })
    .on('error', sass.logError)
    .pipe(sourcemaps.write())
    .pipe(sourcemaps.write('maps', {
      includeContent: false,
      sourceRoot: 'source'
    }))
    .pipe(gulp.dest('./_site/css'));
});
