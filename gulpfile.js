var gulp = require('gulp');

var runSequence = require('run-sequence');
var gutil = require('gulp-util');
var s3 = require("gulp-s3");
var fs = require('fs-utils');

var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var historyApiFallback = require('connect-history-api-fallback');

var babelify = require('babelify');
var eslint = require('gulp-eslint');

var browserify = require('browserify');
var source = require('vinyl-source-stream');

// TODO: http://tylermcginnis.com/reactjs-tutorial-pt-2-building-react-applications-with-gulp-and-browserify/


gulp.task('default', ['x.copy', 'js.dev'] ,function () {
	// place code for your default task here
});

// Watch Files For Changes & Reload
gulp.task('serve', ['default'], function () {
	browserSync.init({
		notify: false,
		logPrefix: 'PSK',
		snippetOptions: {
			rule: {
				match: '<span id="browser-sync-binding"></span>',
				fn: function (snippet) {
					return snippet;
				}
			}
		},
		// Run as an https by uncommenting 'https: true'
		// Note: this uses an unsigned certificate which on first access
		//       will present a certificate warning in the browser.
		// https: true,
		server: {
			baseDir: ['.tmp', 'dist'],
			middleware: [historyApiFallback()],
			routes: {
				// '/bower_components': 'bower_components'
			}
		}
	});

	gulp.watch(['app/**/*.html', 'app/styles/**/*.css'], ['x.copy', reload]);
	//gulp.watch(['app/elements/**/*.css'], ['elements', reload]);
	//gulp.watch(['app/{scripts,elements}/**/*.js'], ['jshint']);
	gulp.watch(['app/**/*.js'], ['js.dev', reload]);
	//gulp.watch(['app/images/**/*'], reload);
});

gulp.task('x.copy', function () {
	return gulp.src([
			'app/index.html',
			'app/styles/**/*.css'
		], {base: 'app/'})
		.pipe(gulp.dest('./dist/'));
});

gulp.task('js.dev', ['lint'], function () {
	return browserify({
			entries: './app/js/main.js',
			distebug: true
		})
		.transform(babelify)
		.bundle()
		.on('error', function (err) {
			gutil.log(err.message);
			this.emit('end');
		})
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./dist/'));
});

gulp.task('lint', function () {
	return gulp.src(['./app/js/**/*.js'])
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
});

gulp.task('dist', function (cb) {
	runSequence(
		['x.copy', 'js.dev'],
		cb
	);
});

