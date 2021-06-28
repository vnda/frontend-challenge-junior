var gulp = require('gulp');
var watch = require('gulp-watch');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');

gulp.task('watch', function () {
    return watch('src/css/*.css', { ignoreInitial: false })
        .pipe(gulp.dest('build'));
});
 
gulp.task('callback', function () {
    return watch('src/css/*.css', function () {
        gulp.src('src/css/*.css')
            .pipe(gulp.dest('build'));
    });
});

gulp.task('useref', function(){
    return gulp.src('src/*.html')
      .pipe(useref())
      .pipe(gulpIf('*.js', uglify()))
      .pipe(gulp.dest('dist'))
});