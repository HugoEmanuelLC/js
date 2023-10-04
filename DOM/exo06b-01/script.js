const bold = document.querySelector("b");
// console.log(bold);
bold.parentElement.parentElement.parentElement.parentElement.style.backgroundColor = 'beige'
bold.style.color = 'red'
bold.parentElement.parentElement.parentElement.style.backgroundColor = 'darkblue'
bold.parentElement.parentElement.parentElement.style.color = 'white'

bold.parentElement.parentElement.parentElement.querySelector('a').style.color = 'pink'

bold.parentElement.parentElement.parentElement.parentElement
.querySelectorAll('.part-1 .container li').forEach(ele => {
    ele.style.color = 'orange';
    ele.querySelector('a').style.color = 'green'
})

bold.parentElement.parentElement.parentElement.parentElement
.querySelector('.part-1 .container h1').style.textTransform = 'uppercase'

console.log(bold.parentElement.parentElement.parentElement.parentElement.querySelector('.part-1 .container h1'));