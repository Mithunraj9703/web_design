let url = "http://universities.hipolabs.com/search?country=";
async function getCollegeName(countryName) {
    try {
        let res = await axios.get(url + countryName);
        return res.data;
    } catch (e) {
        console.log("error");
        return "not found!";
    }
}

let btn = document.querySelector('button');
btn.addEventListener('click', async () => {
    let inp = document.querySelector("input");
    let countryName = inp.value;
    let collList = await getCollegeName(countryName);
    showCollege(collList);
})

function showCollege(collList) {
    let name = document.querySelector(".collegeList");
    name.innerText = "";
    for (college of collList) {
        list = document.createElement('li');
        list.innerText = college.name;
        name.appendChild(list);
    }
}