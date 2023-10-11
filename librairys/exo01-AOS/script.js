

document.querySelectorAll('section')
.forEach(element => {
    let randomColors1 = Math.floor(Math.random()*255)+1
    let randomColors2 = Math.floor(Math.random()*255)+1
    let randomColors3 = Math.floor(Math.random()*255)+1
    element.style.backgroundColor = `
    rgb(${randomColors1}, ${randomColors2}, ${randomColors3})
    `
});