/*
let calculation = localStorage.getItem('calculation') || ''; 

let calculatorScreen = document.querySelector('.js-calculator-screen');
calculatorScreen.innerHTML = calculation || '';

function updateCalculation(character) {
  calculation += character;
  localStorage.setItem('calculation', calculation);
  return calculation;
}
*/


let calculation = localStorage.getItem('calculation') || '';

// Display the calculation when the page first loads.
displayCalculation();

function updateCalculation(character) {
  calculation += character;

  // Display the calculation on the page
  // instead of console.log
  displayCalculation();

  localStorage.setItem('calculation', calculation);
}

function displayCalculation() {
  document.querySelector('.js-calculator-screen').innerHTML = calculation;
}


//HIS CALCULATOR REMOVES THE . WHEN YOU ADD IT TO A NUMBER AND PRESS EQUALS
//spacing?? 