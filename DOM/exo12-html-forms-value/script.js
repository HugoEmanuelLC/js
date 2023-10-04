let form = document.querySelector('form')
form.addEventListener('click', (e) => {
        e.preventDefault()
})


let inputValue = ''
let h1 = document.querySelector('h1')
document.querySelector('input')
.addEventListener('keyup', (e) => {
        inputValue = document.querySelector('input').value
        h1.innerText = inputValue
        console.log(inputValue);
})