# eventhandler-stream
Create DOM event handler functions that are streams  
It supports event filtering

# Example
```html
<!--index.html-->
<body>
  <button>Click me</button>
  <div id="content"></div>
  <script src="bundle.js"></script>
</body>
```

```js
// index.js
var eventhandlerstream = require('eventhandler-stream')

// EXAMPLE 1
var button = document.querySelector('button')
// A function can be passed as an argument
//   1. It consumes the event
//   2. it filters what's not pushed to the callback `push`
function custom (ev, push) { if (ev.type === 'click') push(ev.type) }
var buttonHandler$ = eventhandlerstream(custom)
button.addEventListener('click', buttonHandler$)
buttonHandler$.on('data', function (eventType) { console.log(eventType) })

// EXAMPLE 2
var vdom          = require('virtual-dom')
var h             = vdom.h
var create        = vdom.create
// If no function is passed it defaults to
//   `function custom (ev, push) { push(ev) }`
var linkHandler$  = eventhandlerstream()
linkHandler$.on('data', function (event) { console.log(event) })
var template = h('a', { onclick: linkHandler$ }, '> clickEvent2console <')
document.querySelector('#content').appendChild(create(template))
```

#### Convert `index.js` to `bundle.js` with the help of for example `browserify`
* `npm install browserify -g`
* `browserify index.js > bundle.js`
