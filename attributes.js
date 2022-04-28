const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.thenetninja.co.uk');
link.innerText = 'The Net Ninja Website';

const mssg = document.querySelector('p');

console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'success');

const title = document.querySelector('h1');

//title.setAttribute('style', 'margin: 50px;'); //üzerine yazar.
console.log(title.style);
console.log(title.style.color);

title.style.margin = '50px'; //üzerine yazmaz ekler.
title.style.color = 'crimson';//color değerinin üzerine yazar.
title.style.fontSize = '50px';//font-size olarak değilde camelcase olarak yazılır.