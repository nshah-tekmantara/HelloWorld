var myString = 'This is a string with number 123 and 456 ';

console.log(myString);
console.log(
  myString.length,
  myString.charAt(1),
  myString.charCodeAt(0),
  'A'.charCodeAt(0) - myString.charCodeAt(0)
);

console.log(
  myString.codePointAt(0),
  myString.concat(' Adding another string'),
  myString.endsWith('string'),
  myString
);
var results = myString.matchAll(/\d{3}/gi);

console.log(myString.padEnd(50, '*'));

console.log(myString.padStart(50, '*'));

var creditCardNumber = '1234 5678 1234 5678';
console.log(
  creditCardNumber,
  'Credit Card Number',
  creditCardNumber.replaceAll(' ', '').slice(12).padStart(12, '*')
);

console.log(myString.repeat(3));

console.log(myString.search('[wt]'));
console.log(myString.search('Z'));

//word
console.log(myString.split(' ').forEach((e) => console.log(e)));
//Characters
console.log(myString.split('').forEach((e) => console.log(e)));

console.log(
  myString.startsWith('Hello')
    ? 'String starts with Hello!'
    : "String doesn't start with Hello!"
);
console.log(
  myString.startsWith('THIS')
    ? 'String starts with THIS!'
    : "String doesn't start with THIS!"
);
console.log(
  myString.startsWith('This')
    ? 'String starts with This!'
    : "String doesn't start with This!"
);

console.log(myString, myString.substring(5, 29));
console.log(myString.substring(4), myString.substring(4).length);
console.log(myString.substring(4).trim(), myString.substring(4).trim().length);

console.log(myString.valueOf());

console.log(myString, myString.trimStart(), myString.trimStart().length);
console.log(myString, myString.trimEnd(), myString.trimEnd().length);
console.log(myString, myString.trim(), myString.trim().length);

console.log(myString, myString.toLowerCase());
console.log(myString, myString.toUpperCase());

//remove all characters
console.log(myString.replace(/[a-zA-Z ]*/g, ''));
//remove all numbers
console.log(myString.replace(/[0-9]*/g, ''));
//remove all numbers
console.log(myString.replace(/\d*/g, ''));
// remove everything digit and non-digit characters -- Refer to Regex on MDN
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
console.log(myString.replace(/[\d*\D*]/g, '').length);
