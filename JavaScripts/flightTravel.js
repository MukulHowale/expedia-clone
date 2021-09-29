
let sb = document.getElementsByClassName('s_b');

let re = () =>{
    let retBtn = sb[0].children[0].children[0].children[0];
    retBtn.style.backgroundColor = "#E7EDFD";
    retBtn.style.color = "#3662d8";
    for(let i=1; i<=2; i++){
        sb[0].children[0].children[0].children[i].style.backgroundColor = "white";
        sb[0].children[0].children[0].children[i].style.color = "#343b53";
    }

    sb[0].children[1].children[3].style.display = "";
    sb[0].children[1].children[2].style.width = "15%";

    sb[0].children[0].children[0].children[1].onmouseover = () =>{
        sb[0].children[0].children[0].children[1].style.backgroundColor = "#E7EDFD";
        sb[0].children[0].children[0].children[1].style.color = "#3662d8";
    }
    sb[0].children[0].children[0].children[1].onmouseleave = () =>{
        sb[0].children[0].children[0].children[1].style.backgroundColor = "white";
        sb[0].children[0].children[0].children[1].style.color = "#343b53";
    }

    sb[0].children[0].children[0].children[2].onmouseover = () =>{
        sb[0].children[0].children[0].children[2].style.backgroundColor = "#E7EDFD";
        sb[0].children[0].children[0].children[2].style.color = "#3662d8";
    }
    sb[0].children[0].children[0].children[2].onmouseleave = () =>{
        sb[0].children[0].children[0].children[2].style.backgroundColor = "white";
        sb[0].children[0].children[0].children[2].style.color = "#343b53";
    }

    sb[0].children[0].children[0].children[0].onmouseover = null;
    sb[0].children[0].children[0].children[0].onmouseleave = null;

}

let oneWay = () =>{
    let oneWayBtn = sb[0].children[0].children[0].children[1];
    oneWayBtn.style.backgroundColor = "#E7EDFD";
    oneWayBtn.style.color = "#3662d8";
    for(let i=0; i<=2; i++){
        if(i == 1){
            continue;
        }
        sb[0].children[0].children[0].children[i].style.backgroundColor = "white";
        sb[0].children[0].children[0].children[i].style.color = "#343b53";
    }
    sb[0].children[1].children[3].style.display = "none";
    sb[0].children[1].children[2].style.width = "30%";

    sb[0].children[0].children[0].children[0].onmouseover = () =>{
        sb[0].children[0].children[0].children[0].style.backgroundColor = "#E7EDFD";
        sb[0].children[0].children[0].children[0].style.color = "#3662d8";
    }
    sb[0].children[0].children[0].children[0].onmouseleave = () =>{
        sb[0].children[0].children[0].children[0].style.backgroundColor = "white";
        sb[0].children[0].children[0].children[0].style.color = "#343b53";
    }

    sb[0].children[0].children[0].children[2].onmouseover = () =>{
        sb[0].children[0].children[0].children[2].style.backgroundColor = "#E7EDFD";
        sb[0].children[0].children[0].children[2].style.color = "#3662d8";
    }
    sb[0].children[0].children[0].children[2].onmouseleave = () =>{
        sb[0].children[0].children[0].children[2].style.backgroundColor = "white";
        sb[0].children[0].children[0].children[2].style.color = "#343b53";
    }

    sb[0].children[0].children[0].children[1].onmouseover = null;
    sb[0].children[0].children[0].children[1].onmouseleave = null;
}

let multi = () =>{
    let multiBtn = sb[0].children[0].children[0].children[2];
    multiBtn.style.backgroundColor = "#E7EDFD";
    multiBtn.style.color = "#3662d8";
    for(let i=0; i<=1; i++){
        sb[0].children[0].children[0].children[i].style.backgroundColor = "white";
        sb[0].children[0].children[0].children[i].style.color = "#343b53";
    }

    sb[0].children[0].children[0].children[0].onmouseover = () =>{
        sb[0].children[0].children[0].children[0].style.backgroundColor = "#E7EDFD";
        sb[0].children[0].children[0].children[0].style.color = "#3662d8";
    }
    sb[0].children[0].children[0].children[0].onmouseleave = () =>{
        sb[0].children[0].children[0].children[0].style.backgroundColor = "white";
        sb[0].children[0].children[0].children[0].style.color = "#343b53";
    }

    sb[0].children[0].children[0].children[1].onmouseover = () =>{
        sb[0].children[0].children[0].children[1].style.backgroundColor = "#E7EDFD";
        sb[0].children[0].children[0].children[1].style.color = "#3662d8";
    }
    sb[0].children[0].children[0].children[1].onmouseleave = () =>{
        sb[0].children[0].children[0].children[1].style.backgroundColor = "white";
        sb[0].children[0].children[0].children[1].style.color = "#343b53";
    }

    sb[0].children[0].children[0].children[2].onmouseover = null;
    sb[0].children[0].children[0].children[2].onmouseleave = null
}

export {re, oneWay, multi};