

// document.querySelectorAll('section')
// .forEach(element => {
//     let randomColors1 = Math.floor(Math.random()*255)+1
//     let randomColors2 = Math.floor(Math.random()*255)+1
//     let randomColors3 = Math.floor(Math.random()*255)+1
//     element.style.backgroundColor = `
//     rgb(${randomColors1}, ${randomColors2}, ${randomColors3})
//     `
// });


let addImg = document.querySelector('.swiper-wrapper')
for (let i = 0; i < 9; i++) {
    let img = document.createElement('img')
    let div = document.createElement('div')

    div.classList = 'swiper-slide'
    img.setAttribute('src', `https://picsum.photos/id/${i+2}/200/300`)

    div.append(img)
    addImg.append(div)
}


new Swiper('.swiper', {
//     // //Optional parameters
    effetct: "fade",
    slidesPerView: 3.5,
    spaceBetween: 10,
    // profondeur: 100,
    // direction: 'vertical',
    loop: true,
    // lazyloading: true,
    // autoplay: {
    //     delay: 1000,
    //     disableOnInteraction: false,
    // },
//     // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        // type: 'fraction'
        // formatFractionTotal: 3.5
    },
//     // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
//     // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});