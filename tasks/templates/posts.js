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
         m = require("moment");

module.exports = () => {

  return fs.readdir("./posts/", (err,files) => {

    if(err) throw err;

    files.forEach(file => {

      const frontMatter = gm.read(`./posts/${file}`),
            filename = path.basename(file, ".md");


      frontMatter["content"] = marked(frontMatter["content"]);

      const date = m(frontMatter["date"]);

      const dist = `./dist/${date.format('YYYY')}/${date.format('MM')}/${date.format('DD')}/${filename}`

      return fs.mkdir(dist, () =>
          gulp.src("templates/post.html")
              .pipe(nunjucks.compile(assign(frontMatter, data)))
              .pipe(rename("index.html"))
              .pipe(gulp.dest(dist)));

    });
  });
}
