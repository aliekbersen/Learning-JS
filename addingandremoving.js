/*const content = document.querySelector('p');

console.log(content.classList);
content.classList.add('error');
content.classList.remove('error');
content.classList.add('succes');   */
const paras = document.querySelectorAll('p');

paras.forEach(p => {
    if(p.textContent.includes('error')){ 
       p.classList.add('error');
    }

    if(p.textContent.includes('success')){
        p.classList.add('success');
    }
});

const title = document.querySelector('.title');

title.classList.toggle('test'); //test classı oluşturur ve ekler.
title.classList.toggle('test'); //2. yazımda test classını siler.

