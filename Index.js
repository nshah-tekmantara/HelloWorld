console.log('Hello World');

console.log(addNumbers(100, 200));

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
  if (y < 1) {
    return x / y;
  } else {
    console.warn("division can't be performed with zero or negative numbers");
  }
}
