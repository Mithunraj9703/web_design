// let msg = "  hello    ";
// console.log(msg.trim().toUpperCase());

// let msg = "apnacollege";
// let newMsg = msg.slice(4).replace('l', 't');
// console.log(newMsg.replace('l', 't'));

// let game = [['X', null, '0'], [null, 'X', null], ['0', null, 'X']];
// console.log(game)

// Quesiton 1:-
// let arr = [7, 9, 0, -2];
// console.log(arr.slice(0, 3));

// Quesiton 2:-
// let arr = [7, 9, 0, -2];
// console.log(arr.slice(-3));

//Question 3:-
// let str = prompt("Enter a string: ");
// if (str.length == 0) {
//     console.log("String is empty");
// }
// else {
//     console.log("String is not empty");
// }

//Question 4:-
// let str = "MithuNkumar";
// if (str[7] == str[7].toLowerCase()) {
//     console.log("Character is in lower case.");
// }
// else {
//     console.log("character is in upper case.");
// }

//Question 4:-
// let str = "     MithuNkumar    ";
// console.log(str.trim());

//Question 4:-
let arr = [1, 2, 3, 4, 5, 6];
let n = 7;
if (arr.indexOf(n) == -1) {
    console.log(`${n} is not exist in array`);
}
else {
    console.log(`${n} is exist in array`);
}