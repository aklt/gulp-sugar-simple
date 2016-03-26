var path = require('path')
var lib = path.join(__dirname, 'lib')

require('fs').readdirSync(lib).forEach(function (file) {
  var m = /^(.+)\.js$/.exec(file)
  if (m) {
    module.exports[m[1]] = require(path.join(lib, file))
  }
})
