const resultsContainer = document.getElementById('#results');
let flip = document.createElement('p');
flip.className = "flip";
let numberOfTricks = 0;


function randomNumber(){
  let randomNumber = Math.floor(Math.random() * 3);
  return randomNumber;
}
function flipFunction(randomNumber){
  if (randomNumber === 0) {
    flip.textContent = "kickflip";
  } else if (randomNumber === 1) {
    flip.textContent = "heelflip";
  } else if (randomNumber === 2) {
    flip.textContent = "treflip";
  } 
  console.log('hello')
  return flip
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
  if (name === "flip" && value === "on" && numberOfTricks === 0) {
     flipFunction(randomNumber());
  }else if(name === "flip" && value === "on" && numberOfTricks === 1){
   flipFunction(randomNumber());
   flipFunction(randomNumber());
  }else if(name === "flip" && value === "on" && numberOfTricks === 2){
    flipFunction(randomNumber());
    flipFunction(randomNumber());
    flipFunction(randomNumber());
  }
});

  
