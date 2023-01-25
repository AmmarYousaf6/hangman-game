# hangman-game

In the above JavaScript code, I created a simple hangman game where the player has to guess a word. The word to be guessed is stored in a constant variable called "word" and initialized to "javascript".

To display the word to the user, I created an empty array called "guessWord" and used a for loop to fill the array with underscores, one for each letter in the word.

To keep track of the number of remaining guesses, I declared a variable called "remainingGuesses" and initialized it to 6.

I then used a while loop that continues as long as there are remaining guesses. Inside the loop, I prompt the user to enter a letter and check if that letter is present in the word. If the letter is present, I used another for loop to update the "guessWord" array with the correct letter. If the letter is not present, I decrement the remaining guesses.

I then display the current state of the "guessWord" array to the user. Using an if condition I check whether the guessWord has any underscore or not. If there are no underscores, the user has successfully guessed the word and the loop breaks, displaying the message "You win!"

If the loop breaks because the user has run out of guesses, the script will display a message "You lose! The word was " + word"

So this is a basic overview of what the code does and how it works.
