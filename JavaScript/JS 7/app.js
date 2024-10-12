// const square = n => (n * n);

// let id = setInterval(() => {
//     console.log("hello world");
// }, 2000);
// setTimeout(() => {
//     clearInterval(id);
//     console.log("clear id");
// }, 10000);

// Question 1:-
// let n = prompt("Enter the length of array: ");
// let arr = [];
// for (let i = 0; i < n; i++) {
//     arr[i] = parseInt(prompt(`Enter the ${i + 1} element: `));
// }
// const arrayAverage = (arr, n) => {
//     let sum = 0;
//     for (i of arr) {
//         sum += i;
//     }
//     return (sum / n);
// };
// console.log(arrayAverage(arr, n));

//Question 2:-
// let n = parseInt(prompt("Enter any number: "));
// const even = n => {
//     if (n % 2 == 0) {
//         return "even";
//     } else {
//         return "not even";
//     }
// };
// console.log(even(n));

//Question 3:-
// const object = {
//     message: 'Hello, World!',
//     logMessage() {
//         console.log(this.message);
//     }
// };
// setTimeout(object.logMessage, 1000);

//Question 4:-
let length = 4;
function callback() {
    console.log(this.length);
}
const object = {
    length: 5,
    method(callback) {
        callback();
    },
};
object.method(callback, 1, 2);