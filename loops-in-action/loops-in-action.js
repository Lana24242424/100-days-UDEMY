
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