const button = document.querySelector('button')

/*button.addEventListener('click', () =>{
    console.log('you clicked');
});  */

//const items = document.querySelectorAll('li');

button.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = 'something new';
  ul.append(li); //aşağıya ekler
  //ul.prepend(li); yukarıya ekler
});

//items.forEach(item => {
   // item.addEventListener('click', e => {
       // console.log('item clicked');
        //console.log(e)
        //console.log(e.target)  //Or console.log(item)
        // e.target.style.textDecoration = 'line-through';
       // e.target.remove();

   // });
//});

ul.addEventListener('click', e => {
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }
})