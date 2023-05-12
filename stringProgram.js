// Program - 1 : WAP to reverse the word in a String ?

//let sen = "Today is good day";
// // Create a array of word
// let arr = sen.split(" ");
// console.log(arr);
// let arr1 = arr.map((value,index) => {
//     // Now each string split in the array 
//     let arr2 = value.split("");
//     console.log(arr2);
//     // reverse logic by 2-d Way
//     for( let i = 0 ; i <= arr2.length/2 ; i++){
//         let temp = arr2[i];
//         arr2[i] = arr2[arr2.length-1-i];
//         arr2[arr2.length-1-i] = temp ; 
//     }
//     console.log(arr2);
//     // Convert the array to String and return 
//     let ref = arr2.join("");
//     return ref; 
// })
// let res = arr1.join(" ");
// console.log(res);

// 2nd way of do the same program 

// let arr = sen.split(" ");
// console.log(arr);

// let arr1 = arr.map((value,index) => {
//     return value.split("").reverse().join("");
// })

// let res = arr1.join(" "); 
// console.log(res);

// Program - 2  : WAP to capatilize the each word ? 

//let sen = "Today is good day" ; 

// // Create a array of word 
// let arr = sen.split(" ");
// console.log(arr);

// let arr1 = arr.map((value,index) => {
//     let arr2 = value.split("");
//     for( let i = 0 ; i< arr2.length ; i++){
//         arr2[i] = arr2[i].toUpperCase();
//     }
//     let ref = arr2.join("");
//     return ref ; 
// })

// let res = arr1.join(" ");
// console.log(res);

// Program - 3 : WAP to capatilize the 5th word in a String ? 

// let sen = "Today is good day and Friday";

// // create a array of word
// let arr = sen.split(" ");
// console.log(arr);

// let count = 0 ;
// let arr1 = arr.map((value,index) => {
//     count++ ; 
//     if( count === 5){
//         let arr2 = value.split("");
//         for( let i =0 ; i < arr2.length ; i++){
//             arr2[i] = arr2[i].toUpperCase();
//         }
//         let ref = arr2.join("");
//         return ref; 
//     }
//     return value ; 
// }) 

// let res = arr1.join(" "); 
// console.log(res);

// Program - 4 : WAP to return those array element those contain the 's' letter in there word.

// let arr = [ "sumit" , "shivam" , "mayur" , "shivani"];

// let arr1 = arr.filter((value,index) => {
//     let arr2 = value.split("");
//     let des = false ; 
//     for( val of arr2){
//         if ( val === "s"){
//             des = true ; 
//         }
//     }
//     if( des === true){
//         return true ; 
//     }
// })

// console.log(arr1);

// Program - 5 : Count the number of vowel present in the String ? 

// let sen = "i love cricket";

// // create array of word 
// let arr = sen.split("");
// let count = 0 ; 
// for( val of arr){
//     if( val === 'a' || val === 'e' || val === 'i' || val === '0' || val === 'u' || val === 'A' || val === 'E' || val === 'I' || val === 'O' || val === 'U'){
//         count++ ; 
//     }
// }

// console.log(`Number of vowel present in String ${count}`);