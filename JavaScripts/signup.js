let div = document.getElementById("warning");
let p = document.getElementsByClassName("hide");
let war = document.getElementById("warning2");

display();

function display(){
    war.style.display = "none";
    div.style.display = "none";
    Array.from(p).forEach(para => {
        para.style.display = "none";
    });
}



async function signup(){
    let fname = document.getElementById("first_name");
    let lname = document.getElementById("surname");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let confirm_password = document.getElementById("confirm_pass");
    
    

    if(fname.value == "" || lname.value == "" || email.value == "" || password.value == "" || confirm_password.value == ""){
        div.style.display = "block";
        
        if(fname.value == ""){
            p[0].style.display = "block";
        }
        if(lname.value == ""){
            p[1].style.display = "block";
        }
        if(email.value == ""){
            p[2].style.display = "block";
        }
        if(password.value == ""){
            p[3].style.display = "block";
        }
        if(confirm_password.value == ""){
            p[4].style.display = "block";
        }
    }
    //post request
    if(password.value != confirm_password.value){
        war.style.display = "block";
    }
    else if(password.value == confirm_password.value && (password.value != "" || confirm_password.value != "")){
        display();

        let res = await fetch("http://localhost:5000/api/login-data", {
        method: "POST",
        body: JSON.stringify({
            firstName : fname.value,
            surname : lname.value,
            email : email.value,
            password : password.value
        }),
        headers: { "Content-Type": "application/json" }
        });
        let data = await res.json();
        console.log('data:', data);

        fname.value = "";
        lname.value = "";
        email.value = "";
        password.value = "";
        confirm_password = "";

        location.assign("../index.html");
    }
}


