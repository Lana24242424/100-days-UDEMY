const firstParagraph = document.querySelector("h1");

function changeInnerText() {
    firstParagraph.innerText = 'Clicked!'
}

firstParagraph.addEventListener('click', changeInnerText);

const inputField = document.querySelector('input');

inputField.addEventListener('keypress', (event) => {
const enteredText = event.target.value;
console.log(event);
});

