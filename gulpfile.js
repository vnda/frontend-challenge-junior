// Initialize modules
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
let cleanCSS = require('gulp-clean-css');
 


gulp.task('sass', function(){
    return gulp.src(['app/scss/style.scss','node_modules/swiper/css/swiper.min.css','node_modules/aos/dist/aos.css'])
        .pipe(sass())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist')); 
});


gulp.task('js', function(){
    return gulp.src(['node_modules/jquery/jquery.min.js','node_modules/aos/dist/aos.js','node_modules/swiper/js/swiper.min.js','app/js/plugins/*.js', 'app/js/*.js'])
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});


gulp.task('watch', function(){
    gulp.watch('app/scss/style.scss', gulp.series('sass'));
    gulp.watch('app/js/**/*.js', gulp.series('js'));    
});


gulp.task('default', gulp.series('sass', 'js', 'watch'));


