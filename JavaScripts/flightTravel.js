let travel = document.getElementById("flightTravelDiv").children;

let flight = document.getElementById("flightBtnDiv").children;

let re = () =>{
    let retBtn = travel[0].children[0];
    retBtn.style.backgroundColor = "#E7EDFD";
    retBtn.style.color = "#3662d8";
    for(let i=1; i<=2; i++){
        travel[0].children[i].style.backgroundColor = "white";
        travel[0].children[i].style.color = "#343b53";
    }

    flight[3].style.display = "";
    flight[2].style.width = "15%";
}

let oneWay = () =>{
    let oneWayBtn = travel[0].children[1];
    oneWayBtn.style.backgroundColor = "#E7EDFD";
    oneWayBtn.style.color = "#3662d8";
    for(let i=0; i<=2; i++){
        if(i == 1){
            continue;
        }
        travel[0].children[i].style.backgroundColor = "white";
        travel[0].children[i].style.color = "#343b53";
    }
    flight[3].style.display = "none";
    flight[2].style.width = "30%";

    console.log(flight);
}

let multi = () =>{
    let multiBtn = travel[0].children[2];
    multiBtn.style.backgroundColor = "#E7EDFD";
    multiBtn.style.color = "#3662d8";
    for(let i=0; i<=1; i++){
        travel[0].children[i].style.backgroundColor = "white";
        travel[0].children[i].style.color = "#343b53";
    }
}