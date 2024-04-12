const forms = document.querySelector(".forms"),
    pwShowHide = document.querySelectorAll(".eye-icon"),
    links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

        pwFields.forEach(password => {
            if (password.type === "password") {
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })

    })
})

links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault(); //preventing form submit
        forms.classList.toggle("show-signup");
    })
})




// AdminPage script
let sAttend = document.getElementById('sAttend');
let pDetails = document.getElementById('pDetails');
let fDetails = document.getElementById('fDetails');
let details = document.getElementById("details");

sAttend.addEventListener("click", ()=>{
    details.innerText = sAttend.innerText;
})
pDetails.addEventListener("click", ()=>{
    details.innerText = pDetails.innerText;
})
fDetails.addEventListener("click", ()=>{
    details.innerText = fDetails.innerText;
})