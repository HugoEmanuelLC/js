let form = document.querySelector('form')
let usr="";
let psw="";
let eml= /^\S+@\S+\.\S+$/;
let msgUsr = document.querySelector('.msgUsr')
let msgEmail = document.querySelector('.msgEmail')
let msgPswd = document.querySelector('.msgPswd')
let msgPswdVerif = document.querySelector('.msgPswdVerif')

function minMaxValues() {
        if (form.username.value.length > 10) {
                msgUsr.style.color = 'red'
                msgUsr.innerText = `Cannot exceed 10 characters`
        }else if(form.username.value.length < 5){
                msgUsr.style.color = 'red'
                msgUsr.innerText = `Must be at least 5 characters`
        }else{
                msgUsr.style.color = 'green'
                msgUsr.innerText = `The data has been recorded successfully`
        }

        if (form.password.value.length < 8 ) {
                msgPswd.style.color = 'red'
                msgPswd.innerText = `Must be at least 8 characters`
        } else {
                msgPswd.style.color = 'green'
                msgPswd.innerText = `The data has been recorded successfully`
        }

        if (form.password_verif.value != form.password.value) {
                msgPswdVerif.style.color = 'red'
                msgPswdVerif.innerText = `different passwords`
        } else {
                msgPswdVerif.style.color = 'green'
                msgPswdVerif.innerText = `passwords successfully`
        }
}
function verifInputsEmptys() {
        let testEmpty = 3
        document.querySelectorAll('input')
        .forEach(ele => {
                if(ele.value == '') {
                }else{
                        testEmpty--
                }

                if (testEmpty == 0) {
                        form.querySelector('button').classList.remove('display_none')
                }
        })
}
function verifEmail() {
        if (form.email.value.match(eml) != null) {
                msgEmail.style.color = 'green'
                msgEmail.innerText = `email valide`
        } else {
                msgEmail.style.color = 'red'
                msgEmail.innerText = `email not valide!`
        } 
}
form.addEventListener('submit', (e) => {
        e.preventDefault()
})



document.querySelector('.display_none')
.addEventListener('click', (e) => {
        console.log({
                user: form.username.value,
                email: form.email.value,
                paswr: form.password.value,
                psw_verif: form.password_verif.value
        });
        alert('Merci et bonne continuation !!')
})


// show the button submit
document.addEventListener('keyup' , (e) => {
        verifInputsEmptys()
        minMaxValues()
        verifEmail()
        
})