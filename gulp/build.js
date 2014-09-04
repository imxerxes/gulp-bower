var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('build', ['transform'], function () {
  var assets = plugins.useref.assets();

  return gulp.src('app/*.html')
    .pipe(assets)
    .pipe(assets.restore())
    .pipe(plugins.useref())
    .pipe(gulp.dest('dist'));
});