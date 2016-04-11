module.exports = function (gulp, conf) {
  if (typeof conf !== 'object') {
    throw new Error('to be an object')
  }
  if (!Array.isArray(conf.actions)) {
    throw new Error('Need watch.actions to be an array')
  }

  var fs = require('fs')
  var cp = require('child_process')

  var filename = 'gulpfile.js'
  if (!fs.existSync(filename)) filename = 'gulpfile.coffee'
  if (!fs.existSync(filename)) throw new Error('No guilpfile *.{js,coffee} found')

  gulp.task('gulpfile-reload', function () {
    var p

    function spawnChildren (e) {
      if (p) {
        p.kill()
      }

      setTimeout(function () {
        p = cp.spawn('gulp', process.argv.slice(2), {stdio: 'inherit'})
      }, 100)
    }

    gulp.watch(filename, spawnChildren)

    spawnChildren()
  })

  return function () {
    conf.actions.forEach(function (arg) {
      gulp.watch.apply(gulp, arg)
    })
    return gulp.watch(filename, ['gulpfile-reload'])
  }
}
