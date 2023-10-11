let randomColors1 = Math.floor(Math.random()*255)+1
let randomColors2 = Math.floor(Math.random()*255)+1
let randomColors3 = Math.floor(Math.random()*255)+1
document.querySelector('body').style.backgroundColor = `
rgb(${randomColors1}, ${randomColors2}, ${randomColors3})`



let addImg = document.querySelector('.grid')
for (let i = 0; i < 9; i++) {
    let img = document.createElement('img')
    let div = document.createElement('div')
    let a = document.createElement('a')

    img.setAttribute('src', `https://picsum.photos/id/${i+2}/200/300`)
    div.classList = 'item'
    a.setAttribute('data-fslightbox', `gallery`)
    a.setAttribute('href', `https://picsum.photos/id/${i+2}/200/300`)

    a.appendChild(img)
    div.append(a)
    addImg.append(div)
}