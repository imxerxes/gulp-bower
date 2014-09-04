var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('bower', function() {
  return plugins.bower()
    .pipe(gulp.dest('app/bower_components/'))
});

gulp.task('wiredep', ['bower'], function () {
  var wiredep = require('wiredep').stream;

  gulp.src('app/styles/*.css')
    .pipe(wiredep({
        directory: 'app/bower_components'
    }))
    .pipe(gulp.dest('app/styles'));

  gulp.src('app/index.html')
    .pipe(wiredep({
      directory: 'app/bower_components'
    }))
    .pipe(gulp.dest('app'));
});

gulp.task('sass', function () {
  gulp.src('app/styles/*.scss')
    .pipe(plugins.watch(function(files) {
    return files.pipe(plugins.sass())
      .pipe(gulp.dest('app/styles'));
  }));
});

gulp.task('build', ['sass', 'wiredep']);
