//serie-3 EXO 00
// function oddishOrEvenish(params) {
//     let str = params.toString().split('') // OU let str = Array.from(String(params))
//     let nbr=0;
//     for (let ele of str){nbr += parseInt(ele)}
//     return nbr%2 ? "Oddish/impaire" : "Evenish/pair"
// }
// console.log(oddishOrEvenish(43));
// console.log(oddishOrEvenish(4433));





//serie-3 EXO 01
// 1 bottle of milk:
// function getTotalPrice(params) {
//     let nbr = 0
//     console.log(params.reduce((acc, ele) => acc + (ele.price * ele.quantity), nbr));
// }
// getTotalPrice([
//     { product: "Milk", quantity: 1, price: 1.50 }
// ])
// // 1 bottle of milk & 1 box of cereals:
// getTotalPrice([
//     { product: "Milk", quantity: 1, price: 1.50 },
//     { product: "Cereals", quantity: 1, price: 2.50 }
// ])
// // Several groceries:
// getTotalPrice([
//     { product: "Milk", quantity: 1, price: 1.50 },
//     { product: "Eggs", quantity: 12, price: 0.10 },
//     { product: "Bread", quantity: 2, price: 1.60 },
//     { product: "Cheese", quantity: 1, price: 4.50 }
// ])





//serie-3 EXO 02
// function reverseOdd(params="a") {
//     let testWordinTab = params.split(" ")
//     let testWord = testWordinTab.toString()
//     testWord = testWord.replaceAll(',', '')
//     let word="";
//     if (testWordinTab.length == 1) {
//         if (testWord.length %2 == 0) {
//             word = params
//             return word
//         }else{
//             for (let i = params.length-1; i >=0; i--) {
//                 word += params[i];
//             }
//             return word
//         }
//     } else {
//         if (testWord.length %2 == 0){
//             word = params
//             return word
//         }else{
//             word = testWordinTab.reverse()
//             word = word.toString().replaceAll(',' , ' ')
//             return word
//         }
//     }
// }
// console.log(reverseOdd("Bananas"));
// console.log(reverseOdd("One two three four"));
// console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length"));






//serie-3 EXO 03
// function isSmooth(params='ab') {
//     let wordTab = params.split(' ')
//     let falseOrTrue = true;
//     for (let i = 0; i < wordTab.length-1; i++) {
//         let x = 1+i
//         if (falseOrTrue == true) {
//             if (wordTab[i][wordTab[i].length-1] == wordTab[x][0]) {
//                 falseOrTrue = true
//             } else {
//                 falseOrTrue = false
//             }
//         }else{
//             return falseOrTrue
//         }
//     }
//     return falseOrTrue
//     // return wordTab[0][wordTab[0].length-1]
// }
// console.log(isSmooth("Marta appreciated deep perpendicular right trapezoids"));
// console.log(isSmooth("Someone is outside the doorway"));
// console.log(isSmooth("She eats super righteously"));






//serie-3 EXO 04
// function loop(nbr, word) {
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] == nbr) {
//             return true
//         }else{
//             // console.log(false);
//         }
//     }
// }
// function sevenBoom(params=[]) {
//     let rep ="";
//     let nbr = 7
//     let test = params.find(ele => {
//         if (ele == nbr) {
//             rep= "Boom!"
//         } else {
//             let testTab = ele.toString()
//             let testWord = ''
//             testTab = testTab.split(',')
//             testWord = testTab[0]
//             // console.log(testWord);
//             if (testWord.length >= 2) {
//                 if (loop(nbr, testWord) == true) {
//                     rep= "Boom!"
//                 }
//             } else {
//                 rep= `there is no ${nbr} in the array`
//             }
//         }
//     })
//     return rep
// }
// console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7])); //➞ "Boom!"
// // 7 contains the number seven.
// console.log(sevenBoom([8, 6, 33, 100])); //➞ "there is no 7 in the array"
// // None of the items contain 7 within them.
// console.log(sevenBoom([2, 55, 60, 97, 86])); //➞ "Boom!"
// // 97 contains the number seven.






//serie-3 EXO 05
// function convert(params="") {
//     let ttl=0
//     let nbr;
//     nbr = parseFloat(params)
//     // let test ;
//     // test = params.includes("F")
//     if (isNaN(nbr)==false) {
//         if (params[params.length-1] == "C") {
//             ttl = nbr*(9/5)+32
//             ttl = parseInt(ttl)
//             return `${ttl}°C`
//         }else if(params[params.length-1] == "F"){
//             ttl = (nbr-32)*(5/9)
//             ttl = parseInt(ttl)
//             return `${ttl}°F`
//         }else{
//             return "Error"
//         }
//     }
// }
// console.log(convert("35°C"));
// console.log(convert("19°F"));
// console.log(convert("33"));





//serie-3 EXO 06
// function findBrokenKeys(params='', verif='') {
//     let paramsTab = params.split(' ')
//     let verifTab = verif.split(' ')
//     let wordTab = [];
//     // console.log(params.length);
//     for (let i = 0; i < paramsTab.length; i++) {
//         // console.log(paramsTab[i] );
//         if (paramsTab[i] == verifTab[i]) {
//         } else {
//             for (let j = 0; j < paramsTab[i].length; j++) {
//                 if (paramsTab[i][j] == verifTab[i][j]) {
//                 } else {
//                     // enleve les doublons sans les methods
//                     // if (wordTab.length != 0) {
//                     //     rep = wordTab.includes(paramsTab[i][j])
//                     //     if (rep) {
//                     //     } else {
//                     //         wordTab.push(paramsTab[i][j])
//                     //     }
//                     // }else{
//                     //     wordTab.push(paramsTab[i][j])
//                     // }
//                     wordTab.push(paramsTab[i][j])
//                     // enleve les doublons avec les methods
//                     wordTab = wordTab.filter((ele,ind) => wordTab.indexOf(ele)===ind)
//                 }
//             }
//         }
//     }
//     return wordTab
// }
// console.log(findBrokenKeys("happy birthday", "hawwy birthday"));
// console.log(findBrokenKeys("starry night", "starrq light"));
// console.log(findBrokenKeys("beethoven", "affthoif5"));