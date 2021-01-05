'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function(){
});

gulp.task('convertSass', function () {
    gulp.src('./src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css/'))
 });

 gulp.task('default', function() {
    gulp.watch('./src/scss/**/*.scss', gulp.series('convertSass'));
 });