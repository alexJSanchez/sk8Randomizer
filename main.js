let flip = '';
let numberOfTricks = 0;
new URLSearchParams(window.location.search).forEach((value, name) => {
  console.log(`${name}: ${value}`);

  if (name === "numberOfTricks" && value === "one") {
    numberOfTricks = 0;
    console.log("this is a one");
  } else if (name === "numberOfTricks" && value === "two") {
    numberOfTricks = 1;
    console.log("this is a two");
  } else if (name === "numberOfTricks" && value === "three") {
    numberOfTricks = 2;
    console.log("this is a three");
  }
  for (let i = 0; i <= numberOfTricks; i++) {
    let randomNumber = 0;
    if (name === "flip" && value === "on") {
      randomNumber = Math.floor(Math.random() * 3);
      console.log(randomNumber);
      if(randomNumber === 0){
          flip = 'kickflip'
      }else if(randomNumber === 1){
        flip = 'heelflip'
      }else if(randomNumber === 2){
          flip = 'treflip'
      }
  }
  document.querySelector('#results').append(`${flip}`)
}

});
