const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify');
const plumber = require('gulp-plumber');
const concat = require('gulp-concat');
const rename = require('gulp-rename');

const js_src = ".src/js/**/*.js"

const js_dist = "./dist/js"
const js_dist_name = "scripts.js";

//Minify

gulp.task('scripts', function () {
  return gulp.src(js_src)
    .pipe(plumber())
    .pipe(uglify())
    .pipe(concat(js_dist_name))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(js_dist));
})




//compila scss para css
function style() {
  //1. Onde está meu arquivo scss
  return gulp.src('./src/scss/**/*.scss')
    //2. Passar esse arquivo através do compilador sass
    .pipe(sass())
    //3. Onde eu vou salvar o arquivo compilado CSS?
    .pipe(gulp.dest('./dist/css'))
    //fazendo a automatização no save
    .pipe(browserSync.stream())
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./src/scss/**/*.scss', style);
  gulp.watch('./src/js/**/*.js').on('change', browserSync.reload);

}


exports.style = style;
exports.watch = watch;