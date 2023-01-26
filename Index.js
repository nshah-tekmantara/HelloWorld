console.log('Simple Calculator');
var x = parseInt(Math.random(0, 1) * 100);
var y = parseInt(Math.random(0, 1) * x);

console.log('Simple Calculator for 2 random numbers ', x, y);

console.log('Add ', addNumbers(x, y));
console.log('Subtract ', subtractNumbers(x, y));
console.log('Multiply ', multiplyNumbers(x, y));
console.log('Divide ', divideNumbers(x, y));

function addNumbers(x, y) {
  return x + y;
}

function multiplyNumbers(x, y) {
  return x * y;
}

function subtractNumbers(x, y) {
  return x - y;
}

function divideNumbers(x, y) {
  if (y > 0) {
    return parseFloat((x / y).toFixed(2));
  } else {
    console.warn(
      "division can't be performed with zero or negative numbers",
      x,
      y,
      y < 1
    );
  }
}
