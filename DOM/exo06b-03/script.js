

let ul = document.querySelector('ul')

ul.querySelectorAll('li:nth-child(odd)')
.forEach((e) => {
    e.classList.remove('highlight') 
    console.log(e);
})

ul.querySelectorAll('li:nth-child(even)')
.forEach((e) => {
    e.classList.add('highlight') 
    console.log(e);
})