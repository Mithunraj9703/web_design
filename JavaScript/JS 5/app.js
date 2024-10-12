// Guessing game:-
// let n = prompt("Enter the last range which is start from 1: ");
// let rand = Math.ceil(Math.random() * n);
// let guess = prompt("Enter the guessing number or quit: ");
// let i = 1;
// while (true) {
//     if (guess == "quit") {
//         alert("Quit the game !");
//         break;
//     }
//     if (guess == rand) {
//         alert(`Cogratulation You takes ${i}times to guessing correct Guessing no. is ${rand}`);
//         break;
//     }
//     else if (guess < rand) {
//         guess = prompt(" hint: Please Guess large value or quit ");
//     } else {
//         guess = prompt("hint: Please Guess small value or quit: ");
//     }
//     i++;
// }

//Question 1:-
// console.log(`On Dice ${Math.ceil(Math.random() * 6)}`);

//Question 2:-
// const car = {
//     name: "thar",
//     model: 107,
//     color: "black"
// };
// console.log(car.name);

//Question 3:-
const person = {
    name: "Mithun",
    age: 24,
    city: "Banka"
};
person.city = "New York";
person.country = "United States";
console.log(person);