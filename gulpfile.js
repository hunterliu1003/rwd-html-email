"use strict";

var gulp = require('gulp'),
  gulpConnect = require('gulp-connect'),
  gulpInlineCss = require('gulp-inline-css'),
  gulpHtmlMin = require('gulp-htmlmin'),
  gulpReplace = require('gulp-replace'),
  siphon = require('siphon-media-query'),
  fs = require('fs');

gulp.task('connect', function() {
  gulpConnect.server({
    root: '',
    port: 8080,
    livereload: true
  });
});

gulp.task('html', function() {
  gulp.src('*.html')
    .pipe(gulpInlineCss({
      preserveMediaQueries: true
    }))
    .pipe(gulpReplace('<!-- <style> -->', '<style>\n'+inliner('style/css/rt-foundation-emails.css')+'\n</style>'))
    .pipe(gulpHtmlMin({
      collapseWhitespace: true,
      minifyCSS: true
    }))
    .pipe(gulp.dest('build/'))

    .pipe(gulpConnect.reload());
});

function inliner(css) {
  var css = fs.readFileSync(css).toString();
  var mqcss = siphon(css);
  return mqcss;
}

gulp.task('watch', function() {
  gulp.watch(['*.html'], ['html']);
});

gulp.task('default', ['connect', 'watch']);