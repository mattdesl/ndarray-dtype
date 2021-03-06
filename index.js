var dtype = require('dtype')

module.exports = function(str) {
  switch (dtype) {
    case 'generic':
    case 'data':
    case 'dataview':
      return ArrayBuffer
    case 'buffer':
      if (typeof Buffer === "undefined") {
        return undefined
      }
      return Buffer
    default:
      return dtype(str)
  }
}
