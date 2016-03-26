
module.exports = function (gulp) {
  gulp.task('gulpSugarSimpleHelp', function () {
    console.log(require('fs').readFileSync('../gulpfile-example.js')
                             .toString())
  })
  return gulp.task('default', ['gulpSugarSimpleHelp'])
}
