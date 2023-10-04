


let firstBtn = document.querySelector('h1')
console.log(firstBtn.nextElementSibling);

firstBtn.nextElementSibling
.addEventListener('click', () =>{
        alert('Oh my God ! You again !!!')
})

firstBtn.nextElementSibling.nextElementSibling
.addEventListener('click', () =>{
        alert(`Thank God ! I thought you'd' never leave !`)
})
