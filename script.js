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

  const numToDisplay = document.getElementById("displayRandomNums");
  numToDisplay.innerHTML = numbersGenerated;

  setTimeout(maxTime, 3000);
  function maxTime() {
    numToDisplay.innerHTML = "";
  }

  for (let i = 0; i < numbersGenerated.length; i++) {
    const input = document.createElement("input");
    input.type = "number";
    input.classList.add("my-input", "fs-4", "text-white", "text-center");
    document.getElementById("inputContainer").appendChild(input);
    const askPlayer = document.getElementById("askPlayer");
    askPlayer.classList.toggle("d-none");
  }

  function confrontArrays() {
    let x = 0;
    while (x < promptNumbers.length) {
      numbersFound.push(promptNumbers[x]);
      x++;
    }
  }
}
