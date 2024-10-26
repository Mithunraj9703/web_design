let gameSeq = [];
let userSeq = [];
let starter = false;
let level = 0;
let score = 0;
let btns = ["red", "yellow", "green", "purple"];
let h3 = document.querySelector('h3');
let h4 = document.querySelector('h4');

document.addEventListener("keypress", function () {
    if (starter == false) {
        // console.log("game started");
        starter = true;
        levelup();
    }
});

function levelup() {
    userSeq = [];
    level++;
    h3.innerText = `Lavel ${level}`;

    score = Math.max(score, level);
    h4.innerText = `Heighest score is ${score}`;

    //choose random button
    let randIdx = Math.floor(Math.random() * 3);
    let randClr = btns[randIdx];
    let randBtn = document.querySelector(`.${randClr}`);
    gameSeq.push(randClr);
    btnFlash(randBtn);
    console.log(gameSeq);
}

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash")
    }, 250);
}

function pressBtn() {
    let btn = this;
    btnFlash(btn);
    let userClr = btn.getAttribute('id');
    userSeq.push(userClr);
    ansCheck(userSeq.length - 1);
}

let allBtn = document.querySelectorAll(".btn");
for (btn of allBtn) {
    btn.addEventListener('click', pressBtn);
}

function ansCheck(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h3.innerHTML = `Game is over! Your score is ${level} <br>Press any key to start`;
        let body = document.querySelector('body');
        body.style.backgroundColor = "red";
        setTimeout(function () {
            body.style.backgroundColor = "white";
        }, 500);
        reset();
    }
}
function reset() {
    starter = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}