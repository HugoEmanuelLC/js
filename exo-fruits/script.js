let fruits = prompt("what is your favorite fruit ? ");
let colorGrape;

switch (fruits) {
    case "Bananas":
    case "bananas":
        alert("I like bananas as well ;)");
        break;
    case "strawberry":
        alert("I LOVE strawberries :-D");
        break;
    case "grape":
        colorGrape = prompt("you prefers purple or green grapes ? ");
        if (colorGrape == "purple") {
            alert("Sorry I don't like purple grapes :-(");
        } else if(colorGrape == "green"){
            alert("green grapes are ok... :-/");
        }else {
            alert(`Sorry but I don't understand the word he said (${colorGrape})`);
        }
        break;
    default:
        alert(`Sorry but I don't understand the word he said ( "${fruits}" )`);
        break;
}

