import connect from 'gulp-connect';
import gulp from 'gulp';
import open from 'gulp-open';

gulp.task('start-server', () => {
  const connectOptions = {
    port: 9000,
    root: './src'
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
  gulp.src('./src/index.html')
    .pipe(open(openOptions));
});

gulp.task('default', ['start-server']);