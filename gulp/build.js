var gulp = require('gulp');
var plugins = require('gulp-load-plugins')(),
	gulpif = require('gulp-if');

gulp.task('useref', function () {
  var assets = plugins.useref.assets();

  return gulp.src('app/*.html')
    .pipe(assets)
    .pipe(gulpif('*.js', plugins.uglify()))
    .pipe(gulpif('*.css', plugins.minifyCss()))
    .pipe(assets.restore())
    .pipe(plugins.useref())
    .pipe(gulp.dest('dist'));
});

gulp.task('copy-raw-assets', function(){
  gulp
  	.src('app/**/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('build', ['transform', 'useref', 'copy-raw-assets']);