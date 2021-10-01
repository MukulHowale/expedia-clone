let user_email = document.getElementById("email");
let user_pass = document.getElementById("password");
let hides = document.getElementsByClassName("hide");
let warning = document.getElementById("warning");

hidep();

function hidep(){
    Array.from(hides).forEach(hide => {
        hide.style.display = "none";
    });
     warning.style.display = "none";
}
async function signin(){
    let res = await fetch("http://localhost:5000/api/login-data");
    let data = await res.json();
    hidep();
    if(user_email.value == "" || user_pass.value == ""){
        if(user_email.value == "") hides[0].style.display = "block";
        if(user_pass.value == "") hides[1].style.display = "block";
    }
    else{
        data.forEach(user => {
        if(user.email == user_email.value){
            if(user.password == user_pass.value){
                localStorage.setItem("loginStatus",1);
                localStorage.setItem("userName", user.firstName + " " + user.surname);
                location.assign("../index.html");
                hidep();
                user_email.value = "";
                user_pass.value = "";
            }
            else{
                warning.style.display = "block";
            }
        }
        else{
            warning.style.display = "block";
        }
        });
    }
}
