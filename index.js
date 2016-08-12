var stream = require('readable-stream')

module.exports = eventhandlerstream

function eventhandlerstream (fn) {
  fn = (typeof fn === 'function') ? fn : function f (ev, push) { push(ev) }
  var read$ = new stream.Readable({ read: function () { }, objectMode: true })
  function handler (event) { fn(event, push) }
  function push (data) { handler.push(data) }
  for (key in read$) { handler[key] = read$[key] }
  return handler
}
