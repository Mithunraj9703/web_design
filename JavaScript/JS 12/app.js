let url = "https://catfact.ninja/fact";
// async function getFacts() {
//     try {
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2.fact);
//     } catch (e) {
//         console.log("error = ", e);
//     }
// }

// using axios dont need to parse data
async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (e) {
        return "no fact found.";
    }
}
let btn = document.querySelector('button');
btn.addEventListener('click', async function () {
    let p = document.querySelector("#fact");
    let res = await getFacts();
    p.innerText = res;
})