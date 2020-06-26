const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const image = require("gulp-image");
const htmlmin = require('gulp-htmlmin');

//Scripts Task
gulp.task('scripts', async() => {
  gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('src/dist/js'));
})

//Styles Task
gulp.task('styles', async() => {
  gulp.src('src/scss/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/dist/css'));
});

//HTML Task
gulp.task('html', async () => {
  gulp.src('*.html')
    .pipe(htmlmin({collapseWhitespace: true, conservativeCollapse: true, removeComments: true}))
    .pipe(gulp.dest('src/dist'));
});

//Fonts Task
gulp.task('fonts', async () => {
  gulp.src('src/assets/fonts/*.{ttf,woff,eof,svg}')
    .pipe(gulp.dest('src/dist/fonts'));
});

//Images Task
gulp.task('images', async() => {
  gulp.src('src/assets/images/*.{png,jpg,svg}')
    .pipe(image())
    .pipe(gulp.dest("src/dist/images"));
});

//Watch Task
gulp.task('watch', async() => {
  gulp.watch('src/js/*.js', gulp.series('scripts'));
  gulp.watch(['src/scss/media-queries/*.scss', 'app/scss/*.scss'], gulp.series('styles'));
  gulp.watch('*.html', gulp.series('html'));
  gulp.watch('src/assets/fonts/*.{ttf,woff,eof,svg}', gulp.series('fonts'));
  gulp.watch('src/assets/images/*.{png,jpg,svg}', gulp.series('images'));
});

gulp.task('default', gulp.parallel(['scripts', 'styles', 'fonts', 'html', 'images']));