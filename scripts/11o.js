const strings1 = ['hello', 'egg', 'world', 'egg', 'good', 'search', 'fruit', 'search', 'hello', 'world', 'egg', 'juice'];
index = -1;

for (let i = 0; i < strings1.length; i++) {
  if (strings1[i] === 'search') {
    index = i;
    break;
  } 
}
console.log(index);


function findIndex(array, word) {
  index = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      index = i;
      break;
    }
  }    
  console.log(index);
}

findIndex(strings1, 'world');


function removeEgg(foods) {
  resultArray = [];
  let foodsNew = foods.slice();
  eggCounter = 0;
  foodsNew.reverse();
  for (let i = 0; i < foodsNew.length; i++) {
    if (foodsNew[i] === 'egg' && eggCounter < 2) {
      eggCounter++;
      continue;
    } else {
      resultArray.push(foodsNew[i]);
    }
  }  
  resultArray.reverse();
  return resultArray; 
}

console.log(strings1);
console.log(removeEgg(strings1));


for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 !== 0) {
    console.log('Fizz');
  } else if (i % 5 === 0 && i % 3 !== 0) {
    console.log('Buzz');
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz')
  } else {
    console.log(i);
  }
}


function findIndex(array, word) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      return i;
    }
  }    
  return -1;
}

function unique(array) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    const word = array[i];

    if (findIndex(newArray, word) === -1) {
      newArray.push(word);
    }
  }
  return newArray;
}

console.log(unique(strings1));