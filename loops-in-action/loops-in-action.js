
// first example: sum numbers

const calculateSumButtonElement = document.querySelector('#calculator button');

function calculateSum() {
    const userNumberInputElement = document.getElementById('user-number');
    const enteredNumber = userNumberInputElement.value;
    
    let sumUoToNumber = 0;
    
    for(let i = 0; i <= enteredNumber; i++) {
        sumUoToNumber = sumUoToNumber + i;
    }
    
    const outputResulElement = document.getElementById('calculated-sum');

    outputResulElement.textContent = sumUoToNumber;
    outputResulElement.style.display = 'block';
}


calculateSumButtonElement.addEventListener("click", calculateSum);


// Highlight anchor elements For ... of (array loop)

const highlightLinksButtonElement = document.querySelector('#highlight-links button');

function highlightLinks() {
const anchorElements = document.querySelectorAll('#highlight-links a');

for (const anchorElement of anchorElements) {
    anchorElement.classList.add('highlight');
} 

}

highlightLinksButtonElement.addEventListener('click', highlightLinks);

// display user data for in loop


const dummyUserData = {
    firstName: 'Lana',
    lastName: 'Valeeva',
    age: 30
};

const displayUserDataButtonElement = document.querySelector('#user-data button');

function displayUserData() {
const outputDataElement = document.querySelector('#output-user-data');

outputDataElement.innerHTML = '';

for (const propertyName in dummyUserData) {
const newUserDataListItemElement = document.createElement('li');
const outputText = propertyName.toUpperCase() + ': ' + dummyUserData[propertyName]
newUserDataListItemElement.textContent = outputText;
outputDataElement.append(newUserDataListItemElement);
}

};

displayUserDataButtonElement.addEventListener('click', displayUserData);

// while loop example. Roll the dice

const rollDiceElement = document.querySelector('#statistics');

// this is the helper function
// to help to roll the dice
function rollDice() {
return Math.floor(Math.random() * 6) + 1;

}

function deriveNumberOfDiceRolls() {
const targetNumberInputElement = document.querySelector('#user-target-number');
const diceRollsListElement = document.querySelector('#dice-rolls');

const enteredNumber = targetNumberInputElement.value;
diceRollsListElement.innerHTML = '';

let hasRolledTargetNumber = false;
let numberOfRolls = 0;

while (!hasRolledTargetNumber) {
const rolledNumber = rollDice();
// if (rolledNumber == enteredNumber) {
//     hasRolledTargetNumber = true;
// }
// numberOfRolls = numberOfRolls + 1;
numberOfRolls++;
const newRollListelement = document.createElement('li');
const outputTextContent = 'Roll' + numberOfRolls + ': ' + rolledNumber;
newRollListelement.textContent = outputTextContent;
diceRollsListElement.append(newRollListelement);
hasRolledTargetNumber = rolledNumber == enteredNumber;

}

const outputTotalRollsElement = document.getElementById('output-total-rolls');
const outputTargetNumberElement = document.getElementById('output-target-number');

outputTargetNumberElement.textContent = enteredNumber;
outputTotalRollsElement.textContent = numberOfRolls;

}

rollDiceElement.addEventListener('click', deriveNumberOfDiceRolls);
