const form = document.querySelector('.signup-form');
//const username = document.querySelector('#username')

form.addEventListener('submit', e => {
    e.preventDefault();
    //console.log(username.value)
    console.log(form.username.value)
});

//testing RegEx

const username = 'shaunpp'
const pattern = /^[a-z]{6,10}$/;

/*let result = pattern.test(username);

if(result){
    console.log('test passed')
}else{
    console.log('test failed')
}*/
let result = username.search(pattern);
console.log(result);
