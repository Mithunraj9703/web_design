// function one() {
//     return 1;
// }
// function two() {
//     return one() + one();
// }
// function three() {
//     return two() + one();
// }
// console.log(three());

//Callback hell:-

h2 = document.querySelector('h2');
function colorChange(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h2.style.color = color;
            resolve();
        }, delay);
    })
}
// colorChange("red", 1000, () => {
//     colorChange("yellow", 1000, () => {
//         colorChange("blue", 1000, () => { });
//     });
// });
// colorChange("red", 1000)
//     .then(() => {
//         console.log("red color");
//         return colorChange("blue", 1000);
//     })
//     .then(() => {
//         console.log("blue color");
//         return colorChange("green", 1000);
//     })
//     .catch(() => {
//         console.log("rejected");
//     })

async function demo() {
    await colorChange("red", 1000);
    await colorChange("yellow", 1000);
    await colorChange("blue", 1000);
    colorChange("green", 1000);
}
demo();