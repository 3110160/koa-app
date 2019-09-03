const gulp = require('gulp');
const babel = require('gulp-babel');
const webpack = require("webpack");
const gutil = require("gulp-util");
const webpackConfig = require("./webpack.config.js");
const devCompiler = webpack(webpackConfig({mode:'production'}));

gulp.task('babel', () =>
    gulp.src(['service/*.js', 'service/**/*.js'])
    .pipe(babel({
        presets: ['@babel/env'],
        plugins: ["@babel/plugin-transform-runtime"]
    }))
    .pipe(gulp.dest('dist/service'))
);

gulp.task('copy', () =>
    gulp.src('service/poetry/*')
    .pipe(gulp.dest('dist/service/poetry/'))
);

function webpackDevelopment(done) {
    devCompiler.run(function (err, stats) {
        if (err) {
            throw new gutil.PluginError("webpack:build-dev", err);
            return;
        }
        gutil.log("[webpack:build-dev]", stats.toString({
            colors: true
        }));
        done();
    });
}

gulp.task('watchWebDev', () => {
    gulp.watch(['web/**/*.js', 'web/**/**/*.js', 'web/**/*.html'], webpackDevelopment);
})

gulp.task('serviceBableWatch', () => {
    gulp.watch(['service/*.js', 'service/**/*.js'], gulp.series('babel', 'copy'));
    gulp.watch('service/poetry/*.txt', gulp.series('copy'));
});

gulp.task("default", gulp.series(
    'watchWebDev',
    'serviceBableWatch',
));