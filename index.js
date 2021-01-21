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


// Problem 8 & 9 (ASK)
// What is the input to the program?
  // 0, 0
// What is the output of the program?
  // Directions to each of the exits
// What is the input to each recursive call?
  // A new column or row
// What is the output of each recursive call?
  // A string denoting the movement

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

  let currentPathNum = 0;
  let totalPathNum = 0;
  const routes = [[]];

getThroughMaze = (column, row) => {

  const maze = bigMaze;

  const currentSpace = maze[column][row];
  const changeCurrentSpaceToOne = () => maze[column][row] = '1';

  const nextRowRight = row + 1;
  const nextColumnDown = column + 1;
  const nextRowLeft = row - 1;
  const nextColumnUp = column - 1;

  const onESpace = currentSpace === 'e';
  const onBlankSpace = currentSpace === ' ';
  const onUsedSpace = currentSpace === '1';

  // Check next spaces for 'e'
  const checkIfRightIsE = () => {
    if (maze[column][nextRowRight] !== undefined) {
      return !!(maze[column][nextRowRight] === 'e');
    }
  }
  const checkIfDownIsE = () => {
    if (maze[nextColumnDown] !== undefined) {
      return !!(maze[nextColumnDown][row] === 'e');
    }
  }
  const checkIfLeftIsE = () => {
    if (maze[column][nextRowLeft] !== undefined) {
      return !!(maze[column][nextRowLeft] === 'e');
    }
  }
  const checkIfUpIsE = () => {
    if (maze[nextColumnUp] !== undefined) {
      return !!(maze[nextColumnUp][row] === 'e');
    }
  }

  // check next spaces for open
  const checkIfRightIsOpen = () => {
    if (maze[column][nextRowRight] !== undefined) {
      return !!(maze[column][nextRowRight] === ' ');
    }
  }
  const checkIfDownIsOpen = () => {
    if (maze[nextColumnDown] !== undefined) {
      return !!(maze[nextColumnDown][row] === ' ');
    }
  }
  const checkIfLeftIsOpen = () => {
    if (maze[column][nextRowLeft] !== undefined) {
      return !!(maze[column][nextRowLeft] === ' ');
    }
  }
  const checkIfUpIsOpen = () => {
    if (maze[nextColumnUp] !== undefined) {
      return !!(maze[nextColumnUp][row] === ' ');
    }
  }

  // check each spaces for used
  const checkIfRightIsUsed = () => {
    if (maze[column][nextRowRight] !== undefined) {
      return !!(maze[column][nextRowRight] === '1');
    }
  }
  const checkIfDownIsUsed = () => {
    if (maze[nextColumnDown] !== undefined) {
      return !!(maze[nextColumnDown][row] === '1');
    }
  }
  const checkIfLeftIsUsed = () => {
    if (maze[column][nextRowLeft] !== undefined) {
      return !!(maze[column][nextRowLeft] === '1');
    }
  }
  const checkIfUpIsUsed = () => {
    if (maze[nextColumnUp] !== undefined) {
      return !!(maze[nextColumnUp][row] === '1');
    }
  }

  // check all paths for e at once
  const checkAllPathsForE = () => {
    const ePaths = [];

    if (checkIfRightIsE()) {
      ePaths.push('R');
    }
    if (checkIfDownIsE()) {
      ePaths.push('D');
    }
    if (checkIfLeftIsE()) {
      ePaths.push('L');
    }
    if (checkIfUpIsE()) {
      ePaths.push('U');
    }

    return ePaths;
  }

  // check all paths for open at once
  const checkAllPathsForOpen = () => {
    const openPaths = [];

    if (checkIfRightIsOpen()) {
      openPaths.push('R');
    }
    if (checkIfDownIsOpen()) {
      openPaths.push('D');
    }
    if (checkIfLeftIsOpen()) {
      openPaths.push('L');
    }
    if (checkIfUpIsOpen()) {
      openPaths.push('U');
    }

    return openPaths;
  }

  // check all paths for used at once
  const checkAllPathsForUsed = () => {
    const usedPaths = [];

    if (checkIfRightIsUsed()) {
      usedPaths.push('R');
    }
    if (checkIfDownIsUsed()) {
      usedPaths.push('D');
    }
    if (checkIfLeftIsUsed()) {
      usedPaths.push('L');
    }
    if (checkIfUpIsUsed()) {
      usedPaths.push('U');
    }

    return usedPaths;
  }

  const moveCurrentPosition = (movementDirection) => {
    if (movementDirection === 'R') {
      return getThroughMaze(column, nextRowRight);
    } else if (movementDirection === 'D') {
      return getThroughMaze(nextColumnDown, row);
    } else if (movementDirection === 'L') {
      return getThroughMaze(column, nextRowLeft);
    } else if (movementDirection === 'U') {
      return getThroughMaze(nextColumnUp, row);
    }
  }

  if (onESpace) {
    if (currentPathNum === totalPathNum) {
      routes.pop();
      console.log(routes);
      return routes;
    } else {
      currentPathNum++;
      routes[currentPathNum] = [];
      getThroughMaze(0, 0);
    }
  }

  if (onBlankSpace || onUsedSpace) {
    const ePaths = checkAllPathsForE();

    if (ePaths.length === 0) {
      const blankPaths = checkAllPathsForOpen();

      if (blankPaths.length === 0) {
        const usedPaths = checkAllPathsForUsed();

        if (usedPaths.length !== 0) {
          routes[currentPathNum].push(usedPaths[0])
          changeCurrentSpaceToOne();
          moveCurrentPosition(usedPaths[0]);
        }

      } else if (blankPaths.length > 1) {
        totalPathNum++;

        routes[currentPathNum].push(blankPaths[0]);
        changeCurrentSpaceToOne();
        moveCurrentPosition(blankPaths[0]);
      } else {
        routes[currentPathNum].push(blankPaths[0]);
        changeCurrentSpaceToOne();
        moveCurrentPosition(blankPaths[0]);
      }
    } else {
      routes[currentPathNum].push(ePaths[0]);
      moveCurrentPosition(ePaths[0]);
    }
  }
}

console.log('getThroughMaze(0, 0)', getThroughMaze(0, 0));


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

function turnBinary(num){
  if(num >= 1) {
    return turnBinary(Math.floor(num/2))+(num % 2);
  }
  return '';
}

console.log(representBinary(100))
console.log(turnBinary(100));