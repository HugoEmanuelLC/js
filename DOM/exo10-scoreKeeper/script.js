
// document.querySelectorAll('button')
// .forEach(ele => {
//         console.log(ele);
//         ele.addEventListener('click', () => {
//                 console.log(ele);
//                 ele.textContent == `Open tab` ?
//                 ele.innerText =`Close tab` :
//                 ele.innerText =`Open tab`;
//                 ele.nextElementSibling.classList.toggle('hidden')
//         })
// })




// let body = document.querySelector('body')

// body.querySelector('button').addEventListener('click', () => {
//         console.log('click');
//         let rgb = `
//                 rgb(${
//                         Math.floor(Math.random()*255)+1
//                 }, ${
//                         Math.floor(Math.random()*255)+1
//                 }, ${
//                         Math.floor(Math.random()*255)+1
//                 })
//                 `
//         body.style.backgroundColor = rgb
//         body.querySelector('h1').innerText = rgb
// })

// console.log(body.querySelector('button'));





// first
// second
// reset
// score
let body = document.querySelector('body')

let p1 = 0
let p2 = 0
function color(previous, next) {
        body.querySelector('#score').previousElementSibling
        .style.color = previous
        body.querySelector('#score').nextElementSibling
        .style.color = next
}
function verif() {
        if (p1+p2 <= 5) {
                if (p1 > p2) {
                        body.querySelector('#score').previousElementSibling
                        .textContent = p1
                        color('green', 'red')
                }else if(p1 < p2){
                        body.querySelector('#score').nextElementSibling
                        .textContent = p2
                        color('red', 'green')
                } else {
                        body.querySelector('#score').previousElementSibling
                        .textContent = p1
                        body.querySelector('#score').nextElementSibling
                        .textContent = p2
                        color('blue', 'blue')
                }
        }else{
                document.removeEventListener('click', startGame )
        }
}
function startGame(e) {
        // e.stopImmediatePropagation()
        switch (e.target.id) {
                case 'first':
                        p1++
                        verif()
                        
                        break;
                        
                case 'second':
                        p2++
                        verif()
                        break;
                        
                case 'reset':
                        p1 = 0
                        p2 = 0
                        verif()
                        break;
        
                default:
                        break;
        }
}
document.addEventListener('click', startGame )
document.querySelector('#reset').addEventListener('click', () => {
        document.addEventListener('click', startGame )
})