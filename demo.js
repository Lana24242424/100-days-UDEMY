let productNameInputField = document.getElementById('product-name');
let theRemainingChars = document.getElementById('remaining-chars');

function updateRemainingCharacters(event) {
let enteredText = event.target.value;
let enteredTextLength = enteredText.length;

let remainingCharacters = 60 - enteredTextLength;
}

productNameInputField.addEventListener('input', updateRemainingCharacters);

