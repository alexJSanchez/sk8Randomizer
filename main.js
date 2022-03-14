const resultList = document.querySelector("#results");

let flip = document.createElement('p');

let spin = "";
let stance = "";


new URLSearchParams(window.location.search).forEach((value, name) => {
    console.log(name)
   console.log(value)
   if(name === 'flip' && value === 'on'){
       flip.textContent = 'kickflip';
        document.querySelector('#results').append(flip);
  }

});
