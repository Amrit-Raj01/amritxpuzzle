let wordsList = words[level];
let currentWord = wordsList[Math.floor(Math.random() * wordsList.length)];
let scrambledWord = scrambleWord(currentWord);

document.getElementById("scrambled-word").textContent = `Scrambled: ${scrambledWord}`;

document.getElementById("submit-btn").addEventListener("click", () => {
    const userInput = document.getElementById("user-input").value.trim().toUpperCase();
    if (userInput === currentWord) {
        document.getElementById("result").textContent = "Correct! 🎉";
        setTimeout(() => {
            currentWord = wordsList[Math.floor(Math.random() * wordsList.length)];
            scrambledWord = scrambleWord(currentWord);
            document.getElementById("scrambled-word").textContent = `Scrambled: ${scrambledWord}`;
            document.getElementById("result").textContent = "";
            document.getElementById("user-input").value = "";
        }, 1000);
    } else {
        document.getElementById("result").textContent = "Incorrect! Try again.";
    }
});

function scrambleWord(word) {
    return word.split("").sort(() => Math.random() - 0.5).join("");
}
