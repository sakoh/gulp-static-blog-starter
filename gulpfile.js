const gulp = require('gulp'),
  nunjucks = require('gulp-nunjucks');

gulp.task('default', () =>
    gulp.src('templates/index.html')
        .pipe(nunjucks.compile({name: 'Sindre'}))
        .pipe(gulp.dest('dist'))
);
