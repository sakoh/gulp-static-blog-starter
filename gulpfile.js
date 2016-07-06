"use strict";

const gulp = require("gulp"),
      pages = require("./tasks/templates/pages"),
      posts = require("./tasks/templates/posts");

gulp.task("pages", pages);
gulp.task("posts", posts);
gulp.task("default", ["pages", "posts"]);
