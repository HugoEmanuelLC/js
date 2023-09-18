// toFixed
// deux nrs apres la virgule

let myNumber = 5.379453;
console.log(myNumber.toFixed(2)); // Returns 5.37


//Il existe un moyen de convertir une chaîne en nombre :

console.log("---------------------------------")
let myString = "4.186";
console.log(myString + " -> " + typeof myString);

// parseFloat
console.log("---------------------------------")
myString = parseFloat(myString)
console.log(myString + " -> " + typeof myString); // Returns 4.786 (the number, not the string)

// ParseInt
console.log("---------------------------------")
console.log(parseInt(myString)); // Returns 4

//toString
console.log("---------------------------------")
let myNb = 1985
console.log(myNb + " -> " + typeof myNb);
myNb = myNb.toString();
console.log("---------------------------------")
console.log(myNb + " -> " + typeof myNb);