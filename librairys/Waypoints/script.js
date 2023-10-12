document.querySelectorAll('section')
.forEach(element => {
    let randomColors1 = Math.floor(Math.random()*255)+1
    let randomColors2 = Math.floor(Math.random()*255)+1
    let randomColors3 = Math.floor(Math.random()*255)+1
    element.style.backgroundColor = `
    rgb(${randomColors1}, ${randomColors2}, ${randomColors3})
    `
});

let un = document.querySelector('.un')      //200vh
let deux = document.querySelector('.deux')  //100vh
const Un = new Waypoint({
    element: un,
    handler: function(Direction) {
        Direction === "down" ? alert('You have scrolled to a thing') :
        null
    }, 
    offset: '-105%'
})
const Deux = new Waypoint({
    element: deux,
    handler: function(Direction) {
        Direction === "up" ? alert('I told you !') :
        null
    }, 
    offset: '20px'
})


