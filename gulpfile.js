var gulp = require('gulp');

//Plugins
var jshint = require('gulp-jshint');

//Gulp Test
gulp.task('hello', function() {
  console.log('Hello From Gulp');
});

//Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});
