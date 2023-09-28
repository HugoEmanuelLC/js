//serie-2 EXO 00
// function countTrue(params) {
//     let tab = [...params]
//     if (tab.length == 0) {
//         return 0
//     }else{
//         let result = tab.reduce((accu, ele) => {
//             return accu + ele
//         })
//         return result
//     }
// }
// console.log(countTrue([true, false, true, true, false]));
// console.log(countTrue([]));





//serie-2 EXO 01
// function possibleBonus(a, b) {
//     return a > b ? false : (a+6 >= b ? true : false)
// }
// console.log(possibleBonus(3, 7));
// console.log(possibleBonus(1, 9));
// console.log(possibleBonus(5, 3));




//serie-2 EXO 02
// function num_of_digits(params) {
//     let str = params;
//     str = str.toString()
//     return str.length
// }
// console.log(num_of_digits(12));





//serie-2 EXO 03
// function toArray(params) {
//     let tab = []
//     for (const key in params) {
//         tab.push([key,params[key]])
//     }
//     return tab
// }
// console.log(toArray({ a: 1, b: 2 }));
// console.log(toArray({ shrimp: 15, tots: 12 }));





//serie-2 EXO 04
// function arrayOfMultiples(num, length) {
//     let tab = [];
//     for (let i = 0; i < length; i++) {
//         if (tab.length == 0) {
//             tab.push(num)
//         }else{
//             tab.push(num*(i+1))  
//         }
//     }
//     return tab
// }
// console.log(arrayOfMultiples(7, 5));
// console.log(arrayOfMultiples(12, 10));
// console.log(arrayOfMultiples(17, 6));





//serie-2 EXO 05
// function removeLeadingTrailing(params) {
//     let nbr = parseFloat(params)
// OU
//     let nbr = Number(params)
//     return nbr
// }
// console.log(removeLeadingTrailing("230.000"));
// console.log(removeLeadingTrailing("00402"));
// console.log(removeLeadingTrailing("03.1400"));
// console.log(removeLeadingTrailing("30"));





//serie-2 EXO 06
// function sortIt(params) {
//     return params.sort()
// }
// console.log(sortIt([4, 1, 3]));
// console.log(sortIt([[4], [1], [3]]));
// console.log(sortIt([4, [1], 3]));
// console.log(sortIt([[4], 1, [3]]));
// console.log(sortIt([[3], 4, [2], [5], 1, 6]));





//serie-2 EXO 07
// function calculator(nbr1, operator, nbr2) {
//     if (nbr1 == 0 || nbr2 == 0) {
//         return "Can't divide by 0!"
//     } else{
//         switch (operator) {
//             case "x":
//                 return nbr1 * nbr2;
                
//             case "*":
//                 return nbr1 * nbr2;

//             case "+":
//                 return nbr1 + nbr2;
                
//             case "-":
//                 return nbr1 - nbr2;
                
//             case "/":
//                 return nbr1 / nbr2;
        
//             default:
//                 return "incorrect operator"
//         }
//     }
// }
// console.log(calculator(2, "x", 2));
// console.log(calculator(2, "*", 2));
// console.log(calculator(4, "/", 2));






//serie-2 EXO 08
// function areaOfCountry(country, area) {
//     let ttl;
//     let worldArea = 148940000
//     ttl = (area / worldArea)*100
//     country.toLowerCase()
//     return `${country} is ${ttl.toFixed(2)}% of the total world's landmass` 
// }
// console.log(areaOfCountry("Russia", 17098242));
// console.log(areaOfCountry("USA", 9372610));
// console.log(areaOfCountry("Iran", 1648195));





//serie-2 EXO 09
// function reverseWords(params="") {
//     let word = params.split(" ")
//     word.sort()
//     let newWord = "";
//     for (let i = 0; i < word.length; i++) {
//         if (Boolean(word[i]) == false) {
            
//         } else {
//             newWord += `${word[i]} `;
//         }
//     }
//     return newWord
// }
// console.log(reverseWords(" the sky is blue"));