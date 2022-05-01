const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.questions');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();


let score = 0;

const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

//check answers
userAnswers.forEach((answer, index) =>{
    if(answer === correctAnswers[index]){
        score += 25;
    }
});
//show result and animate
scrollTo(0, 0);


let output = 0;
const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`
    if(output === score){
        clearInterval(timer);
    }else{
        output++;
    }
}, 10)

});