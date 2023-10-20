"use strict";

simonSays();
function simonSays() {
  // declaring variables
  const min = 1;
  const max = 100;
  const generatedNumber = 5;
  const numbersGenerated = [];
  const inputNumbers = [];
  const numbersFound = [];
  let input;

  // containers and buttons
  const numToDisplay = document.getElementById("displayRandomNums");
  const inputContainer = document.getElementById("inputContainer");
  const askPlayer = document.getElementById("askPlayer");
  const result = document.getElementById("result");
  const btn = document.querySelector("button");

  result.classList.add("d-none");

  // cicle that generates a random number and pushes it to the array
  while (numbersGenerated.length < generatedNumber) {
    let randomNumber = getRndInteger(min, max);
    if (!numbersGenerated.includes(randomNumber)) {
      numbersGenerated.push(randomNumber);
    }
  }

  // cicle that creates a span with the random number and appends it to numToDisplay
  for (let i = 0; i < numbersGenerated.length; i++) {
    const span = document.createElement("span");
    span.classList.add("fs-4", "mx-3");
    span.innerHTML = numbersGenerated[i];
    numToDisplay.appendChild(span);
  }
  console.log(numbersGenerated);

  // timer to reset numToDisplay after 3 seconds
  setTimeout(maxTime, 3000);
  function maxTime() {
    numToDisplay.innerHTML = "";
    askPlayer.classList.remove("d-none");
  }

  // creates slots (based on the generatedNumber = 5 ) for user to insert numbers
  for (let i = 0; i < numbersGenerated.length; i++) {
    input = document.createElement("input");
    input.type = "number";
    input.classList.add("userInput", "fs-4", "text-white", "text-center");
    inputContainer.appendChild(input);
  }

  // onClick, displays the match between input and random number
  btn.addEventListener("click", function btnAction() {
    btn.removeEventListener("click", btnAction);
    result.classList.remove("d-none");
    const inputs = document.querySelectorAll("input");

    let i = 0;
    while (i < inputs.length) {
      let value = parseInt(inputs[i].value);
      inputNumbers.push(value);
      i++;
    }
    let resultMsg;
    for (let x = 0; x < inputNumbers.length; x++) {
      if (numbersGenerated.includes(inputNumbers[x])) {
        numbersFound.push(inputNumbers[x]);
        resultMsg = document.createElement("span");
        resultMsg.classList.add("fs-4", "mx-3");
        resultMsg.innerHTML = numbersFound[x];
        result.appendChild(resultMsg);
      }
    }
  });
}
