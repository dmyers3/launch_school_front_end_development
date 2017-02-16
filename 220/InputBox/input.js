// var cursorInterval;
// var focusedTextField;

// document.addEventListener('DOMContentLoaded', function() {
//   var textField = document.querySelector('.text-field');

//   textField.addEventListener('click', function(event) {
//     event.stopPropagation();

//     focusedTextField = textField;
//     textField.classList.add('focused');

//     cursorInterval = setInterval(function() {
//       textField.classList.toggle('cursor');
//     }, 500);
//   });
// });

// document.addEventListener('keyup', function(event) {
//   if (focusedTextField) {
//     var contentDiv = focusedTextField.querySelector('.content');
//     if (event.which === 8) {
//       contentDiv.textContent = contentDiv.textContent.substr(0, contentDiv.textContent.length - 1);
//     } else if (event.key.length === 1) {
//       contentDiv.textContent = contentDiv.textContent + event.key;
//     }
//   }
// });

// document.addEventListener('click', function(event) {
//   clearInterval(cursorInterval);
//   if (focusedTextField) {
//     focusedTextField.classList.remove('focused', 'cursor');
//     focusedTextField = null;
//   }
// });

// var obj = {
//   name: 'Andrea',
//   printName: function() {
//     console.log(obj.name);
//   }
// }

// var obj = {
//   total: 7,
// };

// function addToTotal(a, b) {
//   return this.total + a + b;
// }

// addToTotal.call(obj, 3, 5);
// addToTotal.apply(obj, [3, 5]);

// var box = {
//   x: 25,
//   y: 42,
//   z: 12,
//   printVolume: function() {
//     console.log(this.x * this.y * this.z);
//   }
// };

// setTimeout(box.printVolume.call(box), 2000);

// var paragraphs = document.querySelectorAll('p');
// for (var i = 0; i < paragraphs.length; i += 1) {
//   console.log(paragraphs[i].getAttribute('rel'));
// }

// function findItems() {
//   var inputs = document.getElementsByTagName('input');
//   var checkedItems = [];
//   var unCheckedItems = [];
//   for(var i = 0; i < inputs.length; i++) {
//       if (inputs[i].getAttribute('checked') === '') {
//         checkedItems.push(inputs[i].nextElementSibling.textContent);
//       } else {
//         unCheckedItems.push(inputs[i].nextElementSibling.textContent);
//       }
//   }
//   return [checkedItems, unCheckedItems];
// }

// var test = findItems();
// console.log(test);

// function walkList() {
//   var listItems = document.querySelectorAll('li');
  
//   for (var i = 0; i < listItems.length; i += 1) {
//     console.log(listItems[i].textContent.split(' ')[0]);
//   }
// }

// function walk(node) {
//   // do something with node
//   console.log(node.nodeName);

//   // for each child node
//   for (var i = 0; i < node.childNodes.length; i++) {

//     // recursively call walk()
//     walk(node.childNodes[i]);
//   }
// }

<html>
  <body>
    <h2>No news!</h2>
    <div class="front-page">
      <p><a href="/archives">News Archives</a></p>
    </div>
  </body>
</html>


<html>
  <body>
    <h1>The Day's News</h1>
    <div class="front-page">
      <article class="breaking">
        <p>This evening a fire took place in the old factory.</p>
        <p><a href="/stories/15">Read More</a></p>
      </article>
      <p><a href="/archives">News Archives</a></p>
    </div>
  </body>
</html>

var h2 = document.querySelector('h2');
h2.remove();

var h1 = document.createElement('h1');
h1.textContent = "The Day's News";

var frontPage = document.querySelector('div');

document.body.insertBefore(h1, frontPage);

var breaking = document.createElement('article');
breaking.classList.add('breaking');

frontPage.insertAdjacentElement('afterbegin', breaking);

var fire = document.createElement('p');
fire.textContent = 'This evening a fire took place in the old factory.';
breaking.appendChild(fire);

var readMore = document.createElement('p');
breaking.appendChild(readMore);

var fireLink = document.createElement('a');
fireLink.setAttribute('href', "/stories/15");
fireLink.textContent = 'Read More';
readMore.appendChild(fireLink);



// function helloLater(n) {
//   setTimeout(function() {
//     console.log('Hello, world!')
//   }, n * 1000);
// }

// function countListItems() {
//   console.log(document.querySelectorAll('li').length);
// }


// document.addEventListener('click', function(event) {
//   var tag = event.target.tagName;
//   if (tag === 'A') {
//     event.preventDefault();
//   }
// });