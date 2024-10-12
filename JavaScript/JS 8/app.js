//Practice 1:-
// let arr = [10, 20, 60, 70, 100, 8];
// let res = arr.every((el) => (el % 10 == 0));
// console.log(res);

//Practice 2:-
// let arr = [10, 20, 6, 70, 16, 8];
// let res = arr.reduce((min, el) => {
//     if (el < min) {
//         return el;
//     } else {
//         return min;
//     }
// });
// console.log(res);

//Question 1:-
// let arr = [2, 3, 8, 4, 5, 8, 6, 9];
// let arr1 = arr.map((el) => el * el);
// let res = arr1.reduce((res, el) => res + el);
// console.log(`Average = ${res / arr.length}`);

//Question 2:-
// let arr = [2, 3, 8, 4, 5, 8, 6, 9];
// let arr1 = arr.map((el) => el);

// //Question 3:-
// let arr = ["mithun", "Aman", "shivam", "Puja"];
// let arr1 = arr.map((el) => el.toUpperCase());

//Question 4:-
// let arr = [2, 3, 8, 4, 5, 8, 6, 9];
// function doubleAndReturnArgs(a, b, c, d, arr) {
//     let arr1 = [2 * a, 2 * b, 2 * c, 2 * d, ...arr];
//     return arr1;
// }
// let arr2 = doubleAndReturnArgs(10, 20, 30, 40, arr);

//Question 5:-
let obj1 = {
    name1: "mithun",
    roll1: 63,
    age1: 24
};
let obj2 = {
    name2: "aman",
    roll2: 88,
    age2: 23
};
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
console.log(mergeObjects(obj1, obj2));