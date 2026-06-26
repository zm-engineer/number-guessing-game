function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1; 
}

const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms)); 

async function getPlayerGuess() {
  while (true) {
    let input = prompt("Guess a number between 1 and 100:");

    if (input === null) {
      console.log("You can't run from me. Enter a number between 1 and 100.");
      await pause(1200);
      continue;
    }

    let guess = Number(input.trim());
    if (!Number.isInteger(guess) || guess < 1 || guess > 100) {
      console.log(`✗ "${input}" is not a whole number from 1 to 100. Try again.`);
      await pause(1200);
      continue;
    }
    
    return guess;
  }

  
}

function checkGuess(guess, number) {
  
  if (guess === number) {
    console.log(` Correct! The number was ${number}.`);
    return true;
  } else if (guess < number) {
    console.log(` Too low! The number is higher than ${guess}.`);
  } else {
    console.log(` Too high! The number is lower than ${guess}.`);
  }
  return false;
}