//OR -> ||  AND-> &&

const password = 'p@ss';
//password.includes('@') && password.length >= 5 -> Tek bir condition ifade eder!!
if(password.length >= 12 && password.includes('@')){
    console.log('that password is mighty strong');
}else if(password.length >= 8 || password.includes('@') && password.length >= 5){
    console.log('that password is strong enough');
}else{
    console.log('that password is not strong enough')
}