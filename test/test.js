var test = require('tape')
var Expand = require('../index.js')
var fs = require('./virtual-fs.js')

function assertResult(s, cb) {
  var result = ''
  s.on('data', function(data) {
    result += data.toString().replace('\r', '')
  }).on('end', function() {
    cb(result)
  })
}

test('expand files', function(t) {
  t.plan(1)
  var expand = new Expand({
    _: ['test/fixtures/one'],
    fs: fs,
  })
  assertResult(expand, function(result) {
    t.equal(result, 'one                two\n')
  })
})