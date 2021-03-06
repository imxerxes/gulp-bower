var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('bower', function() {
  return plugins.bower()
    .pipe(gulp.dest('app/bower_components/'));
});

gulp.task('wiredep', ['bower'], function () {
  var wiredep = require('wiredep').stream;

  gulp.src('app/styles/*.scss')
  	.pipe(wiredep({
        directory: 'app/bower_components'
    }))
    .pipe(gulp.dest('app/styles'));

  gulp.src('app/*.html')
    .pipe(wiredep({
      directory: 'app/bower_components'
    }))
    .pipe(gulp.dest('app'));
});

gulp.task('styles', function () {
  gulp.src('app/styles/*.scss')
    .pipe(plugins.sass())
    .pipe(gulp.dest('app/styles'))
	  .pipe(plugins.autoprefixer('last 1 version'));
});

gulp.task('jshint', function () {
  return gulp.src(['app/scripts/{**,}/*.js', 'gulp/*.js'])
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('jshint-stylish'))
    .pipe(plugins.jshint.reporter('fail'));
});

gulp.task('transform', ['styles', 'jshint', 'wiredep']);
