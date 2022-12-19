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

// for of loop

const buttonSecondSection = document.querySelector('#highlight-links button');


function changingAnchorLinksColor() {
const allAnchorElements = document.querySelectorAll('#highlight-links a');

for (const anchorElements of allAnchorElements) {
anchorElements.classList.add('highlight');
}

}

buttonSecondSection.addEventListener('click', changingAnchorLinksColor);

// for in loop practice

const userData = {
userName: 'Lana',
userLastName: 'Valeeva',
age: 30
};

const thirdSectionButton = document.querySelector('#user-data button');

function outputUserData() {
const newUserData = document.querySelector('#uppend-user-data');

newUserData.innerHTML = '';

for (const key in userData) {
const newUserDataElement = document.createElement('li');
const outputDatainTheList = key.toUpperCase() + ': ' + userData[key];
newUserDataElement.textContent = outputDatainTheList;
newUserData.append(newUserDataElement);
}

}

thirdSectionButton.addEventListener('click', outputUserData);