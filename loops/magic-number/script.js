

let numberMaximun = prompt("when many numbers ?"); //string
console.log(typeof numberMaximun);
console.log(numberMaximun);

let magicNumber = Number;

while (Boolean(Number(numberMaximun)) == false) {
    alert("you must only use numbers")
    numberMaximun = prompt("you play with so many numbers ?")
}
magicNumber = Math.floor(Math.random() * numberMaximun) + 1;

let myNumber = prompt('find the number :-P')

let winer = false;

do {
    while (Boolean(Number(myNumber)) == false) {
        alert("you must only use numbers")
        myNumber = prompt('find the number :-P')
    }
    if (numberMaximun >= 1) {
        console.log(`numberMaximun ${numberMaximun}`);
        if (myNumber > magicNumber ) {
            console.log("plus petit")
            alert("too big :-D")
            myNumber = prompt('find the number :-P')
        }else if(myNumber < magicNumber ) {
            console.log("plus grand")
            alert("too small :-\ ")
            myNumber = prompt('find the number :-P')
        }else{
            winer = true
            break
        }
    }else{
        numberMaximun = prompt(`
        il faut choisir seulement plus grand que 0 
        give a numbers :
        `);
    }
} while (winer == false);

alert("congratulations, yoouu wiiiiiiiiner")