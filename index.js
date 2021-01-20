// Problem 1
// What is the input to the program? 
  //  2
// What is the output of the program? 
  // '2: Another sheep jumps over the fence' 
  // '1: Another sheep jumps over the fence' 
  // 'All sheep jumped over the fence'
// What is the input to each recursive call? 
  //  n - 1
// What is the output of each recursive call?
  // 'n: Another sheep jumps over the fence' 

function countSheep(n) {
  if (n === 0) {
    return 'All sheep jumped over the fence';
  }

  return `${n}: Another sheep jumps over the fence\n${countSheep(n - 1)}`;
}

console.log('countSheep(2)', countSheep(2));


// Problem 2
// What is the input to the program? 
  // 10, 2 (n, p)
// What is the output of the program? 
  // 100
// What is the input to each recursive call? 
  // n, p - 1
// What is the output of each recursive call?
  // n * powerCalculator(n, p - 1)

function powerCalculator(n, p) {
  if (p === 1) {
    return n;
  } else if (p < 0) {
    return 'exponent should be >= 0';
  }

  return n * powerCalculator(n, p - 1)
}

console.log('powerCalculator(10, 2)', powerCalculator(10, 2))


// Problem 3
// What is the input to the program? 
  // 'string'
// What is the output of the program?
  // 'gnirts'
// What is the input to each recursive call?
  // shortenedString
// What is the output of each recursive call?
  // stringEndLetter + reverseString(shortenedString);

function reverseString(s) {
  if (s.length === 1) {
    return s;
  }

  const shortenedString = s.slice(0, s.length - 1);
  const stringEndLetter = s.slice(s.length - 1);

  return stringEndLetter + reverseString(shortenedString);
}

console.log(`reverseString('string')`, reverseString('string'))


// Problem 4
// What is the input to the program? 
  // 4
// What is the output of the program? 
  // 10
// What is the input to each recursive call?
  // nth - 1
// What is the output of each recursive call?
  // nth + calculateTriangularNumber(nth - 1)

function calculateTriangularNumber(nth) {
  if (nth === 1) {
    return 1;
  }
  
  return nth + calculateTriangularNumber(nth - 1);
}

console.log('calculateTriangularNumber(nth)', calculateTriangularNumber(4));


// Problem 5
// What is the input to the program?
  // '02/20/2020', '/'
// What is the output of the program?
  // ["02", "20", "2020"]
// What is the input to each recursive call?
  // string, splitCharacter, index, array
  // or string, splitCharacter, index + 1, array
// What is the output of each recursive call?
  // splitString(newString, splitCharacter, index, array);

function splitString(string, splitCharacter, index = 0, array = []) {
  let stringGroup = null;
  let newString = null;

  if (string.length === index + 1) {
    stringGroup = string.slice(0);
    array.push(stringGroup);
    return array;
  } else if (string.charAt(index) !== splitCharacter) {
    return splitString(string, splitCharacter, index + 1, array);
  } else if (string.charAt(index) === splitCharacter) {
    stringGroup = string.slice(0, index);
    newString = string.slice(index + 1);
    index = 0;
    array.push(stringGroup);
    return splitString(newString, splitCharacter, index, array);
  }
  ;
}

console.log(`splitString('02/20/2020', '/')`, splitString('02/20/2020', '/'));


// Problem 6
// What is the input to the program?
  // 7
// What is the output of the program?
  // 1, 1, 2, 3, 5, 8, 13
// What is the input to each recursive call?
  // n - 1
// What is the output of each recursive call?
  // an array


function getFibonacciSequence(n) {
  if (n === 2) {
    return [1, 1];
  } 

  const array = getFibonacciSequence(n - 1)
  array.push(array[n - 3] + array[n - 2]);

  return array;
}

console.log('getFibonacciSequence(7)', getFibonacciSequence(7))


// Problem 7
// What is the input to the program?
  // 5
// What is the output of the program?
  // 120
// What is the input to each recursive call?
  // n - 1
// What is the output of each recursive call?
  // a number

function getFactorial(n) {

  if (n === 1) {
    return 1;
  }

  const factorial = getFactorial(n - 1);

  return n * factorial;
}

console.log('getFactorial(5)', getFactorial(5)); 


// Problem 8
// What is the input to the program?
  // 0, 0
// What is the output of the program?
  // Directions to the exit
// What is the input to each recursive call?
  // A new column or row
// What is the output of each recursive call?
  // A string denoting the movement

getThroughMaze = (column, row) => {

  const mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
  ];
  
  const bigMaze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
  ];

  const maze = bigMaze;

  // Base case
  if (maze[column][row] === 'e') {
    console.log('End')
    return 'End';

    // If R is open
  } else if ((maze[column][row] === ' ') &&  ((maze[column][(row + 1)]) === ' ' || maze[column][(row + 1)] === 'e')) {
    console.log('R')
    maze[column][row] = null;
    const gtm = getThroughMaze(column, (row + 1))
    return 'R ' + gtm
    
    // If D is open
  } else if ((maze[column][row] === ' ') &&  ((maze[(column + 1)][row]) === ' ' || maze[(column + 1)][row] === 'e')) {
    console.log('D')
    maze[column][row] = null;
    const gtm = getThroughMaze((column + 1), row)
    return 'D ' + gtm

    // If L is open
  } else if ((maze[column][row] === ' ') &&  ((maze[column][(row - 1)]) === ' ' || maze[column][(row - 1)] === 'e')) {
    console.log('L')
    maze[column][row] = null;
    const gtm = getThroughMaze(column, (row - 1))
    return 'L ' + gtm

    // If U is open
  } else if ((maze[column][row] === ' ') &&  ((maze[(column - 1)][row]) === ' ' || maze[(column - 1)][row] === 'e')) {
    console.log('U')
    maze[column][row] = null;
    const gtm = getThroughMaze((column - 1), row)
    return 'U ' + gtm
  }
}



console.log('getThroughMaze(0, 0)', getThroughMaze(0, 0));


// Problem 9 (ASK)
// What is the input to the program?
  // 0, 0
// What is the output of the program?
  // Directions to each of the exits
// What is the input to each recursive call?
  // A new column or row
// What is the output of each recursive call?
  // A string denoting the movement

getThroughMaze = (column, row) => {
  const mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
  ];
  
  const bigMaze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
  ];

  const maze = bigMaze;

  // Base case
  if (maze[column][row] === 'e') {
    console.log('End')
    return 'End';

    // If R is open
  } else if ((maze[column][row] === ' ') &&  ((maze[column][(row + 1)]) === ' ' || maze[column][(row + 1)] === 'e')) {
    console.log('R')
    maze[column][row] = '1';
    const gtm = getThroughMaze(column, (row + 1))
    return 'R ' + gtm
    
    // If D is open
  } else if ((maze[column][row] === ' ') &&  ((maze[(column + 1)][row]) === ' ' || maze[(column + 1)][row] === 'e')) {
    console.log('D')
    maze[column][row] = '1';
    const gtm = getThroughMaze((column + 1), row)
    return 'D ' + gtm

    // If L is open
  } else if ((maze[column][row] === ' ') &&  ((maze[column][(row - 1)]) === ' ' || maze[column][(row - 1)] === 'e')) {
    console.log('L')
    maze[column][row] = '1';
    const gtm = getThroughMaze(column, (row - 1))
    return 'L ' + gtm

    // If U is open
  } else if ((maze[column][row] === ' ') &&  ((maze[(column - 1)][row]) === ' ' || maze[(column - 1)][row] === 'e')) {
    console.log('U')
    maze[column][row] = '1';
    const gtm = getThroughMaze((column - 1), row)
    return 'U ' + gtm
  }
}


// Problem 10 (ASK)
// What is the input to the program?
// What is the output of the program?
// What is the input to each recursive call?
// What is the output of each recursive call?




// Problem 11 (ASK)
// What is the input to the program?
// What is the output of the program?
// What is the input to each recursive call?
// What is the output of each recursive call?




// Problem 12 (ASK)
// What is the input to the program?
// What is the output of the program?
// What is the input to each recursive call?
// What is the output of each recursive call?

function representBinary(n) {
  return n.toString(2);
}

console.log(representBinary(0));
console.log(representBinary(3))