"use strict";

// Global variables
const qs = (s) => document.querySelector(s); // General querySelector abbriviation
⁄
let letterN = 0; // The N'th number of letter in texttoType
const typeElem = qs('#typewriter'); // Element to add the text to
const extraElem = qs('#extrainfo'); // Extra element to add the text to
const textLength = texttoType.length; // Measuring the number of charecters in the texttoType

function init() {
    qs('.typewritten').textContent = ""; // Remove the text from the DOM
    typeText(typeElem);
}

function typeText(elem) {
    elem.textContent = texttoType.substring(0, letterN); // Increase letters in string and print
    letterN++;// Increment N
    const randomTypeSpeed = Math.floor(Math.random() * 6) + 1;// Setting realistic variable typing speed!
    // Check is all letters have been printed
    if (letterN != textLength + 1) {
        setTimeout(typeText, randomTypeSpeed * 50);
    } else {
        endThings();
    }
}

function endThings() {

}

window.addEventListener('DOMContentLoaded', init());