//serie-1 EXO 00
// let makesTen = (a=0,b=0)=>{
//     let ttl = a+b;
//     if (a == 10 || b == 10) {
//         console.log(true);
//     }else{
//         if (ttl == 10) {
//             console.log(true);
//         }else{
//             console.log(false);
//         }
//     }
// }
// makesTen(5,10)







//serie-1 EXO 01
// function calcAge(params) {
//     let result = 365*params
//     result = Math.floor(result)
//     console.log(result);
// }
// calcAge(65)






//serie-1 EXO 02
// function addUp(params) {
//     let ttl=0;
//     for (let i = 0; i < params; i++) {
//         ttl += (i+1)
//     }
//     console.log(ttl);
// }
// addUp(13)







//serie-1 EXO 03
// function minMax(...params) {
//     let tab = []
//     let min = 0;
//     let max = 0;
//     if (params[0].length >= 1) {
//         params[0].forEach(element => {
//             if (element > max) {
//                 max = element
//             }else{}
//             if (min == 0) {
//                 min = element
//             }else{
//                 if (element < min) {
//                     min = element
//                 }else{}
//             }
//         });
//     }else{
//         console.log(false);
//     }
//     tab.push(min)
//     tab.push(max)
//     console.log(tab);
// }
// minMax([1, 2, 3, 4, 5])








// serie-1 EXO 04
// function detectWord(params) {
//     let str = params
//     let tabWord;
//     let newWord = ""
//     tabWord = str.split('')
//     for (let i = 0; i < tabWord.length; i++) {
//         if (tabWord[i] == tabWord[i].toLowerCase()) {
//             newWord += tabWord[i]
//         }else{}
//     }
//     console.log(newWord);
// }
// detectWord("bEEFGBuFBRrHgUHlNFYaYr")






//serie-1 EXO 05
// drinks = [
//     {name: "lemonade", price: 10},
//     {name: "lime", price: 10},
//     {name: "coke", price: 8},
//     {name: "vodka", price: 17},
//     {name: "water", price: 3},
// ]
// function sortDrinkByPrice(...params) {
//     let newTab = [...params]
//     for (let i = 1; i < newTab[0].length; i++) {
//         for (let j = 0; j < newTab[0].length; j++) {
//             let tampon;
//             if (newTab[0][i].price < newTab[0][j].price) {
//                 tampon = newTab[0][j]
//                 newTab[0][j] = newTab[0][i]
//                 newTab[0][i] = tampon
//             }else{}
//         }
//     }
//     console.log(newTab[0]);
// }
// sortDrinkByPrice(drinks) 





//serie-1 EXO 06
// function animals(chickens, cows, pigs) {
//     return (chickens*2)+(cows*4)+(pigs*4)
// }
// console.log(animals(1, 2, 3));






//serie-1 EXO 07
// function profitableGamble(probability, prize, pay) {
//     let ttl = probability*prize
//     return (ttl > pay) ? true : false
// }
// console.log(profitableGamble(0.9, 3, 2));





//serie-1 EXO 08
// function frames(frames, sec) {
//     return frames*(sec*60)
// }
// console.log(frames(10, 1));





//serie-1 EXO 09
// function calculateFuel(params) {
//     let reponse = params*10 
//     if (reponse >= 100) {
//         return reponse;
//     }else{
//         return 100;
//     }
// }
// console.log(calculateFuel(23.5));






//EXO 