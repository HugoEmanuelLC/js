let tabObjsImgs = [
    {name: "", img: "./images/clients/Google-Logo.svg"},
    {name: "", img: "./images/clients/Airbnb-Logo.svg"},
    {name: "", img: "./images/clients/Uber-Eats-Logo.svg"},
    {name: "", img: "./images/clients/Amazon-Logo.svg"},
    {name: "", img: "./images/clients/Stellantis-Logo.svg"},
    {name: "", img: "./images/clients/Walibi-Belgium-Logo.svg"},
    {name: "", img: "./images/clients/redbullenergydrink.svg"},
    {name: "", img: "./images/clients/euro-millions-Logo.svg"}
]

let bloc_gallery = document.querySelector('.slider_clients .swiper-wrapper')
for (let i = 0; i < tabObjsImgs.length; i++) {
    let swiper_slide = document.createElement('div')
    let img = document.createElement('img')

    swiper_slide.classList = 'swiper-slide'
    img.setAttribute('src', `${tabObjsImgs[i].img}`)
    swiper_slide.append(img)
    bloc_gallery.append(swiper_slide)
}


setTimeout(() => {
    var swiper = new Swiper(".slider_clients .slides", {
        loop: true,
        watchSlidesProgress: true,
        slidesPerView: 4,
        spaceBetween: 60,
        autoplay: {
            delay: 2000,
        },
    });
}, 500);

var bloc_imgs = new Swiper(".blocs .bloc_imgs", {
    // loop: true,
    // slidesPerView: 7,
    pagination: {
        // el: ".gallery_comments .swiper-pagination",
        clickable: true,
    },
});
// GALLERY TEXT
var comments = new Swiper(".blocs .gallery_comments", {
    loop: true,
    spaceBetween: 10,
    // navigation: {
    //     nextEl: ".blocs .swiper-button-next",
    //     prevEl: ".blocs .swiper-button-prev",
    // },
    pagination: {
        // el: "",
        clickable: true,
    },
    thumbs: {
        swiper: bloc_imgs,
    },
});




    // BIBLIOTHEQUE AOS ANIMATION "data-aos"
    AOS.init({
        duration: 1500,
        delay: 600,
    });