var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

require('require-dir')('./gulp');

gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(plugins.webserver({
      livereload: true,
      open: true,
      fallback: 'index.html'
    }));
});

gulp.task('default', ['transform', 'webserver']);