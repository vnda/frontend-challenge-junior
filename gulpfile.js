var gulp = require('gulp')
var sass = require('gulp-sass')


gulp.task('sass', function () {
    return gulp.src('sass/*.sass')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('css'));
});

$(function(){

    var jElement = $('.menu-site');

    $(window).scroll(function(){
        if ( $(this).scrollTop() > 30 ){
            jElement.css({
                'position':'fixed',
                'widht':'100%',
                'max-widht': '100%',
                'top':'0px',
                'left':'0px',
                'right':'0px',
                'background': 'white',
                'z-index':'9999',
                'box-shadow': '0px 4px 11px rgba(0,0,0,0.3)'
            });
        }else{
            jElement.css({
                'position':'relative',
                'top':'auto',
                'box-shadow':'none'
            });
        }
    });

}); 