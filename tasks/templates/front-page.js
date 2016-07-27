"use strict";

const gulp = require("gulp"),
      nunjucks = require("gulp-nunjucks"),
      rename = require("gulp-rename"),
      data = require("../../data");

module.exports = () =>
  gulp.src("templates/front-page.html")
      .pipe(nunjucks.compile(data))
      .pipe(rename("index.html"))
      .pipe(gulp.dest('dist'));
