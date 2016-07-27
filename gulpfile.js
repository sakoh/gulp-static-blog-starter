"use strict";

const gulp = require("gulp"),
      browserSync = require("browser-sync").create(),
      pages = require("./tasks/templates/pages"),
      posts = require("./tasks/templates/posts"),
      compile_template = require('./tasks/templates/compile_template'),
      data = require("./data");

gulp.task("front-page", () => compile_template("./templates/front-page.html", data, "./dist"));
gulp.task("pages", pages);
gulp.task("posts", posts);
gulp.task("default", ["pages", "posts", "front-page"]);

gulp.task("watch", ['default'], () => {
  const reload = browserSync.reload;

    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });

    gulp.watch(["./templates/**/*.html","./**/*.md","./data/**/*"],["default", reload]);
});
