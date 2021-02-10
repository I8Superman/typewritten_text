"use strict";
// Global variables
const qs = (s) => document.querySelector(s); // General querySelector abbriviation

let texttoType = [];// Store orignal text from elem0 in this variable
let letterN = 1; // The N'th number of letter in the texttoType (see typeText function below)
const getElems = document.querySelectorAll('.typewritten'); // Get all .typewritten elems as an array
let arrayNr = 0;

function getText() {
    getElems.forEach(elem => { // Stores txt from all elems as an array in the texttoType var
        texttoType.push(elem.textContent);
    });
    getElems.forEach(elem => elem.textContent = "");// Removes text content from all the elements
    typeText();
}

function typeText() {
    getElems[arrayNr].textContent = texttoType[arrayNr].substring(0, letterN); // Increase letters in string and print the string
    const textLength = texttoType[arrayNr].length; // getting the text length of the current string object

    if (letterN <= textLength) { // Check the number of letters printed is not yet the full amount
        letterN++; // Increment N -> the number of letters to be printed next time 
        const randomTypeSpeed = Math.floor(Math.random() * 8) + 1;// Setting realistic variable typing speed!
        setTimeout(typeText, randomTypeSpeed * 40);
    } else {
        letterN = 1; // Reset letterN for next string to be printed
        arrayNr++; // Increment arrayNr to select next string in texttoType array for printing
        if (arrayNr >= texttoType.length) { // If arrayNr 
            console.log('No more elements to type!');
        } else {
            typeText(); // Run function again - now selecting the next string in the texttoType array
        }
    }
}

window.addEventListener('DOMContentLoaded', getText());