// question A
true && !false; //true
console.log(true && !false);

// question B
false && true; //false
console.log(false && true);

// question C
!false && !false; //true
console.log(!false && !false);

// question D
5 > 3 && !(2 > 1); //false
console.log(5 > 3 && !(2 > 1));

// question E
true && !(1 == "1"); //false
console.log(true && !(1 == "1"));

// question F
5 !== "5" || false; //true
console.log(5 !== "5" || false);



//---------------------------------------------------------------------------

console.log("//---------------------------------------------------------------------------")

// QUESTION 1
!0 && true; //true
console.log(!0 && true);

// QUESTION 2
const a = null;
const b = undefined;
const c = 4;

(!a && b) || c; //true
console.log((!a && b) || c);

// QUESTION 3

a == b && c; //true 
console.log(a == b && c);

// QUESTION 4

!b && "Hello" && c; //true
console.log(!b && "Hello" && c);