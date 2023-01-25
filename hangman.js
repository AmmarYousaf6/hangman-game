const word = "javascript";
let guessWord = [];
for (let i = 0; i < word.length; i++) {
  guessWord[i] = "_";
}
let remainingGuesses = 6;

while (remainingGuesses > 0) {
  let userGuess = prompt("Guess a letter:");
  if (word.includes(userGuess)) {
    for (let i = 0; i < word.length; i++) {
      if (word[i] === userGuess) {
        guessWord[i] = userGuess;
      }
    }
  } else {
    remainingGuesses--;
  }
  console.log(guessWord.join(" "));
  if (!guessWord.includes("_")) {
    console.log("You win!");
    break;
  }
}
if (remainingGuesses === 0) {
  console.log("You lose! The word was " + word);
}
