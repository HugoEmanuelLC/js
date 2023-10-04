
document.querySelectorAll('button')
.forEach(ele => {
        console.log(ele);
        ele.addEventListener('click', () => {
                console.log(ele);
                ele.textContent == `Open tab` ?
                ele.innerText =`Close tab` :
                ele.innerText =`Open tab`;
                ele.nextElementSibling.classList.toggle('hidden')
        })
})