"use strict";

const gulp = require("gulp"),
  nunjucks = require("gulp-nunjucks"),
    marked = require("marked"),
    rename = require("gulp-rename"),
    assign = require("lodash").assign,
      path = require("path"),
        gm = require("gray-matter"),
        fs = require("fs"),
         m = require("moment");

module.exports = () => {

  return fs.readdir("./posts/", (err,files) => {

    if(err) throw err;

    files.forEach(file => {

      const data = gm.read(`./posts/${file}`),
            filename = path.basename(file, ".md");


      data["content"] = marked(data["content"]);

      const date = m(data["date"]);

      const dist = `./dist/${date.format('YYYY')}/${date.format('MM')}/${date.format('DD')}/${filename}`

      return fs.mkdir(dist, () =>
          gulp.src("templates/post.html")
              .pipe(nunjucks.compile(assign(data, require('../../data'))))
              .pipe(rename("index.html"))
              .pipe(gulp.dest(dist))
      );

    });

  });
}
