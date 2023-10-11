let openMenu = document.querySelector('.openMenu')
let closeMenu = document.querySelector('.closeMenu')
let navBar = document.querySelector('nav')
let page = document.getElementById('page')

let i_close = ``

openMenu.addEventListener('click' , (e)=>{
    console.log(closeMenu.querySelector('i'));
    navBar.style.left = '0px'
    page.style.right = '-90vw'
    openMenu.style.color = 'transparent'
    openMenu.style.zIndex = 10
    closeMenu.style.color = 'white'
    closeMenu.style.zIndex = 15
    closeMenu.querySelector('i').classList = 'fa-solid fa-xmark'
})

closeMenu.addEventListener('click' , (e)=>{
    console.log(e.target);
    navBar.style.left = '-90vw'
    page.style.right = '0px'
    closeMenu.style.color = 'transparent'
    closeMenu.style.zIndex = 10
    closeMenu.querySelector('i').classList.remove(['fa-solid', 'fa-xmark']) 
    openMenu.style.color = 'white'
    openMenu.style.zIndex = 15
})


let a_modal = document.querySelector('.a_modal')
let box_modal = document.querySelector('.box_modal')

let display = ()=>{
    if (box_modal.matches('.modal_end')) {
        box_modal.classList.remove('modal_end')
        box_modal.classList = 'box_modal modal_start'
    } else {
        box_modal.classList.remove('modal_start')
        box_modal.classList = 'box_modal modal_end'
    }
}

a_modal.addEventListener('click', display)
box_modal.addEventListener('click', display)