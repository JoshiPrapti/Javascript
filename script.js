// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
const synth = window.speechSynthesis;
let textToSpeak = '';

// Arrays for random words
const nouns = ['dog', 'cat', 'car', 'tree', 'house'];
const verbs = ['runs', 'jumps', 'flies', 'eats', 'sleeps'];
const adjectives = ['happy', 'sad', 'fast', 'slow', 'big'];
const moreNouns = ['book', 'computer', 'phone', 'table', 'pen'];
const places = ['park', 'school', 'office', 'store', 'beach'];

// HTML elements
const speakButton = document.querySelector('#speak-btn');
const storyText = document.getElementById('story-text');

/* Functions
-------------------------------------------------- */

// Function to speak the given text
const speakNow = (string) => {
const utterThis = new SpeechSynthesisUtterance(string);
synth.speak(utterThis);
};

// Function to pick a random word from an array
const pickRandomWord = (array) => array[Math.floor(Math.random() * array.length)];

// Function to update the story text on the webpage
const updateStory = () => {
storyText.textContent = textToSpeak;
};

// Function to add a random word from a given array to the story
const addWordToStory = (array) => {
textToSpeak += pickRandomWord(array) + ' ';
updateStory();
};

function generateRandomStory() {
    textToSpeak = pickRandomWord(nouns) + ' ' + pickRandomWord(verbs) + ' ' + pickRandomWord(adjectives) + ' ' + pickRandomWord(moreNouns) + ' ' + pickRandomWord(places);
    updateStory();
}


// Function to reset the story text
const resetStory = () => {
textToSpeak = '';
updateStory();
};

/* Event Listeners
-------------------------------------------------- */

// Event listeners for buttons to add words to the story
document.getElementById('noun-btn').addEventListener('click', () => addWordToStory(nouns));
document.getElementById('verb-btn').addEventListener('click', () => addWordToStory(verbs));
document.getElementById('adj-btn').addEventListener('click', () => addWordToStory(adjectives));
document.getElementById('noun2-btn').addEventListener('click', () => addWordToStory(moreNouns));
document.getElementById('place-btn').addEventListener('click', () => addWordToStory(places));

// Event listener for the button to speak the story
speakButton.addEventListener('click', () => speakNow(textToSpeak));

// Event listener for the button to generate a random story
document.getElementById('random-story-btn').addEventListener('click', () => generateRandomStory());

// Event listener for the button to reset the story
document.getElementById('reset-btn').addEventListener('click', () => resetStory());