const body = document.querySelector('body');
let grid = '';
let gridItem = document.querySelectorAll('.div-item');
let generateButton = document.querySelector('#generate-grid-btn');
generateButton.onclick = userInput;

let defaultGridItemStyle = 'height: 100%; width: 100%; background-color: blue;';

function userInput() {
    let userInputNumber = parseInt(prompt('How big X by X grid?', 'I.e. 30'));
    if (userInputNumber > 100) {
        return alert('Too large! Try again.');
    }
    if (isNaN(userInputNumber)) {
        return alert('Wrong input!');
    }
    createGrid(userInputNumber);
}

function createGrid(userInputNumber) {
    grid = document.createElement('div');
    grid.id = 'grid-base';
    grid.style.cssText = `display: grid; grid-gap: 3px; width: 1000px; height: 1000px; padding-bottom: 20%; grid-template-columns: repeat(${userInputNumber}, 1fr); grid-template-rows: repeat(${userInputNumber}, 1fr);`;
    // grid.style.gridTemplateColumns = ``;
    // grid.style.gridTemplateRows = ``;
    body.appendChild(grid);
    let amountOfItems = userInputNumber * userInputNumber;
    for (i = 0; i < amountOfItems; i++) {
        let newGridItem = document.createElement('div');
        newGridItem.id = `div-item-${i}`;
        newGridItem.style.cssText = defaultGridItemStyle;
        grid.appendChild(newGridItem);
    }
    changeColor();
    resetGrid();
}

function changeColor() {
    gridItems = document.querySelector('#grid-base').childNodes;
    gridItems.forEach(gridItem => gridItem.addEventListener('mouseenter', function() {
        gridItem.style.cssText = `height: 95%; width: 95%; background-color: rgb(${randomRGBNr()},${randomRGBNr()},${randomRGBNr()});`;
        console.log();
    }));
    gridItems.forEach(gridItem => gridItem.addEventListener('mouseleave', function() {
        setTimeout(function() {
        gridItem.style.cssText = defaultGridItemStyle;
        }, 100);
    }));
}

function resetGrid() {
    let resetButton = '';
    if (document.getElementById('reset-button') === null) {
    resetButton = document.createElement('button');
    resetButton.id = 'reset-button';
    resetButton.className = 'button';
    resetButton.textContent = 'Reset grid!';
    generateButton.parentNode.insertBefore(resetButton, generateButton.nextSibling);
    }
    resetButton.onclick = () => {
        document.querySelector('#grid-base').remove();
    }
}

function randomRGBNr() {
    let randomNr = Math.floor(Math.random() * 256);
    return randomNr;
}