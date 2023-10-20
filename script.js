"use strict";

simonSays();
function simonSays() {
  // declaring variables
  const min = 1;
  const max = 100;
  const generatedNumber = 5;
  const numbersGenerated = [];

  // cicle that generates a random number and pushes it to the array
  while (numbersGenerated.length < generatedNumber) {
    let randomNumber = getRndInteger(min, max);
    if (!numbersGenerated.includes(randomNumber)) {
      numbersGenerated.push(randomNumber);
    }
  }
  console.log(numbersGenerated);
}
