

let addBtn = document.querySelector(`.addBtn`);
let container = document.querySelector(`.container`);

// toAdd c'est le nom de mon input, l'endroit où l'on nommera la nouvelle todo
let toAdd = document.getElementById(`toAdd`);
let afficher = document.getElementById(`afficher`)

document.addEventListener('submit', (e) => {
    e.stopPropagation()
    e.preventDefault()
})

let listTA;;

// j'ajoute un event listener sur le bouton
addBtn.addEventListener (`click`, addToDo);


if (!localStorage.getItem('list')) {
        localStorage.setItem('list', JSON.stringify([]))
    } else {
        
}

console.log(localStorage.getItem("list"));

console.log(container);

function afficherDatas(){
    let listTAb;
    listTAb = JSON.parse(localStorage.getItem('list'))
    if (listTAb.length >= 1) {
        afficher.innerText = ''
        for (let i = 0; i < listTAb.length; i++) {
            let p = document.createElement('p')
            let btn = document.createElement('button')
            p.setAttribute('accessKey', i)
            p.innerText = listTAb[i] + " "
            btn.classList = 'del'
            btn.setAttribute('accessKey', i)
            btn.innerText = "delete"
            afficher.append(p,btn)
        }
    } else {
        afficher.innerText = 'pas d elements'
    }
}

function addToDo () {
    let tab ;
    tab = JSON.parse(localStorage.getItem('list'))
    tab.push(toAdd.value)
    localStorage.setItem('list', JSON.stringify(tab))
    afficherDatas()
}

function del(id) {
    let tab
    tab= JSON.parse(localStorage.getItem('list'))
    tab.splice(id.target.accessKey, 1)
    localStorage.setItem('list', JSON.stringify(tab))
    afficherDatas()
}

afficherDatas()

document.addEventListener('click', (e)=>{
    e.target.matches('.del') ? 
    del(e) : 
    null
})