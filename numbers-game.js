function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1; 
}

const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms)); 

async function getPlayerGuess() {
  const timeout = 3000; 
  while (true) {
    let input = prompt("Guess a number between 1 and 100:");

    if (input === null) {
      console.log("You can't run from me. Enter a number between 1 and 100.");
      await pause(timeout);
      continue;
    }

    let guess = Number(input.trim());

    if (isNaN(guess)) {
      console.log(`✗ "${input}" is not a number. Try again.`);
      await pause(timeout);
      continue;
    }
    
    if (!Number.isInteger(guess) || guess < 1 || guess > 100) {
      console.log(`✗ "${input}" is not a whole number from 1 to 100. Try again.`);
      await pause(timeout);
      continue;
    }
    
    return guess;
  }

  
}

function checkGuess(guess, correctNumber) {
  const diff = guess - correctNumber;
  const distance = Math.abs(diff);

  if (distance === 0) return true;

  if (diff < 0) {
    if (distance > 20) {
      console.log("way too low");
      return false;
    }
    if (distance > 10) {
      console.log("too low, but getting closer");
      return false;
    }
    if (distance > 5) {
      console.log("a little low");
      return false;
    }

    console.log("very close, just a bit low");
    return false;
  } else {
    if (distance > 20) {
      console.log("way too high");
      return false;
    }
    if (distance > 10) {
      console.log("too high, but getting closer");
      return false;
    }
    if (distance > 5) {
      console.log("a little high");
      return false;
    }

    console.log("very close, just a bit high");
    return false;
  }
}

async function game() {
  const number = generateRandomNumber();
  var attempts = 0;
  const feedbackDelay = 1200;

  for (let i = 0; i < 10; i++) {
    attempts++;

    const guess = await getPlayerGuess();

    if (checkGuess(guess, number)) {
      console.log(`You guessed the number in ${attempts} attempts!`);
      return;
    }

    await pause(feedbackDelay);
  }

  console.log(`You failed to guess the number. It was ${number}.`);
}

game();
