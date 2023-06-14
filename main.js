import { generateRandomEmoji, addEmoji, deleteEmoji, emojiArray, emojiSet, updateOutputs } from './emojiUtils.js';

const emojiForm = document.getElementById('emojiForm');
const emojiInput = document.getElementById('emojiInput');
const arrayOutput = document.getElementById('arrayOutput');
const setOutput = document.getElementById('setOutput');

emojiInput.addEventListener('input', deleteEmoji);

generateRandomEmoji();

emojiForm.addEventListener('submit', function(event) {
    event.preventDefault();
    addEmoji();
});

updateOutputs();
