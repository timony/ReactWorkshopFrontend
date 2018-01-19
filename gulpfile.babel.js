import babel from 'gulp-babel';
import connect from 'gulp-connect';
import del from 'del';
import gulp from 'gulp';
import open from 'gulp-open';

gulp.task('clean', () => {
  return del(['dist']);
});

gulp.task('js', ['clean'], () => {
  return gulp
    .src('src/**/*.js*')
    .pipe(babel())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('html', function () {
  gulp
    .src('src/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('start-server', ['clean', 'js', 'html'], () => {
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