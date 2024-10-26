let p = document.createElement('p');
p.innerText = "Hey I'm red !";
p.style.color = "red";
let body = document.querySelector('body');
body.appendChild(p);
let h3 = document.createElement('h3');
h3.innerText = "I'm a blue h3 !";
h3.style.color = "blue";
body.appendChild(h3);
let div = document.createElement('div');
body.appendChild(div);
div.classList.add('box');
let h1 = document.createElement('h1');
let p1 = document.createElement('p');

h1.innerText = "I'm in a div !";
p1.innerText = "ME TOO !";
div.appendChild(h1);
div.appendChild(p1);
