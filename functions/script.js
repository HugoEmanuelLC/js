// let varTest = "var test"
// function lamyFunctionName(txt){
//     return console.log("text test " , txt, varTest);
// }

// lamyFunctionName("do")
// lamyFunctionName("re")
// lamyFunctionName("mi")
// console.log(lamyFunctionName);
// console.log(parseInt);

// let test = ['eeeee',"tttttttttt"]
// console.log(test.fill);




// let myFnct = function(){
//     return "var fnct"
// }
// JEUX DES DÉS
// function dice(faces = 6, times = 4) {
//     while (times >= 1) {
//         console.log(Math.floor(Math.random()*faces)+1);
//         times--
//     }
// }
// dice()





//AFFICHER TEXT AUTANT DE FOIX que nous voulons la répéter.
// function repeat(params, times) {
//     let display = "";
//     if (Boolean(Number(times))) {
//         while (times >= 1) {
//             display += `${params}|`;
//             times--
//         }
//         return display
//     }else{
//         return "le deuxieme parametre n'est pas un nombre"
//     }
// }
// console.log(repeat("$", "5dd"));




//présente le nom complet, le nom étant une initiale.
// function greet(firstN, lastN){
//     return '"This is '+ firstN + ' ' + lastN[0] + '."'
// }
// console.log(greet("Marlon", "Brandon"));





//somme de deux nombres, vérifier si les paramètres sont des nombres réels
// function sum(nbr1, nbr2) {
//     if (Boolean(Number(nbr1)) && Boolean(Number(nbr2))) {
//         return nbr1 + nbr2;
//     }else{
//         return "un ou plusieurs parametres ne sont pas des nombres"
//     }
// }
// const myVariable = sum(3, "d");
// console.log(myVariable);





//Exercice mental
//hello world 4 -> ma reponse etait ok
// function logs() {
//     console.log("Hello");
//     console.log("World");
//     return 4;
//     console.log("Goodbye");
//     console.log("World");
// }
// const myVariable = logs();
// console.log(myVariable);





//en fonction de la météo, je dois utiliser un short ou non.
// function isShortWeather(params) {
//     if (Boolean(Number(params))) {
//         if (params >= 24) {
//             console.log(false);
//         }else{
//             console.log(true);
//         }
//     }else{
//         console.log("Desole mais cette function ne travaille qu'avec des numeros");
//     }    
// }
// isShortWeather("ddd");





//La fonction doit renvoyer le dernier élément du tableau (sans supprimer l'élément)
// function lastElement(params) {
//     if(params.length ){
//         console.log(params[params.length -1]);
//     }else{
//         console.log("tableau vide");
//     }
// }
// lastElement([])



//accepte un argument de chaîne et renvoie une nouvelle chaîne avec la première lettre en majuscule
// function capitalize(params) {
//     // let firstWord = params[0].toUpperCase();
//     // let word = params.slice(1,params.length-1);
//     // console.log(firstWord+word);
//     let word = params;
//     console.log('"'+word.charAt(0).toUpperCase() + word.slice(1)+'"');
// }
// capitalize("eggplant");




//function de calcul des numeros d'un tableau
// function sumArray(params) {
//     let element = 0;
//     for (let i = 0; i < params.length; i++) {
//         element += params[i]
//     }
//     console.log(element)
// }
// sumArray([1, 2, 3]);




//
function returnDay(params) {

    let week= []


}
returnDay(5);