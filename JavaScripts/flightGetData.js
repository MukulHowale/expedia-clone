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

export default get;