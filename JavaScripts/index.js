
let s = document.getElementsByClassName("s_t");

let sb = document.getElementsByClassName('s_b');

let clickStay = (stayComp) =>{
    let staySpan = s[0].children[0];
    staySpan.lastElementChild.style.color = "#3662d8";
    staySpan.style.borderBottom = "2px solid #3662d8";
    for(let i=1; i<=4; i++){
        let temp = s[0].children[i];
        temp.lastElementChild.style.color = "#343b53";
        temp.style.borderBottom = "none";
    }
    sb[0].innerHTML = "";
    sb[0].innerHTML = stayComp();
}

let clickFlights = (flightComp) =>{
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
    sb[0].innerHTML = "";
    sb[0].innerHTML = flightComp();
}

let clickCars = (carsComp) =>{
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
    sb[0].innerHTML = "";
    sb[0].innerHTML = carsComp();
}

let clickPack = (packageComp) =>{
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
    sb[0].innerHTML = "";
    sb[0].innerHTML = packageComp();
}

let clickThings = (thingsComp) =>{
    let thingsSpan = s[0].children[4];
    thingsSpan.lastElementChild.style.color = "#3662d8";
    thingsSpan.style.borderBottom = "2px solid #3662d8";
    for(let i=0; i<4; i++){
        let temp = s[0].children[i];
        temp.lastElementChild.style.color = "#343b53";
        temp.style.borderBottom = "none";
    }
    sb[0].innerHTML = "";
    sb[0].innerHTML = thingsComp();
}

let seaCity = (searchCityComponent) =>{
    let temp = document.getElementsByClassName("temp");
    temp[0].innerHTML =  searchCityComponent();
}


export {clickStay, clickFlights, clickCars, clickPack, clickThings, seaCity};