let resultsContainer = document.querySelector('#results');
 let spinContainer = document.querySelector('#spin');
 let flipContainer = document.querySelector('#flip');
let numberOfTricks = 0;


function flipRandomNumber(){
  let randomNumber = 0;
  randomNumber = Math.floor(Math.random() * 6);
  return randomNumber;
}
function spinRandomNumber(){
  let spinRandomNumber = 0;
  spinRandomNumber = Math.floor(Math.random() * 2);
  return spinRandomNumber;
}
function spinFunction(spinRandomNumber){
  let spin = document.createElement('p');
  spin.className = "spin";
  if (spinRandomNumber === 0) {
    spin.textContent = "180 ";
  } else if (spinRandomNumber === 1) {
    spin.textContent = "360 ";
  } 
  return spin;
}

function flipFunction(flipRandomNumber){
  let flip = document.createElement('p');
  flip.className = "flip";
  if (flipRandomNumber === 0) {
    flip.textContent = "Kickflip";
  } else if (flipRandomNumber === 1) {
    flip.textContent = "Heelflip";
  } else if (flipRandomNumber === 2) {
    flip.textContent = "Treflip";
  } else if (flipRandomNumber === 3) {
    flip.textContent = "Variel-Heel";
  } else if (flipRandomNumber === 4) {
    flip.textContent = "Variel-Flip";
  } else if (flipRandomNumber === 5) {
    flip.textContent = "Lazer-Flip";
  } 
  return flip;
}

new URLSearchParams(window.location.search).forEach((value, name) => {
  if (name === "numberOfTricks" && value === "one") {
    numberOfTricks = 0;
  } else if (name === "numberOfTricks" && value === "two") {
    numberOfTricks = 1;
  } else if (name === "numberOfTricks" && value === "three") {
    numberOfTricks = 2;
  }
});

new URLSearchParams(window.location.search).forEach((value, name) => {
  console.log(`${name}: ${value}`);
  if (name === "spin" && value === "on" && numberOfTricks === 0) {
   spinContainer.append(spinFunction(spinRandomNumber()));
  }else if(name === "spin" && value === "on" && numberOfTricks === 1){
   spinContainer.append(spinFunction(spinRandomNumber()));
  spinContainer.append(spinFunction(spinRandomNumber()));
  }else if(name === "spin" && value === "on" && numberOfTricks === 2){
 spinContainer.append(spinFunction(spinRandomNumber()));
    spinContainer.append(spinFunction(spinRandomNumber()));
    spinContainer.append(spinFunction(spinRandomNumber()));
  }
});

new URLSearchParams(window.location.search).forEach((value, name) => {
  console.log(`${name}: ${value}`);
  if (name === "flip" && value === "on" && numberOfTricks === 0) {
   flipContainer.append(flipFunction(flipRandomNumber()));
  }else if(name === "flip" && value === "on" && numberOfTricks === 1){
    flipContainer.append(flipFunction(flipRandomNumber()));
    flipContainer.append(flipFunction(flipRandomNumber()));
  }else if(name === "flip" && value === "on" && numberOfTricks === 2){
    flipContainer.append(flipFunction(flipRandomNumber()));
    flipContainer.append(flipFunction(flipRandomNumber()));
    flipContainer.append(flipFunction(flipRandomNumber()));
  }
});

   