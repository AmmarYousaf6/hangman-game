const word: string = "javascript";
let guessWord: string[] = [];
for (let i = 0; i < word.length; i++) {
  guessWord[i] = "_";
}
let remainingGuesses: number = 6;

while (remainingGuesses > 0) {
  let userGuess: string = prompt("Guess a letter:");
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
