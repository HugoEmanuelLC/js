//calculatrice
let choix = prompt("Quel calcul voulez vous choisir: SOMME, MULTIPLIER, SOUSTRAIRE, DIVISER") ;
let a = Number;
let b = Number;
let encore = String;
switch (choix) {
case "SOMME":
      a = parseFloat(prompt("Premier numero!"))
      b = parseFloat(prompt("Deuxieme numero!"))
      alert( `La ${choix} est de ${a + b}`);
      encore = prompt("voulez vous un autre calcul ? tapez OUI ou NON");
      encore = encore.replaceAll(" ", "");
      if (encore == "OUI") {
        choix = prompt("Quel calcul voulez vous choisir: SOMME, MULTIPLIER, SOUSTRAIRE, DIVISER") ;
      }else{
        alert("Merci et à Bientot");
        break;
      }

  case "MULTIPLIER":
      a = parseFloat(prompt("Premier numero!"))
      b = parseFloat(prompt("Deuxieme numero!"))
      alert( `La ${choix} est de ${a * b}`);
      encore = prompt("voulez vous un autre calcul ? tapez OUI ou NON");
      encore = encore.replaceAll(" ", "");
      if (encore == "OUI") {
        choix = prompt("Quel calcul voulez vous choisir: SOMME, MULTIPLIER, SOUSTRAIRE, DIVISER") ;
      }else{
        alert("Merci et à Bientot");
        break;
      }
    break;
  case "SOUSTRAIRE":
      a = parseFloat(prompt("Premier numero!"))
      b = parseFloat(prompt("Deuxieme numero!"))
      alert( `La ${choix} est de ${a - b}`);
      encore = prompt("voulez vous un autre calcul ? tapez OUI ou NON");
      encore = encore.replaceAll(" ", "");
      if (encore == "OUI") {
        choix = prompt("Quel calcul voulez vous choisir: SOMME, MULTIPLIER, SOUSTRAIRE, DIVISER") ;
      }else{
        alert("Merci et à Bientot");
        break;
      }
    break;
case "DIVISER":
      a = parseFloat(prompt("Premier numero!"))
      b = parseFloat(prompt("Deuxieme numero!"))
      alert( `La ${choix} est de ${a / b}`);
      encore = prompt("voulez vous un autre calcul ? tapez OUI ou NON");
      encore = encore.replaceAll(" ", "");
      if (encore == "OUI") {
        choix = prompt("Quel calcul voulez vous choisir: SOMME, MULTIPLIER, SOUSTRAIRE, DIVISER") ;
      }else{
        alert("Merci et à Bientot");
        break;
      }
    break;

  default:
      alert("error!");
    break;
}