var gulp = require('gulp');
var plugins = require('gulp-load-plugins')(),
	gulpif = require('gulp-if');

gulp.task('build', ['transform'], function () {
  var assets = plugins.useref.assets();

  return gulp.src('app/*.html')
    .pipe(assets)
    .pipe(gulpif('*.js', plugins.uglify()))
    .pipe(gulpif('*.css', plugins.minifyCss()))
    .pipe(assets.restore())
    .pipe(plugins.useref())
    .pipe(gulp.dest('dist'));
});