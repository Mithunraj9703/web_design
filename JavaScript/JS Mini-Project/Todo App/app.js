let inp = document.querySelector('input');
let btn = document.querySelector('button');
let ol = document.querySelector('ol');
btn.addEventListener('click', function () {
    let item = document.createElement('li');
    item.innerText = inp.value;
    ol.appendChild(item);
    let delbtn = document.createElement('button');
    delbtn.innerText = "delete";
    delbtn.classList.add('delete');
    item.append(delbtn);
    inp.value = "";
});

ol.addEventListener('click', function (event) {
    // console.dir(event.target.nodeName);
    if (event.target.nodeName == "BUTTON") {
        let item = event.target.parentElement;
        item.remove();
    }
});

// let delbtns = document.querySelectorAll('.delete');
// for (btn of delbtns) {
//     btn.addEventListener('click', function () {
//         let per = this.parentElement;
//         per.remove();
//     });
// }