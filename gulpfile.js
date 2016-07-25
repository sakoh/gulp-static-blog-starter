"use strict";

const gulp = require("gulp"),
      pages = require("./tasks/templates/pages"),
      posts = require("./tasks/templates/posts"),
      frontPage = require("./tasks/templates/front-page");

gulp.task("front-page", frontPage);
gulp.task("pages", pages);
gulp.task("posts", posts);
gulp.task("default", ["pages", "posts", "front-page"]);
