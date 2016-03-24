var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync'),
    cp = require('child_process');

gulp.task('styles', function() {
  return gulp.src('src/sass/*.sass')
    .pipe(plumber())
    .pipe(sass({ style: 'expanded' }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('stylesheets'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('stylesheets'))
    .pipe(gulp.dest('_site/stylesheets'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('scripts', function() {
  return gulp.src('src/javascripts/**/*.js')
    //.pipe(jshint('.jshintrc'))
    //.pipe(jshint.reporter('default'))
    .pipe(concat('site.js'))
    .pipe(gulp.dest('javascripts'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('javascripts'))
    .pipe(gulp.dest('_site/javascripts'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('clean', function() {
  return gulp.src(['stylesheets', 'javascripts'], {read: false})
    .pipe(clean());
});

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify('Building Jekyll');
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
        .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['jekyll-build'], function() {
    browserSync.init(null, {
        server: {
            baseDir: '_site'
        },
        host: "localhost"
    });
});

gulp.task('watch', function() {
  // Watch .sass files
  gulp.watch('src/sass/**/*.sass', ['styles']);
  // Watch .js files
  gulp.watch('src/javascripts/**/*.js', ['scripts']);
  gulp.watch(['index.html', '_layouts/*.html', '_posts/*'], ['jekyll-rebuild']);
});

gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'scripts', 'browser-sync', 'watch');
});


// var gulp          = require('gulp');
// var gulpUtil      = require('gulp-util');
//
// var gulpIf        = require('gulp-if');
// var browserSync   = require('browser-sync').create();
// var uglify        = require('gulp-uglify');
// var sass          = require('gulp-ruby-sass');
// var sourcemaps    = require('gulp-sourcemaps');
// var jshint        = require('gulp-jshint');
// var jshintStylish = require('jshint-stylish');
// var useref        = require('gulp-useref');
// var imagemin      = require('gulp-imagemin');
// var del           = require('del');
// var minifycss     = require('gulp-minify-css');
// var rename        = require('gulp-rename');
// var notify        = require('gulp-notify');
//
// // Tasks
//
//
// gulp.task('build:sass', function () {
//   return sass('scss/main.scss', { sourcemap: true })
//     .on('error', sass.logError)
//     .pipe(sourcemaps.write())
//     .pipe(sourcemaps.write('maps', {
//       includeContent: false,
//       sourceRoot: 'source'
//     }))
//     .pipe(gulp.dest('./_site/css'));
// });
//
//
// gulp.task('styles', function() {
//   return sass('sass', { style: 'expanded' })
//     .pipe(gulp.dest('css'))
//     .pipe(rename({suffix: '.min'}))
//     .pipe(minifycss())
//     .pipe(gulp.dest('css'));
// });
