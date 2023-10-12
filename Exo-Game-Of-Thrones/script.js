






// let target ;
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

// let bloc_txt = document.querySelector('.bloc_text')
let swiper_wrapper = document.querySelector('.bloc_text .swiper-wrapper')
// console.log(swiper_wrapper);
fetch('./dates.json', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
})
.then(response => response.json())
.then(datas => {
    // console.log(datas);
    datas.forEach(element => {
        // console.log(element.name);
        let div = document.createElement('div')
        let h2 = document.createElement('h2')
        let h3 = document.createElement('h3')
        let p = document.createElement('p')

        div.classList = 'swiper-slide'

        h2.innerText = element.name
        h3.innerText = element.familly
        p.innerText = element.description

        div.append(h2,h3,p)
        // console.log(div);
        swiper_wrapper.appendChild(div)
    });
})






setTimeout(() => {
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        // spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
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
    // target = document.querySelector('.swiper-slide-thumb-active')
    // if (target) {
    //     console.log('existe');
    //     target.querySelector('.div_float').style.opacity = '0'
    // } else {
    //     console.log('nooooo')
    // }
}, 500);







document.addEventListener('click', (e) => {
    setTimeout(() => {

        // document.querySelector('.swiper-slide-next .div_float').style.opacity = 0.75
        // document.querySelector('.swiper-slide-thumb-active .div_float').style.opacity = 0
        // document.querySelector('.swiper-slide-pres .div_float').style.opacity = 0.75

        // document.querySelectorAll('.div_float').forEach(ele => {
        //     console.log(ele.style.opacity === '0');
        //     if (ele.style.opacity === '0') {
                
        //     } else {
                
        //     }
        // })
        
        // if () {
        //     document.querySelector('.swiper-slide-thumb-active .div_float').style.opacity = '0'
        // } else {
        //     document.querySelector('.div_float')
        // }
    }, 200);
} )