const gulp = require('gulp');
const nunjucks = require('gulp-nunjucks');

gulp.task('default', () =>
    gulp.src('templates/greeting.html')
        .pipe(nunjucks.compile({name: 'Sindre'}))
        .pipe(gulp.dest('dist'))
);
