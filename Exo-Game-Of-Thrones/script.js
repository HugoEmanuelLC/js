
//creation des images
let bloc_gallery = document.querySelector('.bloc_gallery .swiper-wrapper')
for (let i = 0; i < 9; i++) {
    let bloc_img = document.createElement('div')
    let img = document.createElement('img')
    let div_float = document.createElement('div')

    bloc_img.classList = 'bloc_img swiper-slide'
    img.setAttribute('src', `./images/image-${i+1}.png`)
    div_float.classList = "div_float"
    bloc_img.append(div_float)
    bloc_img.append(img)
    bloc_gallery.append(bloc_img)
}




//creation des texts de chaque image
let swiper_wrapper = document.querySelector('.bloc_text .swiper-wrapper')
fetch('./dates.json', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
})
.then(response => response.json())
.then(datas => {
    datas.forEach(element => {
        let div = document.createElement('div')
        let h2 = document.createElement('h2')
        let h3 = document.createElement('h3')
        let p = document.createElement('p')

        div.classList = 'swiper-slide'

        h2.innerText = element.name
        h3.innerText = element.familly
        p.innerText = element.description

        div.append(h2,h3,p)
        swiper_wrapper.appendChild(div)
    });
})






setTimeout(() => {
    var swiper = new Swiper(".mySwiper", {
        // loop: true,
        slidesPerView: 3.4,
    });
    var swiper2 = new Swiper(".mySwiper2", {
        loop: true,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
}, 500);