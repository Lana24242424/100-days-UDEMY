const productNameInputField = document.getElementById('product-name');
const theRemainingChars = document.getElementById('remaining-chars');

const maxAllowedChars = productNameInputField.maxLength;

function updateRemainingCharacters(event) {
const enteredText = event.target.value;
const enteredTextLength = enteredText.length;

const remainingCharacters = maxAllowedChars - enteredTextLength;

theRemainingChars.textContent = remainingCharacters;

if (remainingCharacters <= 10) {
productNameInputField.classList.add('warning');
theRemainingChars.classList.add('warning');
} else {
    productNameInputField.classList.remove('warning')
}
}



productNameInputField.addEventListener('input', updateRemainingCharacters);

