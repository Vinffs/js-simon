"use strict";

simonSays();
function simonSays() {
  // declaring variables
  const min = 1;
  const max = 100;
  const generatedNumber = 5;
  const numbersGenerated = [];
  const promptNumbers = [];
  const numbersFound = [];

  // cicle that generates a random number and pushes it to the array
  while (numbersGenerated.length < generatedNumber) {
    let randomNumber = getRndInteger(min, max);
    if (!numbersGenerated.includes(randomNumber)) {
      numbersGenerated.push(randomNumber);
    }
  }
  console.log(numbersGenerated);

  const disappear = setInterval(maxTime, 3000);
  function maxTime() {
    // console.clear();
    clearInterval(disappear);
    for (let i = 0; i < numbersGenerated.length; i++) {
      promptNumbers.push(parseInt(prompt("digit the numbers you remember")));
    }
    console.log(promptNumbers);

    let x = 0;
    while (x < promptNumbers.length) {
      numbersFound.push(promptNumbers[x]);
      x++;
    }
    console.log(numbersFound);
  }
}
