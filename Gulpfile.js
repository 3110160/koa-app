const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('babel', () =>
    gulp.src(['service/*.js','service/**/*.js'])
    .pipe(babel({
        presets: ['@babel/env'],
        plugins: ["@babel/plugin-transform-runtime"]
    }))
    .pipe(gulp.dest('dist/service'))
);

gulp.task('copy', ()=>
    gulp.src('service/poetry/*')
      .pipe(gulp.dest('dist/service/poetry/'))
  );

gulp.task('serviceBableWatch', () => {
    gulp.watch(['service/*.js','service/**/*.js'], gulp.series('babel'));
    gulp.watch('service/poetry/*.txt', gulp.series('copy'));
});