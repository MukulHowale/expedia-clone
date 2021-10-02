
let year_div = document.getElementsByClassName("year");
Array.from(year_div).forEach(div => {
    for(let i=1900; i<=2021; i++){
    let opt = document.createElement("option");
    opt.innerText = i;
    div.append(opt);
    }
});



let days = document.getElementsByClassName("day");
Array.from(days).forEach(div => {
    for(let i=1; i<=31; i++){
    let opt = document.createElement("option");
    opt.innerText = i;
    div.append(opt);
    }
});



let card = document.getElementById("code");
let code = document.getElementById("security");
code.addEventListener("focusin",() =>{
    card.style.display = "block";
});

code.addEventListener("focusout",() =>{
    card.style.display = "none";
});
