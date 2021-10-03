
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

let flight = JSON.parse(localStorage.getItem("flightDetails"));
let num = localStorage.getItem("totalTraveller");
let amount = localStorage.getItem("finalAmount");
let city = JSON.parse(localStorage.getItem("storeCityDate"));

let number = document.getElementById("number");
let place = document.getElementById("place");
let date = document.getElementById("date");
let time = document.getElementById("time");
let airline = document.getElementById("airline");
let total = document.getElementById("total");

number.innerText = num + " tickets";
place.innerText = city[0].DepartCity + " to " + city[0].ArriveCity;
date.innerText = city[0].Date;
time.innerText = flight[0];
airline.innerText = flight[3];
total.innerText ="Total: Rs " + amount;
