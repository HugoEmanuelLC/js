// const mainHeading = document.getElementById("main-heading");

// mainHeading.style.color = 'red' 

// const heading = document.querySelector("#main-heading");

// const container  = document.querySelector(".container");
// container.style.backgroundColor="red"

// const list = document.querySelector("ul");

// document.querySelectorAll('li').forEach((e)=>{
//     console.log(e);
//     if (e.className == 'list-item4') {
//         e.style.color = 'red'
//         let y = document.createElement('span')
//         y.innerText = ' hall'
//         y.className = 'sp'
//         e.appendChild(y)
//         e.childNodes[1].style.color ="black"
//         console.log(e.childNodes);
//     }else if(e.lastChild == true){
//         e.style.color = 'gold'
//     }
//     else {
//         e.style.color = 'green'
//     }
// })







//EXO 04
let liFirst = document.querySelector('.container li:first-child')
liFirst = liFirst.textContent
console.log(liFirst);
let liNew = document.createElement('li')
liNew.innerText = liFirst
document.querySelector('.container ul').appendChild(liNew)
console.log(liNew);

let allLi = document.querySelectorAll('.container ul li')
allLi.forEach((e) => {
    console.log(e);
    e.style.color = 'purple'
})

let lastLi = document.querySelector('li:last-child')
lastLi.style.color = 'gold'

let spanLi4 = document.createElement('span')
spanLi4.innerText = ' Hall'
spanLi4.style.color = 'red'
let li4 = document.querySelector('li:nth-child(4)')
li4.innerText = 'Annie'
li4.appendChild(spanLi4)


// console.log(document.querySelector('li:first-child').classList);
let first_li = document.querySelector('li:first-child')
first_li.classList.add("hello")
first_li.setAttribute('id','titre')
first_li.setAttribute('data-direction','top')
console.log(first_li);
first_li.removeAttribute('data-direction')
console.log(first_li);


// let ull = document.querySelectorAll('li')
// console.log(Array.from(ull).filter(ele => ele));

// console.log(h1.classList.contains("hello")); // Returns true
// console.log(h1.classList.contains("two")); // Returns false

let darkLight = document.querySelector('body')
let btn = document.getElementById('btn')
// console.log(darkLight);
// darkLight.classList.toggle("red")
btn.addEventListener('click', function() {
    darkLight.classList.toggle('red');
    darkLight.classList == 'red' ? 
        btn.innerText = 'Light' :
        btn.innerText = ' Dark'
    // console.log('click');
})


