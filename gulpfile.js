var gulp = require('gulp'),
    ghPages = require('gulp-gh-pages'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('deploy', function() {
  return gulp.src('./**/*')
    .pipe(ghPages());
});

gulp.task('sass', function () {
  return gulp.src('sass/style.sass')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('css/'))
});