module.exports = function (gulp, conf) {
  if (!conf.server) throw new Error('Need conf.server')
  if (!conf.watch) throw new Error('Need conf.watch')
  var browserSync = require('browser-sync').create()
  if (!conf.middleware) {
    conf.middleware = [require('morgan')('dev')]
  }
  return function () {
    browserSync.init(conf)
    return gulp.watch(conf.watch).on('change', browserSync.reload)
  }
}
