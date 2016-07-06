'use strict';

const gulp = require('gulp'),
  nunjucks = require('gulp-nunjucks'),
    marked = require('marked'),
    rename = require("gulp-rename"),
      path = require('path'),
        gm = require('gray-matter'),
        fs = require('fs');

gulp.task('default', () => {

  return fs.readdir('./content/', (err,files) => {

    if(err) throw err;

    files.forEach( file => {

      const data = gm.read(`./content/${file}`);
      const filename = path.basename(file, '.md');

      data['content'] = marked(data['content']);

      return gulp.src('templates/page.html')
          .pipe(nunjucks.compile(data))
          .pipe(rename(`${filename}.html`))
          .pipe(gulp.dest('dist'))
    });
  });
});
