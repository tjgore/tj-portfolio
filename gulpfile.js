const gulp = require('gulp')
const sass = require('gulp-sass')
const maps = require('gulp-sourcemaps')
const purgecss = require('gulp-purgecss')
const cleanCSS = require('gulp-clean-css')
const removeEmptyLines = require('gulp-remove-empty-lines')
const prettyHtml = require('gulp-pretty-html')

const publicHtml = ['public/*.html', 'public/**/*.html', 'public/**/**/*.html']

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
  return gulp.src(['assets/scss/bootstrap.scss'])
  .pipe(maps.init())
  .pipe(sass(
  {
    errLogToConsole: true,
    outputStyle: 'compressed'
  }))
  .pipe(maps.write('./maps'))
  .pipe(gulp.dest('static/css/'))
}

gulp.task('purgecss', () => {
  return gulp.src('public/css/bootstrap.css')
      .pipe(purgecss({
          content: [...publicHtml]
      }))
      .pipe(gulp.dest('public/css'))
})

gulp.task('build', gulp.parallel(bootstrapSass, cssToSass))

gulp.task('watch', function() {
  gulp.watch('assets/scss/**/*.scss', gulp.series(gulp.parallel(bootstrapSass, cssToSass)))
})