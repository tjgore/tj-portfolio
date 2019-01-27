const gulp = require('gulp')
const sass = require('gulp-sass')
const maps = require('gulp-sourcemaps')
const cleanCSS = require('gulp-clean-css')
const removeEmptyLines = require('gulp-remove-empty-lines')
const prettyHtml = require('gulp-pretty-html')

function cssToSass() {
return gulp.src(['assets/scss/styles.scss'])
  .pipe(maps.init())
  .pipe(sass(
  {
    errLogToConsole: true,
    outputStyle: 'compressed'
  }))
  .pipe(maps.write('./maps'))
  .pipe(gulp.dest('static/css/'))
}

function bootstrapSass() {
  return gulp.src(['assets/scss/bootstrap/bootstrap.scss'])
  .pipe(maps.init())
  .pipe(sass(
  {
    errLogToConsole: true,
    outputStyle: 'compressed'
  }))
  .pipe(maps.write('./maps'))
  .pipe(gulp.dest('static/css/'))
}

gulp.task('watch', function() {
  gulp.watch('assets/scss/**/*.scss', gulp.series(gulp.parallel(bootstrapSass, cssToSass)))
})