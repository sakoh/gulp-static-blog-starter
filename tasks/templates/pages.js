"use strict";

const gulp = require("gulp"),
  nunjucks = require("gulp-nunjucks"),
    marked = require("marked"),
    rename = require("gulp-rename"),
      path = require("path"),
        gm = require("gray-matter"),
        fs = require("fs");

module.exports = () => {

  return fs.readdir("./pages/", (err,files) => {

    if(err) throw err;

    files.forEach(file => {

      const data = gm.read(`./pages/${file}`),
            filename = path.basename(file, ".md");

      let dist;

      if(filename !== "index") {
        dist = `./dist/${filename}`
      } else {
        dist = "./dist"
      }


      data["content"] = marked(data["content"]);

      return fs.mkdir(dist, () =>
          gulp.src("templates/page.html")
              .pipe(nunjucks.compile(data))
              .pipe(rename("index.html"))
              .pipe(gulp.dest(dist))
      );

    });

  });
}
