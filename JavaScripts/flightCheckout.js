
function onLoad() {   
    let a=localStorage.getItem("totalTraveller");
    document.getElementById("travellers").innerHTML = "Travellers (" +a+")" ;
    let city = JSON.parse(localStorage.getItem('storeCityDate'));
    let from=city[0].DepartCity;
    let to=city[0].ArriveCity;
    let priceOfEach=JSON.parse(localStorage.getItem('flightDetails'));

    let source=priceOfEach[0].slice(0, 5) 
    let destination=priceOfEach[0].slice(7, 13) 
    document.querySelector(".journey").innerHTML=from+" to "+to
    document.querySelector(".source").innerHTML="  "+source+"  "+from
    document.querySelector(".destination").innerHTML="  "+destination+"  "+from
  
    document.getElementById("travellerAmount").innerHTML="Rs "+priceOfEach[2]*a
    document.querySelector(".finalAmount").innerHTML="Rs "+priceOfEach[2]*a
    document.getElementById("priceOfOneFlight").innerHTML="Rs "+priceOfEach[2]
    let taxes= priceOfEach[2]*3*0.18
    var intvalue =Math.trunc( taxes ); 
    document.querySelector(".amountGST").innerHTML="Rs "+intvalue
    document.querySelector(".airline").innerHTML=priceOfEach[3]

}

onLoad()

function move()
{
  window.location="priceCheckout.html"
}


