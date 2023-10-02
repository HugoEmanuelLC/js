//serie-4 Advanced EXO 00
// function FizzBuzz(params) {
//     let quit = 0 
//     do {
//         quit++
//         if(quit%3==0 && quit%5==0) {
//             console.log(`FizzBuzz`);
//         }else if(quit%5==0) {
//             console.log(`Buzz`);
//         }else if(quit%3==0){
//             console.log(`Fizz`);
//         }else {
//             console.log(quit);
//         }
//     } while (quit <= params);
// } 
// FizzBuzz(20)




//serie-4 Advanced EXO 01
// function ransomNote(noteText='', magazineText="") {
//     let tabMagazine = magazineText.split(' ')
//     let tabNote = noteText.split(' ')
//     let rep = true;
//     for (let i = 0; i < tabNote.length; i++) {
//         if (tabMagazine.indexOf(tabNote[i]) != -1) {
//             tabMagazine.splice(tabMagazine.indexOf(tabNote[i]),1)
//         } else {
//             rep = false
//         }
//     }
//     return rep
// }
// noteText = "this is a secret note to you from a secret admirer"
// magazineText = "puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice to you"
// console.log(ransomNote(noteText, magazineText));




//serie-4 Advanced EXO 02
// function isPalindrome(params='') {
//     let word = params.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ``).replaceAll(' ','').toLowerCase()
//     let tabWord = word
//     tabWord = tabWord.split('').reverse()
//     let reverseWord = ""
//     tabWord.forEach(element => reverseWord += element);
//     return word == reverseWord ? true : false
// }
// console.log(isPalindrome("kayak"));
// console.log(isPalindrome("race car"));
// console.log(isPalindrome("hello world"));
// console.log(isPalindrome("Madam, I'm Adam"));





//serie-4 Advanced EXO 03
// function caesarCipher(str="", num=0) {
//     const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//     let tabStr = str.toUpperCase().split('')
//     let tabNewWord = []
//     let newWord ='';
//     let test;
//     for (let e of tabStr) {
//         // for (let i = 0; i < alphabet.length; i++) {
//         //     if (tabStr[e] == alphabet[i]) {
//         //         if(i+num <= alphabet.length-1){
//         //             if (i+num < 0) {
//         //                 let id = i+num
//         //                 id = alphabet.length+id
//         //                 tabNewWord.push(alphabet[id])
//         //             }else{
//         //                 tabNewWord.push(alphabet[i+num])
//         //             }
//         //         }else{
//         //             let tampon = i+num
//         //             tampon = tampon-(alphabet.length-1)
//         //             tabNewWord.push(alphabet[tampon-1])
//         //         }
//         //     }
//         // }
//         test = alphabet.indexOf(e)
//         if (e == ' ') {
//             tabNewWord.push(e)
//         }
//         else if (e == alphabet[test]) {
//             if(test+num <= alphabet.length-1){
//                 if (test+num < 0) {
//                     let id = test+num
//                     id = alphabet.length+id
//                     tabNewWord.push(alphabet[id])
//                 }else{
//                     tabNewWord.push(alphabet[test+num])
//                 }
//             }else{
//                 let tampon = test+num
//                 tampon = tampon-(alphabet.length-1)
//                 tabNewWord.push(alphabet[tampon-1])
//             }
//         }
//     }
//     newWord += tabNewWord
//     newWord = newWord.replaceAll(',', '')
//     return newWord
// }
// console.log(caesarCipher("Zoo keeper", 2));
// console.log(caesarCipher("bqq mggrgt", -2));
// console.log(caesarCipher("My name is Henrique", 3));
// let tab = "hugo"
// tab = tab.split('')
// tab[0] = "j"
// console.log(tab[0]);
// let a = -2, b =0
// console.log(b+a);







//serie-4 Advanced EXO 04
// function reverseWord(params="") {
//     let tabWord = params.split(' ')
//     let reverseWord="";
//     let newWord = ""
//     tabWord.forEach(elem => {
//         reverseWord = elem.split('')
//         newWord += reverseWord.reverse()+" "
//     })
//     newWord= newWord.toLowerCase().replaceAll(',','')
//     return newWord
// }
// console.log(reverseWord("This is a string of words"));





//serie-4 Advanced EXO 05
// function reverseArray(params) {
//     // console.log(params.length/2);
//     for (let a = 0; a < params.length/2; a++) {
//         // console.log(a);
//         let tampo = params[a]
//         params[a] = params[params.length-1-a]
//         params[params.length-1-a] = tampo
//     }
//     return params
// }
// console.log(reverseArray(['hugo','lopes','clavinas']));
// console.log(reverseArray(['hugo','lopes','clavinas', 'paire', 'plusgrand']));






//serie-4 Advanced EXO 06
// function twoSums(params){
//     let tabSum = []
//     console.log(params);
//     for (let a = 0; a < params.length-1; a++) {
//         for (let b = a; b < params.length; b++) {
//             if (params[a]+params[b] == 7) {
//                 tabSum.push([params[b],params[a]])
//             } else {
                
//             }
//         }
//     }
//     return tabSum
// }
// console.log(twoSums([1, 6, 4, 5, 3, 3]));






//serie-4 Advanced EXO 07
// function fibonacci(params=0) {
//     let tab=[];
//     let i = 0
//     while (i<params) {
//         if (tab.length >= 2) {
//             tab.push(tab[i-2]+tab[i-1])
//         } else {
//             tab.push(1)
//         }
//         i++
//     }
//     return tab
// }
// console.log(fibonacci(4));
// console.log(fibonacci(6));
// console.log(fibonacci(9));