

let numberMaximun = prompt("when many numbers ?"); //string
numberMaximun = parseInt(numberMaximun); //number
console.log(typeof numberMaximun);
console.log(numberMaximun);

let magicNumber = Number;

while (Number.isNaN(numberMaximun) == true) {
    numberMaximun = prompt("when many numbers ?")
    numberMaximun = parseInt(numberMaximun);
}
magicNumber = Math.floor(Math.random() * numberMaximun) + 1;

let myNumber = prompt('find the number :-P')
myNumber = parseInt(myNumber)

let winer = false;

do {
    while (Number.isNaN(numberMaximun) == true) {
        myNumber = prompt('find the number :-P')
        myNumber = parseInt(myNumber)
    }
    if (myNumber > magicNumber ) {
        console.log("plus petit")
        alert("too big :-D")
        myNumber = prompt('find the number :-P')
        myNumber = parseInt(myNumber)
    }else if(myNumber < magicNumber ) {
        console.log("plus grand")
        alert("too small :-\ ")
        myNumber = prompt('find the number :-P')
        myNumber = parseInt(myNumber)
    }else{
        winer = true
        break
    }
} while (winer == false);

alert("congratulations, yoouu wiiiiiiiiner")