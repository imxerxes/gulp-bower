var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('bower', function() {
  return plugins.bower()
    .pipe(gulp.dest('app/bower_components/'))
});

gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(plugins.webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

gulp.task('wiredep', ['bower'], function () {
  var wiredep = require('wiredep').stream;

  gulp.src('app/styles/*.css')
    .pipe(wiredep({
        directory: 'app/bower_components'
    }))
    .pipe(gulp.dest('app/styles'));

  gulp.src('app/d3.html')
    .pipe(wiredep({
      directory: 'app/bower_components'
    }))
    .pipe(gulp.dest('app'));
});

gulp.task('default', ['wiredep', 'webserver']);