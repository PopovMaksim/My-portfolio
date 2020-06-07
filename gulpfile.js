const gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src('public/sass/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('build/css'))
});

gulp.task('html', function() {
    return gulp.src('public/*.html')
        .pipe(gulp.dest('build'));
})

gulp.task('js', function() {
    return gulp.src('public/script/*.js')
        .pipe(gulp.dest('build/script'));
})

gulp.task('watch', function() {
    gulp.watch('public/*.html', gulp.series('html'));
    gulp.watch('public/sass/**/*.scss', gulp.series('sass'));
    gulp.watch('public/script/*.js', gulp.series('js'));
})

gulp.task('default', gulp.series(
    gulp.parallel('html', 'sass', 'js'),
    gulp.parallel('watch')
));