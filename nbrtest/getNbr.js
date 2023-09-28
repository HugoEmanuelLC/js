let maxNbr;
let nbr;
let rand;
let test = false
maxNbr = prompt(`nrb maxs`)

do {
    if (Boolean(Number(maxNbr))) {
        rand = Math.floor(Math.random()*maxNbr)+1
        nbr = prompt(`trouve moi le nr magique`)
        test = true
    }else{
        maxNbr = prompt(`
        desole, ce n'est pas un nr
        nrb maxs`)
    }
} while (test == false);



if (nbr == rand) {
    console.log("felicitation");
}else{
    console.log("desole essaye encore");
}




