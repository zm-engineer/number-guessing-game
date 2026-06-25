//generate a random integer from 1 to 100
function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1; //Math.floor yields 0-99 then +1 yields 1-100.
}

//pause function to use with async/await
const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms)); 

/* asynchronous function: after each invalid input,
   it pauses so the console message is visible before reopening the prompt.
   Bulletproof validation:
    - null -> the user cancelled the prompt.
    - Number("") is 0 and Number("abc") is NaN: that is why we use
      Number.isInteger() to rule out empty values, decimals, and text.
    - we also require the value to be within the 1–100 range.
*/
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


