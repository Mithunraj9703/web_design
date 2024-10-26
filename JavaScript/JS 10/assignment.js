let btn = document.createElement('button');
btn.innerText = "click me";
let body = document.querySelector('body');
body.appendChild(btn);
btn.addEventListener('click', function () {
    btn.style.backgroundColor = "green";
});

let input = document.createElement('input');
input.placeholder = "enter your name";
body.appendChild(input);
input.addEventListener('input', function () {
    let h2 = document.querySelector('h2');
    h2.innerText = input.value;
});