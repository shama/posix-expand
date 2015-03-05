var Transform = require('readable-stream/transform')
var inherits = require('inherits')
var xtend = require('xtend')
var nextTick = require('next-tick')

function Expand(argv) {
  if (!(this instanceof Expand)) return new Expand(argv)
  var self = this
  Transform.call(self)
  this.params = xtend({
    _: [],
    t: 8,
  }, argv)
  Object.defineProperty(self, 'fs', {
    get: function() { return self.params.fs || require('fs') }
  })
  if (self.params._.length > 0) {
    nextTick(function() {
      var fs = self.fs
      for (var i = 0; i < self.params._.length; ++i) {
        fs.createReadStream(self.params._[i]).pipe(self)
      }
    })
  }
}
module.exports = Expand
inherits(Expand, Transform)

Expand.prototype._transform = function(chunk, enc, cb) {
  var spaces = Array(this.params.t + 1).join(' ')
  cb(null, chunk.toString().replace(/\t/g, spaces))
}
