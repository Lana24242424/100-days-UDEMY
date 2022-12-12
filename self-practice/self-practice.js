// for loop
   
   const mainButton = document.getElementById('submit-button');
   const userNumberField = document.querySelector("input[type=number]");
   const outputResult = document.getElementById("output-sum");

function sumUpToNumber() {
   const inputValue = userNumberField.value;
   
let summedUpNumbers = 0;

for (let i = 0; i <= inputValue; i++) {
summedUpNumbers = summedUpNumbers + i;
}

outputResult.textContent = summedUpNumbers;

};

mainButton.addEventListener('click', sumUpToNumber);