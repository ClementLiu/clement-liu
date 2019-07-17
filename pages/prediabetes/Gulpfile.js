var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');



// Static Server + watching scss/html files
gulp.task('serve', ['styles'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch('assets/sass/**/*.scss',['styles']);
    // gulp.watch(["assets/**/*.html","assets/**/*.js"]).on('change', browserSync.reload);
    gulp.watch(["*.html","assets/**/*.js"]).on('change', browserSync.reload);
});
// "assets/**/*.css"

gulp.task('styles', function() {
    gulp.src('assets/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./assets/css/'))
        .pipe(browserSync.stream());
});

//Watch task
// gulp.task('default',function() {
//     gulp.watch('sass/**/*.scss',['styles']);
// });
gulp.task('default', ['serve']);