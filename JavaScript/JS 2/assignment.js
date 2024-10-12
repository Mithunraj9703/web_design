// Question 1
// let num = 30;
// if (num % 10 == 0) {
//     console.log("good");
// }
// else {
//     console.log("bad");
// }

// Question 2
// let name1 = prompt("Enter your name: ");
// let age = prompt("Enter your age: ");
// let msg = name1 + " is " + age + " years old."
// alert(msg);
// alert(`${name1} is ${age} years old.`);  //template literals

//Question 3
// let Quarter = 4;
// switch (Quarter) {
//     case 1:
//         console.log("January, February, March");
//         break;
//     case 2:
//         console.log("April, May, June");
//         break;
//     case 3:
//         console.log("July, August, September");
//         break;
//     case 4:
//         console.log("October, November, December");
//         break;
//     default:
//         console.log("Not a Quarter number.");
//         break;
// }

//Question 4
// let str = "anupam";
// if (((str[0] == 'A') || (str[0] == 'a')) && str.length > 5) {
//     console.log("golden string");
// }
// else {
//     console.log("not a golden string");
// }

//Question 5
// let a = 70;
// let b = 60;
// let c = 50;
// if (a > b) {
//     if (a > c) {
//         console.log("a is greatest");
//     }
//     else {
//         console.log("c is greatest");
//     }

// }
// else {
//     if (b < c) {
//         console.log("c is greatest");
//     }
//     else {
//         console.log("b is greatest");
//     }
// }

//Question 6
let a = 7828;
let b = 58958;
if (a % 10 == b % 10) {
    console.log("last digits are equal");
} else {
    console.log("last digits are not equal");
}