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
      moment = require("moment");

module.exports = () => {

  return fs.readdir("./posts/", (err,files) => {

    if(err) throw err;

    files.forEach(file => {

      let frontMatter = gm.read(`./posts/${file}`),
            filename = path.basename(file, ".md");


      frontMatter["content"] = marked(frontMatter["content"]);

      let date = moment(frontMatter["data"]["date"]).format("YYYY/MM/DD");

      let dist = `./dist/${date}/${filename}`

      return fs.mkdir(dist, () =>
          gulp.src("templates/post.html")
              .pipe(nunjucks.compile(assign(frontMatter, data)))
              .pipe(rename("index.html"))
              .pipe(gulp.dest(dist)));

    });
  });
}
