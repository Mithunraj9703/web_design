// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// const movie = "hindustani";
// let guess = prompt("Enter the guess movie: ");
// while (guess != movie && guess != "quit") {
//     console.log("Wrong movie");
//     guess = prompt("Enter the guess movie: ");
// }
// if (guess == movie) {
//     console.log("Cogratulation u guess right.");
// }
// else {
//     console.log("!Quit!");
// }

//Todo App:- 
let todo = ["eat", "walk", "sleep"];
let req = prompt("Enter your request from options: ");
while (true) {
    if (req == "quit") {
        console.log("Quit todo !");
        break;
    }
    if (req == "list") {
        console.log("-----List tasks are :----- ");
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("-----*-----");
    } else if (req == "add") {
        let task = prompt("Enter your task wants to add in todo: ");
        todo.push(task);
        console.log(`${task} is added in todo.`);
    } else if (req == "delete") {
        let i = prompt("Enter your task index wants to remove from todo: ");
        console.log(`${todo[i]} is deleted from todo.`);
        todo.splice(i, 1);
    } else {
        console.log("Wrong request.");
    }
    req = prompt("Enter your request from options: ");
}