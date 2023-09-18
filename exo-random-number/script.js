
let x;
let y;
let z;

document.querySelector("#btn").addEventListener('click', (e) => {
    // console.log("clique ");
    // un random de 0 à 6 avec le "+1" car si non ça serais de 0 à 5
    // et j'arrondi au numero plus petit avec le "floor()" 
    
    x = Math.random() * 6 + 1;
    y = Math.floor(Math.random() * 6) + 1;
    z = Math.floor(Math.random() * 6) + 1;
    // document.getElementById("x").innerHTML = x;
    // document.getElementById("y").innerHTML = y;
    // document.getElementById("z").innerHTML = z;

    
    console.log("------ -------- ----------");
    console.log(Math.round( Math.random() * 10));

    console.log("------ -------- ----------");
    console.log(1 + Math.ceil( Math.random() * 4));

    

// document.getElementById("x").innerHTML = Math.round( Math.random() * 10);
    // console.log("------ -------- ----------");
    // console.log( Math.round( Math.random() * 10));
    
})

