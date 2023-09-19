let nameUser = prompt("What is your name ? ");
let catOrDog = prompt("What is your favorite animal, dog or cat ? ");

if (catOrDog == "dog") {
    alert(`hello Mr ${nameUser} the dogs are man's best friend`);
}else if(catOrDog == "cat"){
    alert(`welcome to the WAKANDA Mr ${nameUser}`);
}else{
    alert("too bad, animals are wonderful");
}

