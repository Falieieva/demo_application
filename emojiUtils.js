const emojis = ['🐮', '🐯', '🐼', '🐨', '🐵', '🐷', '🐸'];

export const emojiArray = [];
export const emojiSet = new Set();

export function generateRandomEmoji() {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    const randomEmoji = emojis[randomIndex];
    document.getElementById('emojiInput').value = randomEmoji;
}

export function deleteEmoji() {
    const emojiInput = document.getElementById('emojiInput');
    emojiInput.value = emojiInput.value.trim();
}

export function addEmoji() {
    const emojiInput = document.getElementById('emojiInput').value.trim();

    if (emojiInput === '') {
        return;
    }

    emojiArray.push(emojiInput);
    emojiSet.add(emojiInput);
    updateOutputs();

    document.getElementById('emojiInput').value = '';
    generateRandomEmoji();
}

export function updateOutputs() {
    const arrayOutput = document.getElementById('arrayOutput');
    const setOutput = document.getElementById('setOutput');
    arrayOutput.innerHTML = `[${emojiArray.join(', ')}]`;
    setOutput.innerHTML = `[${Array.from(emojiSet).join(', ')}]`;
}
