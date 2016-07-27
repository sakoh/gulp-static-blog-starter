"use strict";

const gulp = require("gulp"),
      nunjucks = require("gulp-nunjucks"),
      rename = require("gulp-rename");

module.exports = (template, data, dist) =>
  gulp.src(template)
      .pipe(nunjucks.compile(data))
      .pipe(rename("index.html"))
      .pipe(gulp.dest(dist));
