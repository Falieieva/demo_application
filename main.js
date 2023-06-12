import { generateRandomEmoji, addEmoji } from './emojiUtils.js';

function deleteEmoji() {
    document.getElementById('emojiInput').value = '';
}

generateRandomEmoji();

window.addEmoji = addEmoji;
