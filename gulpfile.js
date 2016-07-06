'use strict';

const gulp = require('gulp'),
  nunjucks = require('gulp-nunjucks'),
    marked = require('marked'),
        gm = require('gray-matter');

gulp.task('default', () => {

  let data = gm.read('./index.md');

  data['content'] = marked(data['content']);

  return gulp.src('templates/index.html')
      .pipe(nunjucks.compile(data))
      .pipe(gulp.dest('dist'))
});
