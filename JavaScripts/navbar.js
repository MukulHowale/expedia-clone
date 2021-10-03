function show(){
    let Uname = document.getElementById("username");
    Uname.style.display = "none"

    let statusout = document.getElementById("out");
    statusout.style.display = "none"

    let statusIn = document.getElementById("in");
    let statusUp = document.getElementById("up");


    if(localStorage.getItem("loginStatus") ==1){
        let p = document.createElement("p");
        p.innerText = localStorage.getItem("userName");
        Uname.appendChild(p);

        statusIn.style.display = "none";
        statusUp.style.display = "none";

        statusout.style.display = "block";
        Uname.style.display = "block";
    }
    else{
        statusIn.style.display = "block";
        statusUp.style.display = "block";

        statusout.style.display = "none";
        Uname.style.display = "none";
    }
}



function signin(){
    location.assign("../HTML/login.html");
}
function signup(){
    location.assign("../HTML/signup.html");
}

function logout(){
    let Uname = document.getElementById("username");
    let statusIn = document.getElementById("in");
    let statusUp = document.getElementById("up");
    let statusout = document.getElementById("out");

    localStorage.setItem("loginStatus",0);
    localStorage.setItem("userName","");

    Uname.innerText = "";

    statusIn.style.display = "block";
    statusUp.style.display = "block";

    statusout.style.display = "none";
    Uname.style.display = "none";
}

export {show, signin, signup,logout}