var stream = require('readable-stream')

module.exports = eventhandlerstream

function eventhandlerstream () {
  var read$ = new stream.Readable({ read: function () { }, objectMode: true })
  function handler (event) { handler.push(event) }
  for (key in read$) { handler[key] = read$[key] }
  return handler
}
