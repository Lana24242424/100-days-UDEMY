const productNameInputField = document.getElementById('product-name');
const theRemainingChars = document.getElementById('remaining-chars');

const maxAllowedChars = productNameInputField.maxLength;

function updateRemainingCharacters(event) {
const enteredText = event.target.value;
const enteredTextLength = enteredText.length;

const remainingCharacters = maxAllowedChars - enteredTextLength;

theRemainingChars.textContent = remainingCharacters;
}



productNameInputField.addEventListener('input', updateRemainingCharacters);

