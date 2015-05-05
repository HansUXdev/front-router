var gulp = require('gulp'),
    router = require('./index.js')
    BackEndrouter = require('./backendRouter.js'),
    Menurouter = require('./menuRouter.js')


    ;
    // prettify = require('gulp-jsbeautifier')



gulp.task('default', function() {
  gulp.src('./test/**/*.html')
    .pipe(router({
      path: './_build/routes.js',
      root: './test'
    }))
    .pipe(gulp.dest('./_build'));
    // Test Backend
    gulp.src('./backend/**/*.html')
    .pipe(BackEndrouter({
      path: './_build/backend.js',
      root: './backend'
    }))
    // Test Abraction
    gulp.src('./backend/Menu*.html')
    .pipe(Menurouter({
      path: './_build/menu.js',
      root: './backend'
    }))
    .pipe(gulp.dest('./_build'));
});


 