"use strict";


// Global variables
const qs = (s) => document.querySelector(s); // General querySelector abbriviation

let texttoType;// Store orignal elem text in this variable
let letterN = 1; // The N'th number of letter in the texttoType (see typeText function below)
const getElems = document.querySelectorAll('.typewritten'); // Get all .typewritten elems as an array
let arrayNr = 0;
const typeElem = getElems[arrayNr]; // Get the first element from the array

function init() {
    getElems.forEach(typeText);
}

function typeText(typeelem) {
    console.log(typeelem);
    texttoType = typeelem.textContent;
    typeelem.textContent = "";
    console.log(texttoType);
    // typeLoop();
}

function typeLoop() {
    console.log('typeLoop');
    const textLength = texttoType.length; // Measuring the number of charecters in the texttoType
    typeElem.textContent = texttoType.substring(0, letterN); // Increase letters in string and print the string
    console.log(typeElem.textContent);
    //console.log(letterN);
    if (letterN != textLength) { // Check the number of letters printed is not yet the full amount
        letterN++; // Increment N -> the number of letters to be printed next time 
        //console.log(letterN);
        const randomTypeSpeed = Math.floor(Math.random() * 6) + 1;// Setting realistic variable typing speed!
        setTimeout(typeLoop, randomTypeSpeed * 50);
    } else {
        letterN = 1;
        typeElem.classList.remove('.typewritten');
        typeElem.classList.add('.donetyping');
        endThings();
    }
}

function endThings() {

}

window.addEventListener('DOMContentLoaded', init());