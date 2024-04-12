
// Adding faculty details 
let fRegName = document.getElementById('fRegName');
let fRegEmail = document.getElementById('fRegEmail');
let fRegPass = document.getElementById('fRegPass');
let fRegDept = document.getElementById('fRegDept');


let regFac = document.querySelector('form');

let url = "http://192.168.234.100:8800/admin/addFaculty";



regFac.addEventListener('submit', (e) => {
    e.preventDefault();
    var facData = {
        id: 101,
        facultyName: fRegName.value,
        email: fRegEmail.value,
        password: fRegPass.value,
        department: fRegDept.value,
    }

    postFacData(facData);
    regFac.reset();
})

async function postFacData(data) {
    let url = "http://192.168.234.100:8800/admin/addFaculty";

    fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => {
        return res.json();
    }).then((data2) => {
        // console.log(data2);
        return data2;
    }).catch((err) => {
        console.log("Some error has occured", err);
    })
}




// show Faculty Details
let facURL = "http://192.168.234.100:8800/admin/getFaculty";

// let fDetails = document.getElementById("fDetails");

fDetails.addEventListener("click", ()=>{
    async function getFacDatas(){
        let res = await fetch(facURL);
        let data = await res.json();
        let tab= '';
        // console.log(data);
        data.forEach(element => {
            tab += `
            <tr>
            <td>${element.id}</td>
            <td>${element.facultyName}</td>
            <td>${element.password}</td>
            <td>${element.department}</td>
            </tr>
            `
        });
        document.getElementById("facCards").innerHTML = tab;
    }
    getFacDatas();
})