//serie-5 facultatif EXO 01
// let removeDuplicates = (params=[]) => params.filter((ele, item) => params.indexOf(ele) === item)

// console.log(removeDuplicates([4, 9, 5, 1, 3, 2, 4, 1, 8]));
// // Result : [4, 9, 5, 1, 3, 2, 8]
// console.log(removeDuplicates(["hello", "world", "goodbye", "world"]));
// // Result : ['hello', 'world', 'goodbye']
// console.log(removeDuplicates([true, true, false, true, true, false]));
// // Result : [true, false]




//serie-5 facultatif EXO 02
// let capitalize = (params="") => params.toUpperCase()

// console.log(capitalize("belgium"));
// // Result : "Belgium"
// console.log(capitalize("brazil"));
// // Result : "Brazil"
// console.log(capitalize("brussels"));
// // Result : "Brussels"





//serie-5 facultatif EXO 03
// let dayDif =(d1, d2) => new Number((d2.getTime() / 86400000) - (d1.getTime() / 86400000)).toFixed(0);

// console.log(dayDif(new Date("2020-10-21"), new Date("2021-10-22")));
// Result : 366







//serie-5 facultatif EXO 04
// average =(...params) => (params.reduce((acc,elem) => acc + elem ))/params.length
// console.log(average(1, 2, 3, 4));
// Result: 2.5





//serie-5 facultatif EXO 05
// let getSmallest = (params) => Math.min(...params);
// const arr = [13, 7, 11, 3, 9, 15, 17];
// console.log(getSmallest(arr));
// Result: 3





//serie-5 facultatif EXO 06
// let areEqual = (tb1, tb2) => tb1.reduce((acc, elem) => acc + elem) === tb2.reduce((acc, elem) => acc + elem);

// const arr1 = [1, 2, 3, 4];
// const arr2 = [3, 1, 4, 2];
// const arr3 = [1, 2, 3];

// console.log(areEqual(arr1, arr2));
// // Result : true
// console.log(areEqual(arr1, arr3));
// // Result : false






//serie-5 Advanced EXO 07
// let randomRGB = () => `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
// console.log(randomRGB());
// // Result : "rgb(232, 115, 164)"





//serie-5 Advanced EXO 08
// let occurencies = (str="", nbr) => str.split('').filter(ele => ele==nbr).length
// console.log(occurencies("hello", "l"));
// // Result : 2
// console.log(occurencies("abracadabra", "a"));
// // Result : 5
// console.log(occurencies("oups", "z"));
// // Result : 0






//serie-5 Advanced EXO 09
// let onlyPositives = (params=[]) => params.reduce((acc, ele) => (acc<0 ? acc=0 : acc +(ele >= 0 ? ele : 0)) )
// console.log(onlyPositives([1, 6, 2, -3, 5, -12]));
// // Result : 14
// console.log(onlyPositives([-3, -4, -2]));
// // Result : 0






//serie-5 Advanced EXO 10  element.Object.keys(element).forEach(ele => console.log(ele))
// let scanAndFind = (tbObj, obj) => tbObj.filter(item => { if(Object.getOwnPropertyNames(item)[1] == Object.getOwnPropertyNames(obj)){ let t = Object.getOwnPropertyNames(obj)
// if(item[t[0]]==obj[t[0]]){
//   console.log(item)
// }
// }})

// let scanAndFind = (tbObj, obj) => tbObj.filter(item => 
//   Object.getOwnPropertyNames(item)[1] == Object.getOwnPropertyNames(obj) ? 
//   item[Object.getOwnPropertyNames(obj)[0]]==obj[Object.getOwnPropertyNames(obj)[0]] ? 
//   console.log([item]) : '' : '')

// scanAndFind([
//   {
//     firstName: "Vito",
//     lastName: "Corleone",
//   },
//   {
//     firstName: "Jon",
//     lastName: "Snow",
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//   },
//   {
//     firstName: "Michal",
//     lastName: "Corleone",
//   },
// ],{lastName:"Corleone"});

// scanAndFind(
//     [
//       { fullName: "Roi Baudoin", id: 49762 },
//       { fullName: "Margareth Tatcher", id: 94357 },
//       { fullName: "Barack Obama", id: 76458 },
//       { fullName: "Emmanuel Macron", id: 10687 },
//       { fullName: "Charles de Gaulle", id: 67098 },
//       { fullName: "Boris Johnson", id: 16437 },
//     ],
//     { id: 10687 }
// );