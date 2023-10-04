
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




let body = document.querySelector('body')

body.querySelector('button').addEventListener('click', () => {
        console.log('click');
        let rgb = `
                rgb(${
                        Math.floor(Math.random()*255)+1
                }, ${
                        Math.floor(Math.random()*255)+1
                }, ${
                        Math.floor(Math.random()*255)+1
                })
                `
        body.style.backgroundColor = rgb
        body.querySelector('h1').innerText = rgb
})

console.log(body.querySelector('button'));