let cnt = document.querySelector('.container')
for (let i = 1; i <= 100; i++) {
    let boutons = document.createElement('button')
    boutons.innerText = `Je suis le bouton ${i}`
    cnt.appendChild(boutons)
}
console.log(cnt.childElementCount);

if (cnt.childElementCount >= 1) {
    setTimeout(() => {
        document.querySelector('h1').innerText = 'There are a lot of buttons here !'
    }, 2000);
} else {}


