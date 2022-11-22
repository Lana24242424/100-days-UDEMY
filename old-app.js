// document.body.children[1].children[0].href = 'https://codepen.io/sezzaress/pen/Barwdjg';

// console.dir(document)

let anchorElement = document.getElementById('external-link');
anchorElement.href = 'https://google.com'

let newAnchorEl = document.createElement('a');
let paragraphEl = document.querySelector('p');
paragraphEl.append(newAnchorEl);
newAnchorEl.href = 'https://www.google.com';
newAnchorEl.textContent = "link to google"

newAnchorEl.parentElement.removeChild(newAnchorEl);

console.log(paragraphEl.innerHTML);

paragraphEl.innerHTML = 'Hi! This is <strong>important!</strong>' + 
' another line'