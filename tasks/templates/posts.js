"use strict";

const marked = require("marked"),
      rename = require("gulp-rename"),
      assign = require("lodash").assign,
      path = require("path"),
      data = require("../../data"),
      gm = require("gray-matter"),
      fs = require("fs"),
      moment = require("moment"),
      compile_template = require("./compile_template");

module.exports = () => fs.readdir("./posts/", (err,files) => {

  if(err) throw err;

  files.forEach(file => {

    const frontMatter = gm.read(`./posts/${file}`),
          filename = path.basename(file, ".md");


    frontMatter["content"] = marked(frontMatter["content"]);

    const date = moment(frontMatter["data"]["date"]).format("YYYY/MM/DD"),
          dist = `./dist/${date}/${filename}`;

    return fs.mkdir(dist, () =>
      compile_template("templates/post.html", assign(frontMatter, data), dist)
    );
  });
});
