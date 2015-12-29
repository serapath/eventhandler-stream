# eventhandler-stream
Create DOM event handler functions that are streams

# Example
```js
// index.js
var eventhandlerstream = require('eventhandler-stream')

// A function can be passed as an argument
// 1. It consumes the event
// 2. it returns what's pushed to the stream
function custom (event) { return event.type }


// EXAMPLE 1
var button = document.querySelector('button')
var buttonHandler$ = eventhandlerstream(custom)
button.addEventListener('click', buttonHandler$)
buttonHandler$.on('data', function (eventType) { console.log(eventType) })


// EXAMPLE 2
var vdom          = require('virtual-dom')
var h             = vdom.h
var create        = vdom.create
var linkHandler$  = eventhandlerstream()
linkHandler$.on('data', function (event) { console.log(event) })
var template = h('a', { onclick: linkHandler$ }, '> clickEvent2console <')
document.querySelector('#content').appendChild(create(template))
```

```html
<body>
  <button>Click me</button>
  <div id="content"></div>
  <script src="bundle.js"></script>
</body>
```
