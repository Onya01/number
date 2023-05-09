// function rollTheDice() {
//     const number = Math.floor(Math.random()*6 + 1);
//     switch(number) {
//         case 1: {
//             console.log("wow")
//         break;
//         }
        
//     }
//     console.log("I want to roll the dice", number);
// }

// function rollDice() {
//     const diceResult = Math.floor(Math.random() * 6) + 1;
//     const diceElement = document.getElementById("dice-result");
//     diceElement.textContent = diceResult;
// }

// function rollDice() {
//     const dice = document.querySelector('.dice');
//     const dots = dice.querySelectorAll('.dot');
//     const numDots = Math.floor(Math.random() * 6) + 1;
    
//     // Hide all dots
//     dots.forEach((dot) => {
//       dot.classList.remove('active');
//     });
    
//     // Show the appropriate number of dots
//     for (let i = 0; i < numDots; i++) {
//       dots[i].classList.add('active');
//     }
//   }

// function rollDice() {
//     const dice = document.querySelector('.dice');
//     const number = dice.querySelector('.number');
//     const num = Math.floor(Math.random() * 2) + 1;
    
//     // Set the appropriate number
//     number.textContent = num;
    
//     // Show the number
//     number.classList.add('active');
//   }
  
// function rollDice() {
//     const dice = document.querySelector('.dice');
//     const number = dice.querySelector('.number');
//     const num = Math.floor(Math.random() * 2) + 1;
    
//     number.innerHTML = num;
//     number.classList.add('active');
    
//     setTimeout(() => {
//       number.classList.remove('active');
//     }, 2000);
//   } 
  
 dice = document.querySelector('.dice');

 rollBtn = document.querySelector('.roll');

function randomDice () {

    const random = Math.floor(Math.random() * 10);

    if(random >= 1 && random <= 6) {
        rollDice(random);
    }
    else {
        randomDice();
    }
}

function rollDice(random) {
    dice.style.animation = 'rolling 4s';

    setTimeout(() => {
        switch(random) {
            case 1:
                dice.style.transform = 'rotateX(0deg) rotateY(0deg)';
                break;

            case 6:
                dice.style.transform = 'rotateX(180deg) rotateY(0deg)';
                    break;

            case 2:
                dice.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                                               break;
                    
                                       case 5:
                dice.style.transform = 'rotateX(90deg) rotateY(0deg)';
                    break;

            case 3:
                dice.style.transform = 'rotateX(0deg) rotateY(90deg)';
                    break;
                            
                                       case 4:
                dice.style.transform = 'rotateX(0deg) rotateY(-90deg)';
                    break;

            default:
                break;    
        }

        dice.style.animation = 'none';
    }, 4050);

   
}

 rollBtn.addEventListener('click', randomDice);
