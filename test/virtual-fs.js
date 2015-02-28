var fs = module.exports = {}
var Readable = require('readable-stream/readable')
var inherits = require('inherits')

var data = {
  'test/fixtures/one': 'one\t\ttwo\n',
}

function VFile(filename) {
  Readable.call(this)
  this.filename = filename
}
inherits(VFile, Readable)

VFile.prototype._read = function() {
  this.push(data[this.filename])
  this.push(null)
}

fs.createReadStream = function(filename) {
  return new VFile(filename)
}
