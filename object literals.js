//object -> {},  array ->[]

let user = {
name: 'crystal',
age: 30,
email: 'crystal@gmail.com',
location: 'berlin',
blogs: ['why mac and cheese rules', '10 things to make with marmite'],
login: function (){
    console.log('the user logged in');
}

};

console.log(user.name);

user.age = 35;
console.log(user.age); //dot notation

user.name = 'chun';
console.log(user['name']); //bracket notation


console.log(typeof user);