const grade = '50';
//case'lerin değeri sayı olsa bile string olmalı!!
switch(grade){
    case '50':
        console.log('You got an A!');
        break;
    case 'B':
        console.log('You got an B!');
        break;
    case 'C':
        console.log('You got an C!');
        break;
    case 'D':
        console.log('You got an D!');
        break;
    case 'E':
        console.log('You got an E!');
        break;
    default:        
        console.log('not a valid grade!');
       
}