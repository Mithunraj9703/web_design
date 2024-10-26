let url = "http://universities.hipolabs.com/search?country=India";
async function getCollegeName() {
    try {
        let res = await axios.get(url);
        return res.data;
    } catch (e) {
        console.log("error");
        return "not found!";
    }
}

let btn = document.querySelector('button');
btn.addEventListener('click', async () => {
    let collList = await getCollegeName();
    showCollege(collList);
})

function showCollege(collList) {
    let name = document.querySelector(".collegeList");
    name.innerText = "";
    let inp = document.querySelector("input");
    let stateName = inp.value;
    for (college of collList) {
        if (college.state - province == stateName) {
            list = document.createElement('li');
            list.innerText = college.name;
            name.append(list);
            // console.log(college);
        }
    }
}