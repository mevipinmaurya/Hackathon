var aId = document.getElementById("adminId");
var aPass = document.getElementById("adminPass");
let aLogin = document.querySelector('form');

// let changeName = document.getElementById('loginAdminName');

// var sessionId;

let url = "http://192.168.234.100:8800/admin/login";



aLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    adminData = {
        email : aId.value,
        password : aPass.value,
    }

    try{
        let data2 = postData(adminData);
        // sessionId = data2.uuid;
        // changeName.innerText = data2.adminName;
        window.location.replace("../adminPage.html");
    }catch(e){
        alert("Invalid Login");
        return;
    }
})

async function postData(data) {
    let url = "http://192.168.234.100:8800/admin/login";

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


// async function returnData(){
//     await fetch(`http://192.168.234.100:8800/admin/logout/${sessionId}`);
//     return;
// }


// http://192.168.234.100:8800/admin/login


