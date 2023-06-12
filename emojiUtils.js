
const emojis = ['🐮', '🐯', '🐼', '🐨', '🐵', '🐷', '🐸'];

export function generateRandomEmoji() {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    const randomEmoji = emojis[randomIndex];
    document.getElementById('emojiInput').value = randomEmoji;
}

export function addEmoji() {
    const emojiInput = document.getElementById('emojiInput').value.trim();
    const arrayOutput = document.getElementById('arrayOutput');
    const setOutput = document.getElementById('setOutput');

    if (emojiInput === '') {
        return;
    }

    if (arrayOutput.textContent) {
        arrayOutput.textContent += ', ' + emojiInput;
    } else {
        arrayOutput.textContent = emojiInput;
    }

    const existingSet = setOutput.textContent.split(', ');
    if (!existingSet.includes(emojiInput)) {
        if (setOutput.textContent) {
            setOutput.textContent += ', ' + emojiInput;
        } else {
            setOutput.textContent = emojiInput;
        }
    }

    document.getElementById('emojiInput').value = '';
    
    generateRandomEmoji();
}
