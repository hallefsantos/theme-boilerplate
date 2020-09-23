var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('sass', function (done) {
    gulp.src("./assets/scss/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./assets/css"))
        .pipe(browserSync.stream());


    done();
});

gulp.task('serve', function (done) {

    browserSync.init({
        proxy: "localhost:8888/gummy-autocuidado",
        notify: false
    });

gulp.watch("./assets/scss/**/*.scss", gulp.series('sass')); gulp.watch("./**/*.php").on('change', () => {
    browserSync.reload();
    done();
});


done();
});

gulp.task('default', gulp.series('sass', 'serve'));