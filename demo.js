let productNameInputField = document.getElementById('product-name');
let theRemainingChars = document.getElementById('remaining-chars');

let maxAllowedChars = productNameInputField.maxLength;

function updateRemainingCharacters(event) {
let enteredText = event.target.value;
let enteredTextLength = enteredText.length;

let remainingCharacters = maxAllowedChars - enteredTextLength;

theRemainingChars.textContent = remainingCharacters;
}



productNameInputField.addEventListener('input', updateRemainingCharacters);

