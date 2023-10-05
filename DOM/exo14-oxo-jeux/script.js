let board = document.querySelector('.board')
let restart = document.querySelector('.restart')
let message = document.querySelector('.message')
let vs = document.querySelector('.vs')

let X = "X"
let X_player = ''
let X_score = 0

let O = "O"
let O_player = ''
let O_score = 0

let winner = ''
let signWinner = ''
let gameEnd = false
let choix = true

const winCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
];
const winCombinationsDefault = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
];
//je controlle les cellules avant insertion
function cellControll(cell, XO) {
        for (let a = 0; a < winCombinations.length; a++) {
                for (let b = 0; b < winCombinations[a].length; b++) {
                        if (cell == winCombinations[a][b]) {
                                winCombinations[a][b] = XO
                        }else{}
                }
                verifGame(winCombinations[a])
        }
}
//je cree le tableau de jeux
function cell(nbr=9) {
        for (let i = 0; i < nbr; i++) {
                let div = document.createElement('div')
                div.classList = 'cell'
                div.setAttribute('accessKey', i)
                board.append(div)
        }
        verifNamePlayers()
        msg(X_player, X)
}
//afficher les messages
function msg(player, sign) {
        if (gameEnd == false) {
                if (choix == true) {
                        message.innerText = `${X_player} "${X}" it's your turn`
                } else {
                        message.innerText = `${O_player} "${O}" it's your turn`
                }
        } else {}
}
//je rajoute chaque 'X' ou 'O' dans la case cliqué
const add = (e)=>{
        if (choix == true) {
                choix = false
                msg(O_player, O)
                if (e.target.innerText == '') {
                        e.target.innerText = X
                        cellControll(e.target.accessKey,X)
                } else {}
        } else {
                choix = true
                msg(X_player, X)
                if (e.target.innerText == '') {
                        e.target.innerText = O
                        cellControll(e.target.accessKey,O)
                } else {}
        }
}
//je verifie le croisement de lignes pour chaque joueur
function verifGame(param=[]) {
        if(param.every(ele => ele == X)) {
                message.innerText = `${X_player} "${X}" is the winner !!!`
                winner = X_player;
                signWinner = X
                gameEnd = true
                X_score++
                vs.previousElementSibling.innerText = `${X_player} ${X_score}`
                board.removeEventListener('click', add)
                document.querySelector('img')
                .setAttribute('src', './images/5a40fcf5-90d8-4cc0-b9db-8d10e8a03d14.gif')
        }else if(param.every(ele => ele == O)) {
                message.innerText = `${O_player} "${O}" is the winner !!!`
                winner = O_player;
                signWinner = O
                gameEnd = true
                O_score++
                vs.nextElementSibling.innerText = `${O_player} ${O_score}`
                board.removeEventListener('click', add)
                document.querySelector('img')
                .setAttribute('src', './images/5a40fcf5-90d8-4cc0-b9db-8d10e8a03d14.gif')
        }else{}
}
//je cree le riset
const reset = ()=>{
        board.addEventListener('click', add)
        document.querySelector('img')
        .removeAttribute('src')
        gameEnd = false
        board.querySelectorAll('div').forEach(ele =>{
                ele.innerText = ''
        })
        for (let a = 0; a < winCombinations.length; a++) {
                for (let b = 0; b < winCombinations[a].length; b++) {
                        winCombinations[a][b] = winCombinationsDefault[a][b]
                }
        }
        msg(winner,signWinner)
        winner = ''
        signWinner = ''
}
//je restaure le game
function verifNamePlayers() {
        if (X_player == '' || O_player == '') {
                X_player = prompt('Name of the player for the "X"').toUpperCase();
                O_player = prompt('Name of the player for the "O"').toUpperCase();
        } else {
        }
}


//je commence le jeux
verifNamePlayers(winner, signWinner)
cell()
board.addEventListener('click', add)
restart.addEventListener('click', reset)