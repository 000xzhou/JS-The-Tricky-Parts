function guessingGame() {
  // random whole number between 0 and 99
  let random = 60;
  let guess = 0;
  let gameover = false;

  return function (num) {
    // console.log(num);
    guess++;
    if (num < random) {
      return `${num} is too low!`;
    } else if (num > random) {
      return `${num} is too high!`;
    } else {
      // stop guess .. how?
      if (gameover) {
        return `The game is over, you already won!`;
      } else {
        gameover = true;
        return `You win! You found ${num} in ${guess} guesses.`;
      }
    }
  };
}

module.exports = { guessingGame };
