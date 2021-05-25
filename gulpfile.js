const gulp = require ('gulp');
const sass = require ('gulp-dart-sass');

function compilaSass() {
    return gulp.src ('src/Css/scss/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('dist/'))
}

gulp.task('sass', compilaSass);

function watch () {
    gulp.watch ('src/Css/scss/*.scss', compilaSass)
}

gulp.task('default', watch);