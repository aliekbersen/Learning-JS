/*for(let i = 0; i < 5; i++){
    console.log('in loop', i);
}

console.log('loop finished');
const names = ['shaun', 'mario', 'luigi'];

for(let i = 0; i < names.length; i++){
    console.log(names[i]);
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}
let i = 0;

while(i < 5){
    console.log('in loop: ', i)
    i++;
}
while(i < names.length){
    console.log(names[i]);
    i++
}

let i = 3;

do{
    console.log('val of i is', i);
    i++;
}while(i < 5);*/

const age = 25;

if(age > 20){
    console.log("you'r over 20 years");
}

const ninjas = ['shaun', 'ryu', 'hurr', 'harrr' ];

if(ninjas.length > 4){
    console.log("that's a lot of ninjas");
}

const password = 'p@sss';

//istediğin kadar else if koyabilirsin
if(password >= 12){
    console.log('password is mighty strong!')
}
else if(password >= 8){
    console.log('password is long enough!');
}else {
    console.log('password is not long enough!');
}