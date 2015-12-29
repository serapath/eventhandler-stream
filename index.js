var stream = require('readable-stream')

module.exports = eventhandlerstream

function eventhandlerstream (fn) {
  fn = (typeof fn === 'function') ? fn : function f (x) { return x }
  var read$ = new stream.Readable({ read: function () { }, objectMode: true })
  function handler (event) { handler.push(fn(event)) }
  for (key in read$) { handler[key] = read$[key] }
  return handler
}
