var original = require('process'),
  overlay

module.exports = function(value) {
  overlay = value || original
}

for (var i in original) {
  (function(slot) {
    Object.defineProperty(module.exports, slot, {
      get: function() {
        return overlay && overlay[slot] !== undefined ? overlay[slot] : process[slot]
      },
      set: function(value) {
        if (overlay) {
          overlay[slot] = value
        } else {
          original[slot] = value
        }
      }
    })
  })(i)
}
