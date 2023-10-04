let cntr = document.querySelector('.container')

for (let i = 1; i <= 15; i++) {
    
    let newImg = document.createElement('img')
    newImg.setAttribute('src', `
    https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png
    `) 
    cntr.appendChild(newImg) 
}


