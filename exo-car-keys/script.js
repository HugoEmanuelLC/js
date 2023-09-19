let ageUser = prompt("how old are you ? ");
ageUser = parseInt(ageUser);
console.log(typeof ageUser);

if (ageUser < 18 ) {
    alert(`Sorry, you are too young to drive this car. Powering off`);
}else if(ageUser == 18){
    alert(`Congratulations on your first year of driving. Enjoy the ride!`);
}else if(ageUser > 18){
    alert("Powering On. Enjoy the ride!");
}else{
    alert("ERROR");
}

