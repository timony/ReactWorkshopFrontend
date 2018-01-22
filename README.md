React Workshop setup app

1. React starter
  npx create-react-app my-app
  npm start
  npm install -g serve
  serve -s build

2. First react app ECMA5.1
  npm init
  npm install gulp, gulp-connect, gulp-open —save-dev

3. Babel
  npm install babel-core, gulp-babel, babel-preset-evn, babel-preset-react —save-dev
  mv gulpfile.js gulpfile.babel.js
  touch .babelrc

4. Babel app code
  npm install del —save-dev

5. Browserify, Babelify
  npm install babelify, browserify, vinyl-source-stream —save-dev

6. Gulp-sync
  npm install gulp-sync —save-dev

7. Inject js to html
  npm install gulp-inject, gulp-order —save-dev

8. Eslint
  npm install babel-eslint, eslint-plugin-react, eslint-fiendly-formatter, gulp-eslint —save-dev

9. Jest test
  npm install jest -g
  npm install jest, react-test-renderer —save-dev
  - configure jest in package.json
  jest, gulp test, npm test
  jest —updateSnapshot
  jest —watch
