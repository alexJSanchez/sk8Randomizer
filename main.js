


        const resultList = document.querySelector('#results')
        
        let flip = '';
        let spin = '';
        let stance = '';
        
       
      let checkBox = document.querySelector('.flip');
            function creatLine(){
            new URLSearchParams(window.location.search).forEach((value,name) => {
                let trickSentence = document.createElement('p');
                trickSentence.className = 'trickSentence';
                if (name === "stance" && value === "on"){
                  spinSelector = Math.floor((Math.random() * 4));
                  console.log(spinSelector)
                  switch (spinSelector){
                      case 0: stance = 'Regular';
                      break;
                      case 1: stance = 'Switch';
                      break;  
                      case 2: stance = 'Nollie';
                      break;
                      case 3: stance = 'Fackie';
                      break;    
                    }  
               }
               if (name === "spin" && value === "on"){
                  spinSelector = Math.floor((Math.random() * 4));
                  console.log(spinSelector)
                  switch (spinSelector){
                      case 0: spin = 'Fs 180';
                      break;
                      case 1: spin = 'Bs 180';
                      break;  
                      case 2: spin = 'Fs 360';
                      break;
                      case 3: spin = 'Bs 360';
                      break;    
                    }  
               }
               if(name === "flip" && value === "on"){
                  flipSelector = Math.floor((Math.random() * 5));
                  console.log(flipSelector)
                  switch (flipSelector){
                      case 0: flip = 'Kickflip';
                      break;
                      case 1: flip = 'Variel-Kickflip';
                      break;
                      case 2: flip = 'TreFlip'; 
                      break;
                      case 3: flip = 'Heelflip';
                      break;
                      case 4: flip = 'Variel-Heelflip';
                      break;
                      case 5: flip = 'LazerFlip';
                      break;
                    }
               }
               trickSentence.textContent = `${stance} ${spin} ${flip}`;
               resultList.appendChild(trickSentence);
            })
        }
        function check() {
            document.querySelector(".flip").checked = true;
          }
          function uncheck() {
            document.querySelector(".flip").checked = false;
          }
          
         
        document.querySelector('.check').addEventListener('click', Event => {
           document.querySelector(".flip").checked = true;
           Event.preventDefault();
        })
        document.querySelector('.uncheck').addEventListener('click', Event => {
           document.querySelector(".flip").checked = false;
           Event.preventDefault();
        })
        if(document.querySelector(".flip").checked === false){
            console.log('hello')
        }
          
         
        resultList.append(document.createElement('br'))
       