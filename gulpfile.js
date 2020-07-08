const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const livereload = require("gulp-livereload");
const cssmin = require("gulp-clean-css");
const htmlmin = require("gulp-htmlmin");

// Mover o HTML para a pasta dist
gulp.task("html", (done) => {
  return gulp
    .src("src/*.html")
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true,
      })
    )
    .pipe(gulp.dest("dist"))
    .on("end", done);
});

// Comprimir imagens
gulp.task("minifyImages", (done) => {
  return gulp
    .src("src/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/images"))
    .on("end", done);
});

// Juntar os arquivos js em um arquivo "main.js" e minificar
gulp.task("groupAndMinifyJs", (done) => {
  return gulp
    .src("src/js/*.js")
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"))
    .on("end", done);
});

// Compilar o sass
gulp.task("sass", (done) => {
  return gulp
    .src("src/sass/*.scss")
    .pipe(concat("App.scss"))
    .pipe(sass().on("error", sass.logError))
    .pipe(cssmin())
    .pipe(gulp.dest("dist/css"))
    .on("end", done);
});

// Task default
gulp.task(
  "default",
  gulp.parallel(["html", "minifyImages", "groupAndMinifyJs", "sass"])
);

gulp.task("watch", () => {
  livereload.listen();
  gulp.watch("src/js/*.js", gulp.parallel(["groupAndMinifyJs"]));
  gulp.watch("src/images/*", gulp.parallel(["minifyImages"]));
  gulp.watch("src/sass/*.scss", gulp.parallel(["sass"]));
  gulp.watch("src/*.html", gulp.parallel(["html"]));
});
