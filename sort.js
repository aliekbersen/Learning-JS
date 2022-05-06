//example 1
const names = ['mairo', 'luigi', 'shaun', 'yoshi', 'chun'];


//names.sort();
names.reverse();
console.log(names);
//example 2
const scores = [10, 50, 20, 5, 35, 70, 45];

//scores.sort();
//console.log(scores);
scores.sort((a,b) => b - a);
//example 3
const players = [
    {name: 'mario', score: 20},
    {name: 'luigi', score: 10},
    {name: 'chun', score: 50},
    {name: 'yosh', score: 30},
    {name: 'shaun', score: 70}
];

players.sort((a,b) => a.score - b.score);

console.log(players);