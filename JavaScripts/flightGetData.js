let timerId;

let f;

let leaveText;

let putText;

// console.log(show);

let showDetails = (e) =>{

    leaveText.setAttribute("class","font_size_3")
    leaveText.style.fontSize = "12px";

    putText.innerText = `${e.target.children[0].innerText} ${e.target.children[1].innerText}`

    let sC = document.getElementsByClassName("temp")[0];

    sC.innerHTML = "";
}

let appendCity = (m) =>{
    let show = document.getElementsByClassName("searchCity")[0].children[1];

    show.innerHTML = null;

    let n = m.Places
  
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

let check = (pl) =>{
    let sb = document.getElementsByClassName("s_b");

    if(pl == 1){
        f = sb[0].children[1].children[0];
        leaveText = f.children[1].children[0];
        putText = f.children[1].children[1];
    }
    else{
        f = sb[0].children[1].children[1];
        leaveText = f.children[2].children[0];
        putText = f.children[2].children[1];
    }
}

let saveCityDate = () =>{
    let sb = document.getElementsByClassName("s_b");

    let l = sb[0].children[1].children[0].children[1].children[1].innerText;

    let g = sb[0].children[1].children[1].children[2].children[1].innerText;

    let d = sb[0].children[1].children[2].children[1].children[1].children[0].value;

    localStorage.setItem("storeCityDate", JSON.stringify([
        {
            "DepartCity" : l,
            "ArriveCity" : g,
            "Date" : d
        }
    ]))

    var temp = JSON.parse(localStorage.getItem("storeCityDate"));

    console.log(temp);

    window.location = "./HTML/Flights.html";
}

export {wait, main, check, saveCityDate};