const now = new Date();

console.log(now);
console.log(typeof now);

//year, months, day, times
console.log('Year', now.getFullYear());
console.log('Month', now.getMonth());
console.log('Date', now.getDate());
console.log('Day', now.getDay());
console.log('Hours', now.getHours());
console.log('Minutes', now.getMinutes());
console.log('Seconds', now.getSeconds());

//timestamps
console.log('timestamp', now.getTime());

//date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());



