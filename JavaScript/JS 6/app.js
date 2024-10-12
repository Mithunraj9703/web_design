// Question 1:-
// let arr = [9, 6, 3, 4, 2, 7, 8, 0, 1, 5, 10];
// let n = 5;
// let i = 0;
// function largeElement(arr, n) {
//     for (; i < arr.length; i++) {
//         if (arr[i] > n) {
//             return arr[i];
//         }
//     }
// }
// while (i < arr.length) {
//     console.log(largeElement(arr, n));
//     i++;
// }

//Question 2:-
// let str = "abcdabcdefgggh";
// let ans = "";
// for (let i = 0; i < str.length; i++) {
//     if (ans.indexOf(str[i]) == -1) {
//         ans += str[i];
//     }
// }
// console.log(ans);

//Question 3:-
// let n = prompt("Enput the no. of country: ");
// let country = [n];
// for (let i = 0; i < n; i++) {
//     country[i] = prompt(`Enter ${i + 1} country name:`);
// }
// let len = country[0].length;
// let output = country[0];
// for (let i = 1; i < n; i++) {
//     if (len < country[i].length) {
//         len = country[i].length;
//         output = country[i];
//     }
// }
// console.log(`largest country length is ${output}`);

//Question 4:-
// let str = "Mithunkumar";
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//     if ((str[i] == 'a') ||
//         (str[i] == 'e') ||
//         (str[i] == 'i') ||
//         (str[i] == 'o') ||
//         (str[i] == 'u')) {
//         count++;
//     }
// }
// console.log(`total no. of vowels ${count}`);

//Question 5:-
let end = prompt("Enter last range: ");
let start = prompt("Enter start range: ");
let diff = end - start;
let rand = Math.ceil(Math.random() * diff) + parseInt(start);
console.log(rand);