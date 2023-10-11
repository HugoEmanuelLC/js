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