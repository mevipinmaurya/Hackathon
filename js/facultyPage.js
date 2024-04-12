// Adding faculty details 
let sName = document.getElementById('sName');
let sEmail = document.getElementById('sEmail');
let sBranch = document.getElementById('sBranch');
let sYear = document.getElementById('sYear');


let addStudent = document.querySelector('form');

let url = "http://192.168.234.100:8800/faculty/addStudent";



addStudent.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(sName.value);
    var stuData = {
        id: 101,
        studentName: sName.value,
        email: sEmail.value,
        year: sYear.value,
        branch: sBranch.value,
    }
    // console.log(stuData)

    postStuData(stuData);
    addStudent.reset();
})

async function postStuData(data) {
    let url = "http://192.168.234.100:8800/faculty/addStudent";

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
let facURL = "http://192.168.234.100:8800/faculty/getStudent";
// let sTables = document.getElementById('sTables');

addStudent.addEventListener("click", ()=>{
    async function getStuDatas(){
        let res = await fetch(facURL);
        let data = await res.json();
        let tab= '';
        // console.log(data);
        data.forEach(element => {
            tab += `
            <tr>
                    <td>${element.id}</td>
                    <td>${element.studentName}</td>
                    <td>${element.email}</td>
                    <td>${element.year}</td>
                    <td>${element.branch}</td>
                    <td><button>P</button></td>
                </tr>
            `
        });
        document.getElementById("sTables").innerHTML = tab;
    }
    getStuDatas();
})