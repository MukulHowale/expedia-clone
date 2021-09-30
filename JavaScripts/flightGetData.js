let timerId;

let show = document.getElementsByClassName("show")[0];

let showDetails = (e) =>{
    

    console.log(e.target);
}

let appendCity = (m) =>{
    show.innerHTML = null;

    let n = m.Places
  
    // console.log(show);
  
    n.forEach(({PlaceName,PlaceId,CountryName}) =>{
        let div = document.createElement('div');
        div.setAttribute("class","cityDiv")
        div.addEventListener('click',showDetails);

        let d1 = document.createElement("div");
        d1.setAttribute("class",'d1');

        let divP = document.createElement("div");
        divP.setAttribute("class","divP");

        d1.append(divP);


        let divp1 = document.createElement("div");
        divp1.setAttribute("class","divp1");


        let d2 = document.createElement("div");
        d2.setAttribute("class","d2");
  
        let p1 = document.createElement('p');
        p1.innerText = PlaceName;

        let placeid = PlaceId.slice(0, 3);
  
        let p2 = document.createElement('p');
        p2.innerText = `(${placeid})`;

        d2.append(p1, p2);

        let p3 = document.createElement('p');
        p3.innerText = CountryName;


        divp1.append(d2,p3);
  
        // console.log(PlaceName);
  
        div.append(d1,divp1);
  
        show.append(div);
        
    })
  
    // if(n.length >= 4){
    //     show.style.overflow = "scroll";
    //     show.style.overflowX = "hidden";
    //     show.style.borderBottomRightRadius = "5px";
    // }
    // else if(n.length == 4){
    //     show.style.borderBottomRightRadius = "20px";
    //     if(show.style.overflowY){
    //         show.style.overflowY = "hidden";
    //     }
    // }
    // else{
    //     let temp = show.firstChild;
    //     while(temp != show.lastChild){
    //         temp = temp.nextSibling;
    //     }
    //     show.style.overflow = "hidden";
    //     show.lastChild.style.borderBottomLeftRadius = "20px";
    //     show.lastChild.style.borderBottomRightRadius = "20px";
    //     show.style.border = "0px";
    // }
}

let main = async () =>{
    let name = document.getElementsByClassName("searchCity")[0].children[0].children[0].value;
  
    if(name.length < 3){
        return false;
    }
  
    let cityNames = await get(name);
  
    if(cityNames === undefined){
        return false;
    }
  
    appendCity(cityNames);
  
    // console.log(cityNames);
  }

let wait = (fun,t) =>{
    if(timerId){
      clearTimeout(timerId);
    }
  
    timerId = setTimeout(() =>{
      fun();
    },t)
  }

let get = async (city) =>{
    let getRes = await fetch(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/IN/INR/en-IN/?query=${city}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
            "x-rapidapi-key": "cf35843300msh73cf41c7deccac4p18c0e9jsn631048041f5c"
        }
    })

    let res = await getRes.json()

    return res;
}

export {wait, main};