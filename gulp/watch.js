var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('watch-styles', function () {
  gulp.src('app/styles/*.scss')
    .pipe(plugins.watch(function(files) {
	    return files.pipe(plugins.sass())
	      .pipe(gulp.dest('app/styles'));
	  }))
	  .pipe(plugins.autoprefixer('last 1 version'));
});

gulp.task('watch-scripts', function() {
  gulp.watch('app/scripts/{**,}/*.js', ['jshint']);
});

gulp.task('watch', ['watch-styles']);