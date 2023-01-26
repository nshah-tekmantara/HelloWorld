console.log('Number properties');
console.log(
  'EPSILON - ',
  Number.EPSILON,
  'MAX_SAFE_INTEGER - ',
  Number.MAX_SAFE_INTEGER,
  'MAX_VALUE - ',
  Number.MAX_VALUE
);
console.log(
  'MIN_SAFE_INTEGER - ',
  Number.MIN_SAFE_INTEGER,
  'MIN_VALUE - ',
  Number.MIN_VALUE
);
console.log(
  'NEGATIVE_INFINITY - ',
  Number.NEGATIVE_INFINITY,
  'NaN - ',
  Number.NaN,
  'POSITIVE_INFINITY - ',
  Number.POSITIVE_INFINITY
);

var intNumber = 12345;
var floatNumber = 12345.6789;

console.log('toExponential');
console.log(intNumber, intNumber.toExponential(2));
console.log(intNumber, intNumber.toExponential(3));
console.log(floatNumber, floatNumber.toExponential(2));
console.log(floatNumber, floatNumber.toExponential(1));

console.log('toFixed');
console.log(intNumber, intNumber.toFixed(2));
console.log(intNumber, intNumber.toFixed(3));
console.log(floatNumber, floatNumber.toFixed(2));
console.log(floatNumber, floatNumber.toFixed(3));

console.log('toPrecision');
console.log(intNumber, intNumber.toPrecision(2));
console.log(intNumber, intNumber.toPrecision(3));
console.log(floatNumber, floatNumber.toPrecision(2));
console.log(floatNumber, floatNumber.toPrecision(3));

console.log('toLocaleString');
console.log(intNumber, intNumber.toLocaleString('en-US'));
console.log(floatNumber, floatNumber.toLocaleString('en-US'));
console.log(intNumber, intNumber.toLocaleString('fr'));
console.log(floatNumber, floatNumber.toLocaleString('fr'));

console.log('toString(base/radix)');
var intVariableToTestBase = 9;
console.log('9 in base 10 - ', intVariableToTestBase.toString());
console.log('9 in base 2 - ', intVariableToTestBase.toString(2));
console.log('9 in base 8 - ', intVariableToTestBase.toString(8));

console.log('valueOf');
console.log(intNumber.valueOf());
console.log(floatNumber.valueOf());
