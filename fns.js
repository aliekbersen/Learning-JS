const now = new Date();

console.log(dateFns.format(now, 'YYYY'));
console.log(dateFns.format(now, 'MMM'));
console.log(dateFns.format(now, 'dddd'));
console.log(dateFns.format(now, 'Do'));
console.log(dateFns.format(now, 'dddd Do MMM YYYY'));


const before = new Date('February 1 2019 12:00:00')

console.log(dateFns.distanceInWords(now, before, {addSuffix: true}));
