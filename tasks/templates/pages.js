"use strict";

const marked = require("marked"),
      assign = require("lodash").assign,
      path = require("path"),
      data = require("../../data"),
      gm = require("gray-matter"),
      fs = require("fs"),
      compile_template = require("./compile_template");

module.exports = () => fs.readdir("./pages/", (err,files) => {

  if(err) throw err;

  files.forEach(file => {

    const frontMatter = gm.read(`./pages/${file}`),
          filename = path.basename(file, ".md"),
          dist = `./dist/${filename}`;


    frontMatter["content"] = marked(frontMatter["content"]);

    return fs.mkdir(dist, () =>
      compile_template("templates/page.html", assign(frontMatter, data), dist)
    );
  });

});
