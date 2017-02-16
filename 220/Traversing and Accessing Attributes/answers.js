var countParagraphs = function(node) {
    if (node.nodeName === 'A') {
      node.style.color = 'red';
    }
};

var bioInfo = document.querySelectorAll('.infobox td');

var taxonomicRanks = {};

for (var i = 0; i < bioInfo.length; i += 1) {
  if (bioInfo[i].textContent === 'Kingdom:') {
    taxonomicRanks['Kingdom'] = bioInfo[i].nextElementSibling.firstElementChild.textContent;
  }
}


function afterNSeconds(callback, n) {
  setTimeout(callback, n * 1000);
}

function startCounting() {
  var count = 0;
  setInterval(function() {
    console.log(count)
    count += 1;
  }, 1000);
}