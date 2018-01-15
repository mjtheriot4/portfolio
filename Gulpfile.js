var gulp = require('gulp');
var sass = require('gulp-sass');

//task compiles the sass into css
gulp.task('compileSass', function() {
  gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css/'));
});

//Watch task
gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['compileSass']);
});
