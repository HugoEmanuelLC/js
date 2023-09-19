//Notre premier exercice d’objet
// let product = {
//     name: "iPhone 15",
//     inStock: true,
//     price: 1249.90,
//     includedInPackage: ["case", "earphones", "charger"]
// };
// console.log(product);






//Exercice d'accès aux objets:
//PLEASE DON'T TOUCH THIS LINE!
const restaurant = {
    name: "Ichiran Ramen",
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: "Brooklyn",
    state: "NY",
    zipcode: "11206",
};
  //YOUR CODE GOES DOWN HERE:
let fullAddress;
fullAddress = `"${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}"`;
// console.log(fullAddress);






//Modification et ajout de propriétés
