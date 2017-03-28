Global object is implicit context - in browsers thats the window object

`this` is the execution context
  in functions implicit context is global object

function.call(context, arg1, arg2...)
function.apply(context, [arg1, arg2...)
function.bind(context, arg1, arg2...) - returns new function with `this` explicitly
  bound
  
1) method can lose context when taken out of object (i.e. assigned to variable outside
object)

2) internal functions lose method context (context is global within function)
  to preserve context can use local variable in scope (i.e. `self`)
  or pass context with call/apply/bind

3) similar to #2, if function is an argument to another function, context is global

DOM - in memory object representation of HTML document - hierachrical tree 
structure of nodes. Nodes can be elements (HTML tags), text nodes, comments

setTimeout and setInterval can be used to delay action - example of asynchronous programming

A Javascript event is an object that represents some occurrence and contains info about where and what happened.

Javascript is evaluated before DOM constructed so you need to make sure DOM is ready before using events on elements
  'DOMContentLoaded' or $(function() {
    
  })
  
Example Events:
Keyboard: keydown, keyup, keypress
Mouse: mouseenter, mouseleave, mousedown, mouseup, click
Touch: touchdown, touchup, touchmove
Window: scroll, resize
Form: submit

Setting up Event Listener:
1) Identify the event you are interested in. This can be an event caused by a user action, page lifecycle, and more.

2) Identify what element the event will occur on. Depending on the event, the object could be a button, the page, or anything in between.

3) Define a Function that should be called when this event occurs. The Function will receive a single argument, which will be an Event object.

4) Register the Function as an event listener. This is where the first three steps come together into a working system.

The technique of attaching a single event handler at a higher location in the DOM is called event delegation.
  bubbling(default) goes up, capturing goes down to target(what triggered the event)
  current_target is current DOM element in the bubbling(or capturing) cycle
  
  This way you can have one Event listener for multiple elements, and can add listener to parent element so that
  if child element is added after page load it still will be able to work
  
use event.stopPropagation() to stop bubbling/capturing. event.preventDefault() to prevent default action (like following link or submitting form)

Event loop is queue of callback functions - when condition for async function happens, callback function is pushed onto queue and executes
after stack is clear

JQuery
  DOM Traversal
    find() - looks for element within jQuery descendants
    children() - same as find() but only looks one level down, can use selector inside
    parent() - parent element - can use selector inside parentheses to specify parent type
    closest() - first ancestor that meets criteria - will select current element if it matches
    parents() - all parents
    siblings()
    prevAll() - previous siblings
    nextAll() - next siblings

  can trigger event using trigger() e.g $('a').trigger('click'); this will invoke callback function if one exists
  
  Moving Elements around
    Inside:
      append()
      appendTo()
      html()
      prepend()
      prependTo()
      text()
    Outside:
      before()
      after()
      insertBefore()
      insertAfter()
    Removal:
      remove()
      empty() - take out child nodes
  
  Animations
    fadeOut()
    fadeIn()
    fadeToggle()
    fadeTo()
    slideDown()
    slideUp()
    slideToggle()
    animate(cssPropObject, duration, callback)
    can use delay, stop, finish to affect animations
    can chain animations together
    
  Serializing Data
    used with forms to create string or array with form names and values
    .serialize() creates string
    .serializeArray() creates array
  
  

  
  