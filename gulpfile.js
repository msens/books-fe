var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');
var jasmine = require('gulp-jasmine');
var jshint = require('gulp-jshint');
var less = require('gulp-less');
var htmlreplace = require('gulp-html-replace');
var replace = require('gulp-replace');
var util = require('gulp-util');
require('jshint-stylish');
require('gulp-grunt')(gulp);

gulp.task('default', ['test', 'js', 'html']);

gulp.task('html', function() {
    gulp.src(['src/html/menu.tmpl.html'])
        .pipe(htmlreplace({
            'menu': {
                src: [['#/page/books' + (util.env.mock ? '?mocksPort=' + util.env.mock : ''), 'Books']],
                tpl: '<li><a href="%s">%s</a></li>'
            }
        }))
        .pipe(gulp.dest('src/html/replaced'));
});

gulp.task('js', function() {
   gulp.src(['src/html/index.js', 'src/html/**/*.js'])
       .pipe(jshint())
       .pipe(jshint.reporter('jshint-stylish'))
       .pipe(sourcemaps.init())
       .pipe(concat('app.js'))
       .pipe(ngAnnotate())
       .pipe(uglify())
       .pipe(sourcemaps.write())
       .pipe(gulp.dest('src'));
});

gulp.task('test', function() {
    gulp.run('grunt-jasmine');
});

gulp.task('watch', ['test', 'js', 'html'], function() {
   gulp.watch(['src/html/**/*.js', 'src/html/**/*.html', 'src/test/html/**/*.spec.js'], ['test', 'js', 'html']);
});