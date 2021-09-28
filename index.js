
let s = document.getElementsByClassName("s_t");

let clickStay = () =>{
    let staySpan = s[0].children[0];
    staySpan.lastElementChild.style.color = "#3662d8";
    staySpan.style.borderBottom = "2px solid #3662d8";
    for(let i=1; i<=4; i++){
        let temp = s[0].children[i];
        temp.lastElementChild.style.color = "#343b53";
        temp.style.borderBottom = "none";
    }
}

let clickFlights = () =>{
    let flightSpan = s[0].children[1];
    flightSpan.lastElementChild.style.color = "#3662d8";
    flightSpan.style.borderBottom = "2px solid #3662d8";
    for(let i=0; i<=4; i++){
        if(i == 1){
            continue;
        }
        let temp = s[0].children[i];
        temp.lastElementChild.style.color = "#343b53";
        temp.style.borderBottom = "none";
    }
}

let clickCars = () =>{
    let carSpan = s[0].children[2];
    carSpan.lastElementChild.style.color = "#3662d8";
    carSpan.style.borderBottom = "2px solid #3662d8";
    for(let i=0; i<=4; i++){
        if(i == 2){
            continue;
        }
        let temp = s[0].children[i];
        temp.lastElementChild.style.color = "#343b53";
        temp.style.borderBottom = "none";
    }
}

let clickPack = () =>{
    let packSpan = s[0].children[3];
    packSpan.lastElementChild.style.color = "#3662d8";
    packSpan.style.borderBottom = "2px solid #3662d8";
    for(let i=0; i<=4; i++){
        if(i == 3){
            continue;
        }
        let temp = s[0].children[i];
        temp.lastElementChild.style.color = "#343b53";
        temp.style.borderBottom = "none";
    }
}

let clickThings = () =>{
    let thingsSpan = s[0].children[4];
    thingsSpan.lastElementChild.style.color = "#3662d8";
    thingsSpan.style.borderBottom = "2px solid #3662d8";
    for(let i=0; i<4; i++){
        let temp = s[0].children[i];
        temp.lastElementChild.style.color = "#343b53";
        temp.style.borderBottom = "none";
    }
}