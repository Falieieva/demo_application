import { generateRandomEmoji, addEmoji, deleteEmoji } from './emojiUtils.js';

const emojiInput = document.getElementById('emojiInput');

emojiInput.addEventListener('input', deleteEmoji);

generateRandomEmoji();

document.getElementById('addButton').addEventListener('click', addEmoji);

emojiInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addEmoji();
    }
});

