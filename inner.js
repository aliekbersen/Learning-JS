const para = document.querySelector('p');

console.log(para.innerText);
para.innerText = 'awesome';


const para = document.querySelectorAll('p');

paras.forEach(para => {
    console.log(para.innerText);
    para.innerText += ' new text';
});

const para = document.querySelector('.content');

console.log(innerHTML);

content.innerHTML = '<h2>this is new text</h2>'

const content = document.querySelector('.content')

const people = ['mario', 'luigi', 'phon'];

people.forEach(person => {
    content.innerHTML +=` <p>${person}</p>; `
})