/*
Source/Reference for more information: MDN (https://developer.mozilla.org/en-US/docs/Web/JavaScript)
ECMAScript epoch January, 1 1970 UTC

Try to save dates in UTC format and convert it based on timezone offset.

*/

var currentDate = new Date();
var dateFromParts = new Date(2022, 11, 31);
//Index is zero based on date for month so 11 will be a december. Format to construct a date(YYYY,MM,DD)

console.log('Current date in UTC :  ', currentDate);
console.log('Date fromParts : ', dateFromParts);
console.log('Current date in local time :  ', currentDate.toString());

console.log('Current date in milliseconds since epoch :  ', Date.now());

console.log('Current date in UTC string :  ', currentDate.toUTCString());

console.log('Extract date and time from current date : ', currentDate);
const [year, month, day, hour, minute, second, timezone] = [
  currentDate.getFullYear(),
  currentDate.getMonth(),
  currentDate.getDate(),
  currentDate.getHours(),
  currentDate.getMinutes(),
  currentDate.getSeconds(),
  currentDate.getTimezoneOffset(),
];

console.log('Current date year : ', year);
console.log('Current date month : ', month);
console.log('Current date day : ', day);
console.log('Current date hour : ', hour);
console.log('Current date minute : ', minute);
console.log('Current date seconds : ', second);
console.log(
  'Current date timezone(getTimezoneOffset()) difference in minutes : ',
  timezone,
  'In hours',
  (timezone / 60).toFixed(2)
);

console.log('Manipulate current date', currentDate);
console.log(
  'Add 5 days to current date',
  new Date(currentDate.setDate(currentDate.getDate() + 5))
);

console.log(
  'Add 2 months to current date',
  new Date(currentDate.setMonth(currentDate.getMonth() + 2))
);

console.log(
  'Add 2 years to current date',
  new Date(currentDate.setFullYear(currentDate.getFullYear() + 2))
);

console.log(
  'Add 2 hours to current date',
  new Date(currentDate.setHours(currentDate.getHours() + 2))
);

console.log('Convert dates in various timezone formats');

currentDateInLocalTimezone = new Date().toString();
console.log('Current date in EST timezone: ' + currentDateInLocalTimezone);

// Refer to MDN for more information
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
// Timezone strings - https://en.wikipedia.org/wiki/List_of_tz_database_time_zones

var localDateInUTC = new Date(currentDateInLocalTimezone);

var intlDateObj = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Asia/Kolkata',
});

var intlDateFullObj = new Intl.DateTimeFormat('en-US', {
  dateStyle: 'full',
  timeStyle: 'long',
  timeZone: 'Asia/Kolkata',
});

var istDate = intlDateObj.format(localDateInUTC);
var istDateTimeFull = intlDateFullObj.format(localDateInUTC);

console.log(
  'Local date time in UTC format - ',
  localDateInUTC,
  '\n Local time in IST date format - ',
  istDate,
  '\n Local date time in IST date time format - ',
  istDateTimeFull
);
