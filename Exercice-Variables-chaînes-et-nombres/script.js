const city = "Brussels";

let weatherCondition = "rainy";

let temperature = 24.16879;

const weatherText = `The weather in ${city} is ${weatherCondition} and it's ${parseInt(
  temperature
)}°C outside`;

console.log(weatherText); // Prints : The weather in Brussels is rainy and it's 24°C outside.



// const nom = prompt("What is your name?");
// const age = prompt("How old are you?");
// const coutry = prompt("where are you from?");
// alert(`Welcome ${nom.toUpperCase()} ${age} year old from, ${coutry.toUpperCase()} !`);



//calcul tva
// const tva = 1.21;
// let prix = prompt("Prix:");
// console.log(typeof prix);
// let prixAvecTva = tva*prix;
// console.log(typeof prixAvecTva);
// alert("Prix avec tva: " + prixAvecTva.toFixed(2));



//calcul surface cercle
// const pi = 3.14;
// let rayon = prompt("Rayon : ");
// let total = (rayon*rayon )*pi;
// alert(`Le Surface du cercle est de: ${total}cm`);



//calculatrice
// let choix = prompt("Quel calcul voulez vous choisir: SOMME, MULTIPLIER, SOUSTRAIRE, DIVISER") ;
// let a = Number;
// let b = Number;
// let encore = String;
// switch (choix) {
//   case "SOMME":
//       a = parseFloat(prompt("Premier numero!"))
//       b = parseFloat(prompt("Deuxieme numero!"))
//       alert(` La ${choix} est de ${a + b}`);
//       encore = prompt("voulez vous un autre calcul ? tapez OUI ou NON");
//       encore = encore.replaceAll(" ", "");
//       if (encore == "OUI") {
//         choix = prompt("Quel calcul voulez vous choisir: SOMME, MULTIPLIER, SOUSTRAIRE, DIVISER") ;
//       }else{
//         alert("Merci et à Bientot");
//         break;
//       }
    
//   case "MULTIPLIER":
//       a = parseFloat(prompt("Premier numero!"))
//       b = parseFloat(prompt("Deuxieme numero!"))
//       alert(` La ${choix} est de ${a * b}`);
//       encore = prompt("voulez vous un autre calcul ? tapez OUI ou NON");
//       encore = encore.replaceAll(" ", "");
//       if (encore == "OUI") {
//         choix = prompt("Quel calcul voulez vous choisir: SOMME, MULTIPLIER, SOUSTRAIRE, DIVISER") ;
//       }else{
//         alert("Merci et à Bientot");
//         break;
//       }
//     break;
//   case "SOUSTRAIRE":
//       a = parseFloat(prompt("Premier numero!"))
//       b = parseFloat(prompt("Deuxieme numero!"))
//       alert(` La ${choix} est de ${a - b}`);
//       encore = prompt("voulez vous un autre calcul ? tapez OUI ou NON");
//       encore = encore.replaceAll(" ", "");
//       if (encore == "OUI") {
//         choix = prompt("Quel calcul voulez vous choisir: SOMME, MULTIPLIER, SOUSTRAIRE, DIVISER") ;
//       }else{
//         alert("Merci et à Bientot");
//         break;
//       }
//     break;
//   case "DIVISER":
//       a = parseFloat(prompt("Premier numero!"))
//       b = parseFloat(prompt("Deuxieme numero!"))
//       alert(` La ${choix} est de ${a / b}`);
//       encore = prompt("voulez vous un autre calcul ? tapez OUI ou NON");
//       encore = encore.replaceAll(" ", "");
//       if (encore == "OUI") {
//         choix = prompt("Quel calcul voulez vous choisir: SOMME, MULTIPLIER, SOUSTRAIRE, DIVISER") ;
//       }else{
//         alert("Merci et à Bientot");
//         break;
//       }
//     break;

//   default:
//       alert("error!");
//     break;
// }



//null
// let exemple;
// console.log(exemple);
// exemple = "";
// console.log(exemple);