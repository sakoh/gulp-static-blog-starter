"use strict";

const gulp = require("gulp"),
      nunjucks = require("gulp-nunjucks"),
      marked = require("marked"),
      rename = require("gulp-rename"),
      assign = require("lodash").assign,
      path = require("path"),
      data = require("../../data"),
      gm = require("gray-matter"),
      fs = require("fs"),
      q = require("q");

module.exports = () => {
    return gulp.src("templates/front-page.html")
        .pipe(
          nunjucks.compile(
            assign(data)
          )
        )
        .pipe(rename("index.html"))
        .pipe(gulp.dest('dist'));
}
