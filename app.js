
const buttons = document.querySelectorAll('.button');

const calculator = document.querySelector('.calculator');

const clear = document.querySelector('.clean');

const screen = document.querySelector('.screen')

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
     let value = event.target.buttons.number;
     screen.value += value;
        console.log(event.target.innerText);
    });
  });

   calculator.forEach((calculator) => {
    calculator.addEventListener('click', (event) => {
     let value = event.target.buttons.number;
     screen.value += value;
        console.log(event.target.innerText);
    });
  });

  clear.forEach((clear) => {
    clear.addEventListener('click', (event) => {
     let value = event.target.buttons.number;
     screen.value += value;
        console.log(event.target.innerText);
    });
  });

screen.forEach((screen) => {
    screen.addEventListener('click', (event) => {
     let value = event.target.buttons.number;
     screen.value += value;
        console.log(event.target.innerText);
    });
  });
 
calculator.addEventListener('click',(event) => {
console.log(event.target.innerText);
if (event.target.classList.contains('first number')) {
    currentInput += event.target.innerText;
    updatDisplay(currentInput);
  }
if (event.target.innerText === '*') {
    currentInput += event.target.innerText;
    updatDisplay(currentInput);
  }
});


