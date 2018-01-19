import babelify from 'babelify';
import browserify from 'browserify';
import config from './build.config';
import connect from 'gulp-connect';
import del from 'del';
import inject from 'gulp-inject';
import gulp from 'gulp';
import open from 'gulp-open';
import order from 'gulp-order';
import path from 'path';
import source from 'vinyl-source-stream';

const gulpsync = require('gulp-sync')(gulp);

gulp.task('clean', () => {
  return del(['dist']);
});

gulp.task('js', () => {
  const options = {
    entries: 'src/App.jsx',   // Entry point
    extensions: ['.js', '.jsx'],            // consider files with these extensions as modules
    debug: true,  // add resource map at the end of the file or not
    paths: ['src/']           // This allows relative imports in require, with './scripts/' as root
  };

  return browserify(options)
    .transform(babelify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('html', () => {
  const target = gulp.src('src/*.html');
  const sources = gulp.src([
      'dist/css' + '/*.css',
      'dist/js' + '/*.js'
    ],
    {read: false}
  );

  const ordering = config.vendor.js.map(filePattern => path.basename(filePattern));
  ordering.unshift('*.css');

  const orderedSources = sources.pipe(order(ordering));

  return target
    .pipe(inject(orderedSources, {
      ignorePath: 'dist',
      addRootSlash: false
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('transpile', gulpsync.sync(['clean', 'js', 'html']));

gulp.task('start-server', ['transpile'], () => {
  const connectOptions = {
    port: 9000,
    root: './dist'
  };
  connect.server({
    port: connectOptions.port,
    root: connectOptions.root,
    livereload: true,
    debug: false
  });

  const openOptions = {
    uri: 'http://localhost:' + connectOptions.port
  };
  gulp.src('./dist/index.html')
    .pipe(open(openOptions));
});

gulp.task('default', ['start-server']);