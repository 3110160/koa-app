const gulp = require("gulp");
const babel = require("gulp-babel");
const rollup = require("gulp-rollup");
const replace = require("rollup-plugin-replace");
const eslint = require('gulp-eslint');
// dev
gulp.task("devBabel", () =>
  gulp
  .src(["src/service/**/*.js"])
  .pipe(
    babel({
      babelrc: false,
      plugins: ["@babel/plugin-transform-modules-commonjs"]
    })
  )
  .pipe(gulp.dest("dist/"))
);

gulp.task("devEsLint", () =>
  gulp
  .src(["src/service/**/*.js"])
  .pipe(eslint({
    useEslintrc: true,
  }))
  .pipe(eslint.format())
  .pipe(eslint.failAfterError())
);

// prod
gulp.task("prodBabel", () =>
  gulp
  .src(["src/service/**/*.js"])
  .pipe(
    babel({
      babelrc: false,
      ignore: ["src/service/config/*.js"],
      plugins: ["@babel/plugin-transform-modules-commonjs"]
    })
  )
  .pipe(gulp.dest("dist/"))
);

gulp.task("copy", () =>
  gulp.src("src/service/poetry/*").pipe(gulp.dest("dist/poetry/"))
);

// 清洗线上的 if else 代码
gulp.task("clean", () => {
  gulp
    .src(["src/service/**/*.js"])
    .pipe(
      rollup({
        input: "src/service/config/*.js",
        output: {
          format: "cjs"
        },
        plugins: [
          replace({
            "process.env.NODE_ENV": JSON.stringify("production")
          })
        ]
      })
    )
    .pipe(gulp.dest("dist/"));
});

gulp.task("serviceBableWatch", () => {
  gulp.watch(["src/service/**/*.js"], gulp.series("devBabel", "copy"));
  gulp.watch("src/service/poetry/*.txt", gulp.series("copy"));
});

if (process.env.NODE_ENV === "development") {
  gulp.task("default", gulp.series("serviceBableWatch"));
} else if (process.env.NODE_ENV === "production") {
  gulp.task("default", gulp.series("prodBabel", "clean", "copy"));
} else if (process.env.NODE_ENV === "lint") {
  gulp.task("default", gulp.series("devEsLint"));
}