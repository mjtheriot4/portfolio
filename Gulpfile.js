var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');

//task compiles the sass into css
gulp.task('compileSass', function() {
  gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css/'));
});
//task compresses images
gulp.task('compressImg', function() {
  gulp.src('src-img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('img'));
});
//Watch task
gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['compileSass']);
    // gulp.watch('src-assets/*',['compressImg']);
});
