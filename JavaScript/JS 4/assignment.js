// Question 1:-
// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// console.log(arr);
// let num = 2;
// for (let i = 0; i < arr.length; i++) {
//     if (num == arr[i]) {
//         arr.splice(i, 1);
//     }
// }
// console.log("array after deletation.");
// console.log(arr);

//Question 2 & 3:-
// let n = 287152;
// let n1 = n;
// let r, sum = 0, i = 0;
// for (; n > 0; i++) {
//     r = n % 10;
//     sum += r;
//     n = Math.floor(n / 10);
//     console.log(r);
// }
// console.log(`total number of digits in ${n1} is ${i}`);
// console.log(`total sum of digits of ${n1} is ${sum}`);

//Question 4:-
// let n = prompt("Enter any positive number: ");
// let facto = 1;
// for (let i = 1; i <= n; i++) {
//     facto *= i;
// }
// alert(`factorial of ${n} is ${facto}`);

//Question 5:-
let arr = [34, 2, 56, 1, 78, 32, 65];
let large;
large = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (large < arr[i]) {
        large = arr[i];
    }
}
console.log(`Largest no. is ${large}`);