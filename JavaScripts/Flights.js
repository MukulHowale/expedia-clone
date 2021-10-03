let count = 0;

 


function peopleBooked()
{
  let traveller=document.getElementById("totalTraveller")
  let people=traveller.innerHTML
  thenum = people.match(/\d+/)[0] 
  //console.log(thenum)
  localStorage.setItem("totalTraveller", thenum);
  let anyName=document.querySelector(".traveller_part");
    anyName.style.display = "none";
}

 function travellerFunction()
 {
   count++;
     let anyName=document.querySelector(".traveller_part");
     if(anyName.style.display==="none" ){
        anyName.style.display = "block";
      }
     else{
        anyName.style.display = "none";
     }

     if(count == 2){
      let sb = document.getElementsByClassName("s_b");
      sb[0].children[0].children[1].children[0].style.visibility = "hidden";
      count = 1;
     }
}

function travellerFunctionHide()
{
    let anyName=document.querySelector(".traveller_part");
    anyName.style.display = "none";

    let sb = document.getElementsByClassName("s_b");
     sb[0].children[0].children[1].children[0].style.visibility = "visible"
}

function adultCountMinus()
{
  let div=document.getElementById("adultCount")
  let traveller=document.getElementById("totalTraveller")
  travellerText=traveller.innerHTML;
  var number = travellerText.match(/\d/g);
  number = number.join("");

  htmlContent=div.innerHTML;
  if(htmlContent!=0 )
  {
   div.innerHTML=htmlContent-1;
   traveller.innerHTML=number-1+" traveller ˅"; 
  }
}
 function childrenCountMinus()
 {
    let div=document.getElementById("childrenCount")
    htmlContent1=div.innerHTML;
    let traveller=document.getElementById("totalTraveller")
  travellerText=traveller.innerHTML;
  var number = travellerText.match(/\d/g);
  number = number.join("");

   if(htmlContent1!=0 ){
    div.innerHTML=htmlContent1-1;
    traveller.innerHTML=number-1+" traveller ˅"; 
  }
 }

 function infantsCountMinus()
 {
    let div=document.getElementById("infantsCount")
    htmlContent2=div.innerHTML;
    let traveller=document.getElementById("totalTraveller")
  travellerText=traveller.innerHTML;
  var number = travellerText.match(/\d/g);
  number = number.join("");

    if(htmlContent2!=0 ){
    div.innerHTML=htmlContent2-1;
    traveller.innerHTML=number-1+" traveller ˅"; 
   }
}

function adultCountPlus()
{
    let div=document.getElementById("adultCount")
  htmlContent=div.innerHTML;
  let traveller=document.getElementById("totalTraveller")
  travellerText=traveller.innerHTML;
  var number = travellerText.match(/\d/g);
  number = number.join("");

   if(htmlContent!=6 ){
  div.innerHTML=htmlContent-1+2;
  traveller.innerHTML=number-1+2+" traveller ˅"; 
  }
}

function childrenCountPlus()
{
    let div=document.getElementById("childrenCount")
  htmlContent=div.innerHTML;
  let traveller=document.getElementById("totalTraveller")
  travellerText=traveller.innerHTML;
  var number = travellerText.match(/\d/g);
  number = number.join("");

   if(htmlContent!=6 ){
  div.innerHTML=htmlContent-1+2;
  traveller.innerHTML=number-1+2+" traveller ˅"; 
  }
}

function infantsCountPlus()
{
    let div=document.getElementById("infantsCount")
  htmlContent=div.innerHTML;
  let traveller=document.getElementById("totalTraveller")
  travellerText=traveller.innerHTML;
  var number = travellerText.match(/\d/g);
  number = number.join("");

   if(htmlContent!=6 ){
  div.innerHTML=htmlContent-1+2;
  traveller.innerHTML=number-1+2+" traveller ˅"; 
  }
}


/*-----------------------------------
-----------------------------------------
-----------------------------------------------
-----------------------------------------------------*/
async function selectDirectFlights()
{
  let myNode = document.querySelector(".display");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
  let sizeOfData=data.length;
  let displayDiv=document.querySelector(".display");
  for(let i=0;i<sizeOfData;i++)
  {
    var index=i;
    if(data[i].stop==="Direct")
    {
    let displayClass=document.createElement("div")
    displayDiv.appendChild(displayClass);
    displayClass.className="classInDisplay";
     displayClass.addEventListener('click', function(){
    move(i)});
      let div=document.createElement("div")
      div.className="inDisplay";
      let divv=document.createElement("div")
      let divvv=document.createElement("div")
      div.appendChild(divv)
      div.appendChild(divvv)
      let div1=document.createElement("div")
      let div2=document.createElement("div")
      displayClass.appendChild(div)
      displayClass.appendChild(div1)
      displayClass.appendChild(div2)
      divv.innerHTML=data[i].time;
      divvv.innerHTML=data[i].airline;
      div1.innerHTML=data[i].stop;
      div2.innerHTML="Rs"+data[i].price;
    }
  }
}


/*-----------------------------------
-----------------------------------------
-----------------------------------------------
-----------------------------------------------------*/
async function selectIndigo()
{
  let myNode = document.querySelector(".display");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
  let sizeOfData=data.length;
  let displayDiv=document.querySelector(".display");
  for(let i=0;i<sizeOfData;i++)
  {
    if(data[i].airline==="IndiGo")
    {
    let displayClass=document.createElement("div")
    displayDiv.appendChild(displayClass);
    displayClass.className="classInDisplay";
    displayClass.addEventListener('click', function(){
    move(i)});
          let div=document.createElement("div")
      div.className="inDisplay";
      let divv=document.createElement("div")
      let divvv=document.createElement("div")
      div.appendChild(divv)
      div.appendChild(divvv)
      let div1=document.createElement("div")
      let div2=document.createElement("div")
      displayClass.appendChild(div)
      displayClass.appendChild(div1)
      displayClass.appendChild(div2)
      divv.innerHTML=data[i].time;
      divvv.innerHTML=data[i].airline;
      div1.innerHTML=data[i].stop;
      div2.innerHTML="Rs"+data[i].price;
    }
  }
}


/*-----------------------------------
-----------------------------------------
-----------------------------------------------
-----------------------------------------------------*/
async function selectVistara()
{
  let myNode = document.querySelector(".display");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
  let sizeOfData=data.length;
  let displayDiv=document.querySelector(".display");
  for(let i=0;i<sizeOfData;i++)
  {
    if(data[i].airline==="Vistara")
    {
    let displayClass=document.createElement("div")
    displayDiv.appendChild(displayClass);
    displayClass.className="classInDisplay";
    displayClass.addEventListener('click', function(){
    move(i)});
      let div=document.createElement("div")
      div.className="inDisplay";
      let divv=document.createElement("div")
      let divvv=document.createElement("div")
      div.appendChild(divv)
      div.appendChild(divvv)
      let div1=document.createElement("div")
      let div2=document.createElement("div")
      displayClass.appendChild(div)
      displayClass.appendChild(div1)
      displayClass.appendChild(div2)
      divv.innerHTML=data[i].time;
      divvv.innerHTML=data[i].airline;
      div1.innerHTML=data[i].stop;
      div2.innerHTML="Rs"+data[i].price;
    }
  }
}

/*-----------------------------------
-----------------------------------------
-----------------------------------------------
-----------------------------------------------------*/

async function selectOneStopFlights()
{
  let myNode = document.querySelector(".display");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }

  let sizeOfData=data.length;
  let displayDiv=document.querySelector(".display");
  for(let i=0;i<sizeOfData;i++)
  {
    if(data[i].stop==="1_stop")
    {
    let displayClass=document.createElement("div")
    displayDiv.appendChild(displayClass);
    displayClass.className="classInDisplay";
    displayClass.addEventListener('click', function(){
    move(i)}); 
      let div=document.createElement("div")
      div.className="inDisplay";
      let divv=document.createElement("div")
      let divvv=document.createElement("div")
      div.appendChild(divv)
      div.appendChild(divvv)
      let div1=document.createElement("div")
      let div2=document.createElement("div")
      displayClass.appendChild(div)
      displayClass.appendChild(div1)
      displayClass.appendChild(div2)
      divv.innerHTML=data[i].time;
      divvv.innerHTML=data[i].airline;
      div1.innerHTML=data[i].stop;
      div2.innerHTML="Rs"+data[i].price;
    }
  }
}

/*-----------------------------------
-----------------------------------------
-----------------------------------------------
-----------------------------------------------------*/
var data;
async function loadFlights()
{

  let myNode = document.querySelector(".display");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
  let res= await fetch("http://localhost:5000/api/flights")
   data=await res.json()
 // console.log(data[0].time)
  let sizeOfData=data.length;
  let displayDiv=document.querySelector(".display");
  data.sort(function(a, b) {
    return parseFloat(a.price) - parseFloat(b.price);
});


 var minIndigo=100000000;
 var vistara=100000000;
 var minDirect=10000000;
 var oneStop=10000000;

  for(let i=0;i<sizeOfData;i++)
  {
    /*
    if(data[i].price<minIndigo && data[i].airline==="IndiGo"){
      minIndigo=data[i].price;
    }
    if(data[i].price<vistara && data[i].airline==="Vistara"){
      vistara=data[i].price;
    }
    if(data[i].price<minDirect && data[i].stop==="Direct"){
      minDirect=data[i].price;
    }
    if(data[i].price<oneStop && data[i].stop==="1_stop"){
      oneStop=data[i].price;
    }
*/

    let displayClass=document.createElement("div")
    displayDiv.appendChild(displayClass);
    displayClass.className="classInDisplay";
    displayClass.addEventListener('click', function(){
    move(i)});
   
      let div=document.createElement("div")
      div.className="inDisplay";
      let divv=document.createElement("div")
      let divvv=document.createElement("div")
      div.appendChild(divv)
      div.appendChild(divvv)


      let div1=document.createElement("div")
      let div2=document.createElement("div")

      displayClass.appendChild(div)
      displayClass.appendChild(div1)
      displayClass.appendChild(div2)
      divv.innerHTML=data[i].time;
      divvv.innerHTML=data[i].airline;
      div1.innerHTML=data[i].stop;
      div2.innerHTML="Rs"+data[i].price;
  }
}

loadFlights();

function check(name)
{
  if(name==="Lowest")
  {
    loadFlights();
  }
  else{
    loadFlightsDes();
  }
}

/*-----------------------------------
-----------------------------------------
-----------------------------------------------
-----------------------------------------------------*/
async function loadFlightsDes()
{
  let myNode = document.querySelector(".display");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
  let sizeOfData=data.length;
  let displayDiv=document.querySelector(".display");
  data.sort(function(a, b) {
    return parseFloat(b.price) - parseFloat(a.price);
});
  for(let i=0;i<sizeOfData;i++)
  {
    let displayClass=document.createElement("div")
    displayDiv.appendChild(displayClass);
    displayClass.className="classInDisplay";
    displayClass.addEventListener('click', function(){
    move(i)});     
     let div=document.createElement("div")
      div.className="inDisplay";
      let divv=document.createElement("div")
      let divvv=document.createElement("div")
      div.appendChild(divv)
      div.appendChild(divvv)
      let div1=document.createElement("div")
      let div2=document.createElement("div")
      displayClass.appendChild(div)
      displayClass.appendChild(div1)
      displayClass.appendChild(div2)
      divv.innerHTML=data[i].time;
      divvv.innerHTML=data[i].airline;
      div1.innerHTML=data[i].stop;
      div2.innerHTML="Rs"+data[i].price;
  }
}

/*-----------------------------------
-----------------------------------------
-----------------------------------------------
-----------------------------------------------------*/

/*-----------------------------------
-----------------------------------------
-----------------------------------------------
-----------------------------------------------------*/
async function changeDepartureColor(color,div)
{
  if(div=="classOfTime1")
  {
    let a=document.querySelector(".classOfTime1");
    a.style.background=color ;
    a.style.color='white';
    let i=document.querySelector(".classOfTime2");
    i.style.background='white' ;
    i.style.color='black' ;
    let j=document.querySelector(".classOfTime3");
    j.style.background='white' ;
    j.style.color='black' ;

    let myNode = document.querySelector(".display");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
  let sizeOfData=data.length;
  let displayDiv=document.querySelector(".display");
  for(let i=0;i<sizeOfData;i++)
  {

      let str = data[i].departTime;
           matches = str.match(/\d+/g);  
             str   = matches[0] + matches[1] ;
    if(str>500 && str<1159)
    {
    let displayClass=document.createElement("div")
    displayDiv.appendChild(displayClass);
    displayClass.className="classInDisplay";
    displayClass.addEventListener('click', function(){
    move(i)});           let div=document.createElement("div")
      div.className="inDisplay";
      let divv=document.createElement("div")
      let divvv=document.createElement("div")
      div.appendChild(divv)
      div.appendChild(divvv)
      let div1=document.createElement("div")
      let div2=document.createElement("div")
      displayClass.appendChild(div)
      displayClass.appendChild(div1)
      displayClass.appendChild(div2)
      divv.innerHTML=data[i].time;
      divvv.innerHTML=data[i].airline;
      div1.innerHTML=data[i].stop;
      div2.innerHTML="Rs"+data[i].price;
    }
  }

  }
  else if(div=="classOfTime2")
  {
    let b=document.querySelector(".classOfTime2");
    b.style.background=color ;
    b.style.color='white';
    let c=document.querySelector(".classOfTime1");
    c.style.background='white' ;
    c.style.color='black' ;
    let d=document.querySelector(".classOfTime3");
    d.style.background='white' ;
    d.style.color='black' ;
    let myNode = document.querySelector(".display");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
    let sizeOfData=data.length;
  let displayDiv=document.querySelector(".display");
  for(let i=0;i<sizeOfData;i++)
  {

      let str = data[i].departTime;
           matches = str.match(/\d+/g);  
             str   = matches[0] + matches[1] ;
    if(str>=1200 && str<=1759)
    {
    let displayClass=document.createElement("div")
    displayDiv.appendChild(displayClass);
    displayClass.className="classInDisplay";
    displayClass.addEventListener('click', function(){
    move(i)});           let div=document.createElement("div")
      div.className="inDisplay";
      let divv=document.createElement("div")
      let divvv=document.createElement("div")
      div.appendChild(divv)
      div.appendChild(divvv)
      let div1=document.createElement("div")
      let div2=document.createElement("div")
      displayClass.appendChild(div)
      displayClass.appendChild(div1)
      displayClass.appendChild(div2)
      divv.innerHTML=data[i].time;
      divvv.innerHTML=data[i].airline;
      div1.innerHTML=data[i].stop;
      div2.innerHTML="Rs"+data[i].price;
    }
  }


  }
   else if(div=="classOfTime3")
  {
    let e=document.querySelector(".classOfTime3");
    e.style.background=color ;
    e.style.color='white';
    let f=document.querySelector(".classOfTime1");
    f.style.background='white' ;
    f.style.color='black' ;
    let g=document.querySelector(".classOfTime2");
    g.style.background='white' ;
    g.style.color='black' ;
   
  let myNode = document.querySelector(".display");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
    let sizeOfData=data.length;
  let displayDiv=document.querySelector(".display");
  for(let i=0;i<sizeOfData;i++)
  {

      let str = data[i].departTime;
           matches = str.match(/\d+/g);  
             str   = matches[0] + matches[1] ;
    if(str>=1700 && str<=2359)
    {
    let displayClass=document.createElement("div")
    displayDiv.appendChild(displayClass);
    displayClass.className="classInDisplay";
    displayClass.addEventListener('click', function(){
    move(i)});           let div=document.createElement("div")
      div.className="inDisplay";
      let divv=document.createElement("div")
      let divvv=document.createElement("div")
      div.appendChild(divv)
      div.appendChild(divvv)
      let div1=document.createElement("div")
      let div2=document.createElement("div")
      displayClass.appendChild(div)
      displayClass.appendChild(div1)
      displayClass.appendChild(div2)
      divv.innerHTML=data[i].time;
      divvv.innerHTML=data[i].airline;
      div1.innerHTML=data[i].stop;
      div2.innerHTML="Rs"+data[i].price;
    }
  }
  }
}

function move(m)
{
  let time=data[m].time
  let stop=data[m].stop
   let price= data[m].price
   let Airlines= data[m].airline
   let arr=[time,stop,price,Airlines];
   console.log(arr)
   localStorage.setItem("flightDetails",JSON.stringify (arr));
  window.location="flightsCheckout.html"
}