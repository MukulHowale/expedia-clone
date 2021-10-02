
let cal = () =>{
    // console.log(depDiv);
    let d = new Date();

    let dateDiv = document.getElementsByClassName("dateDiv");

    let complete = d.toString().split(" ")

    let ShowD = `${complete[0]} ${complete[2]} ${complete[1]}`;

    dateDiv[0].children[0].innerText = ShowD;

    console.log(complete);

    // console.log(dateDiv[0].children[0]);

    let monthDiv = document.getElementsByClassName("monthDiv");

    let mon = d.getMonth();

    let yea = d.getFullYear();

    let endDate;

    switch(mon){
        case 0:
            mon = "January";
            endDate = 31;
            break;
        case 1:
            mon = "February";
            endDate = 30;
            break;
        case 2:
            mon = "March";
            endDate = 31;
            break;
        case 3:
            mon = "April";
            endDate = 30;
            break;
        case 4:
            mon = "May";
            endDate = 31;
            break;
        case 5:
            mon = "June";
            endDate = 30;
            break;
        case 6:
            mon = "July";
            endDate = 31;
            break;
        case 7:
            mon = "August";
            endDate = 31;
            break;
        case 8:
            mon = "September";
            endDate = 30;
            break;
        case 9:
            mon = "October";
            endDate = 31;
            break;
        case 10:
            mon = "November";
            endDate = 30;
            break;
        case 11:
            mon = "December";
            endDate = 31;
            break;
        default:
            break;
    }

    monthDiv[0].children[1].innerText = `${mon} ${yea}`;



    let da = document.getElementsByClassName("dates")[0].children;

    let newDate = new Date(`${mon} 1, ${yea}`);

    let newD = newDate.getDay();

    for(let i=1,j=newD; i<=endDate; i++,j++){
        da[j].innerText = i;
        if(i < d.getDate()){
            da[j].style.color = "rgb(150, 150, 150, 0.527)";
        }
        else{
            da[j].style.color = "#343b53";
            da[j].style.cursor = "pointer";
            da[j].addEventListener("click",selectDate);
        }
    }
    // console.log(da);

}

let selectDate = (e) =>{
    let da = document.getElementsByClassName("dates")[0].children
    // console.log(da);
    for(let i=6; i<=35; i++){
        if(da[i] != e.target){
            da[i].style.backgroundColor = "white";
            da[i].style.color = "#343b53";
        }
    }
    e.target.style.backgroundColor = "#3662d8";
    e.target.style.color = "white";
    // console.log(e.target);

    let mDiv = document.getElementsByClassName("monthDiv")[0].children[1].innerText.split(" ");

    let month = mDiv[0];

    let year = mDiv[1];

    let tempDate = new Date(`${month} ${e.target.innerText}, ${year}`);

    let todayDate = tempDate.getDay();

    let todayDay;

    switch(todayDate){
        case 0:
            todayDay = "Sun";
            break;
        case 1:
            todayDay = "Mon";
            break;
        case 2:
            todayDay = "Tue";
            break;
        case 3:
            todayDay = "Wed";
            break;
        case 4:
            todayDay = "Thu";
            break;
        case 5:
            todayDay = "Fri";
            break;
        case 6:
            todayDay = "Sat";
            break;
        default:
            break;
    }

    let dDiv = document.getElementsByClassName("dateDiv")[0].children[0];

    let tempD;

    if(e.target.innerText.charAt(1) == ""){
        tempD = `0${e.target.innerText}`;
    }
    else{
        tempD = e.target.innerText;
    }

    dDiv.innerText = `${todayDay} ${tempD} ${month.slice(0, 3)}`;

}

export default cal;