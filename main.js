let flip = document.createElement('p');
flip.className = "flip";
let numberOfTricks = 0;


function randomNumber(){
  let randomNumber = Math.floor(Math.random() * 3);
  return randomNumber;
}
function flipFunction(randomNumber){
  if (randomNumber === 0) {
    document.getElementsByClassName('flip').textContent = "kickflip";
  } else if (randomNumber === 1) {
    flip.textContent = "heelflip";
  } else if (randomNumber === 2) {
    flip.textContent = "treflip";
  } 
  return flip
}

new URLSearchParams(window.location.search).forEach((value, name) => {
  if (name === "numberOfTricks" && value === "one") {
    numberOfTricks = 1;
    flipFunction(randomNumber);
    console.log(flip)
    console.log("this is a one");
  } else if (name === "numberOfTricks" && value === "two") {
    numberOfTricks = 2;
    console.log("this is a two");
  } else if (name === "numberOfTricks" && value === "three") {
    numberOfTricks = 3;
    console.log("this is a three");
  }
  });

new URLSearchParams(window.location.search).forEach((value, name) => {
  console.log(`${name}: ${value}`);

  if (name === "flip" && value === "on" && name === "numberOfTricks" && value === "one") {
     flipFunction(randomNumber);
    document.querySelector('#results').append(`${flip}`)
  }else if(name === "flip" && value === "on" && name === "numberOfTricks" && value === "one"){
    flipFunction(randomNumber);
    document.querySelector('#results').append(`${flip}`)
    flipFunction(randomNumber)
    document.append('#results').append(`${flip}`);
  }
});


if (numberOfTricks = 1){

  document.querySelector('#result')
}
  
