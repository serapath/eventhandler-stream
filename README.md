# eventhandler-stream
Create DOM event handler functions that are streams

# Example
```js
// index.js
var eventhandlerstream = require('eventhandler-stream')

// EXAMPLE 1
var button = document.querySelector('button')
var buttonHandler$ = eventhandlerstream()
button.addEventListener('click', buttonHandler$)
buttonHandler$.on('data', function(event) { console.log(event) })


// EXAMPLE 2
var vdom          = require('virtual-dom')
var h             = vdom.h
var create        = vdom.create
var linkHandler$  = eventhandlerstream()
linkHandler$.on('data', function(event) { console.log(event) })
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
