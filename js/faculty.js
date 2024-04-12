let fId = document.getElementById('fId');
let fPass = document.getElementById('fPass');

let facLogin = document.querySelector('form');
facLogin.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(fId.value == "Dheeraj" && fPass.value == "D@123"){
        window.location.replace("../facultyPage.html");
    }
    else{
        alert("Invalid login");
        return;
    }
})