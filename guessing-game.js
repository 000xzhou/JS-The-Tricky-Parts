function guessingGame() {
  // random whole number between 0 and 99
  let random = Math.floor(Math.random() * 100);
  let guess = 0;
  let gameover = false;

  return function (num) {
    guess++;
    // The game should tell you whether your guess is too high, too low, or correct.
    if (num < random) {
      return `${num} is too low!`;
    } else if (num > random) {
      return `${num} is too high!`;
    } else {
      if (gameover) {
        return `The game is over, you already won!`;
      }
      // After a correct guess, the game ends.
      gameover = true;
      return `You win! You found ${num} in ${guess} guesses.`;
    }
  };
}

module.exports = { guessingGame };
