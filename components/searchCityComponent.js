let searchCityComponent = () =>{
    return `
    <div class="searchCity">
        <div class="searchC">
            <input class="font_family font_weight_1" type="text" oninput="wait(main,1000)" id="val" placeholder="Where are you leaving from?">
        </div>
        <div class="show">

        </div>
    </div>
    `
}

export default searchCityComponent;