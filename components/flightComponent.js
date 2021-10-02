let flightComponent = () =>{
    return `
    <div id="flightTravelDiv">
    <div>
        <button id="re" class="font_color_2 font_weight_3 font_size_1 background_color_1">Return</button>
        <button id="oneWay" class="font_color_1 font_weight_3 font_size_1 background_color_2">One-way</button>
        <button id="multi" class="font_color_1 font_weight_3 font_size_1 background_color_2">Multi-city</button>
    </div>
    <div>
        <p id="travel" class="font_color_2 font_size_1">
            1 traveller
            <span class="iconify" data-icon="dashicons:arrow-down-alt2" style="color: #3662d8;"></span>
        </p>
        <p id="economy" class="font_color_2 font_size_1">
            Economy
            <span class="iconify" data-icon="dashicons:arrow-down-alt2" style="color: #3662d8;"></span>
        </p>
    </div>
</div>
<div id="flightBtnDiv">
    <div class="font_family font_size_2 font_weight_2">
        <span class="iconify font_color_1" data-icon="carbon:location-filled" data-width="22" data-height="22"></span>
        <div>
            <span class="goingTo font_color_1">
                Leaving from
            </span>
            <div id="leavePlace">
                
            </div>
        </div>
    </div>
    <div class="font_family font_size_2 font_weight_2">
        <div>
        <span class="iconify font_color_1" data-icon="line-md:arrows-horizontal" data-flip="vertical"></span>
        </div>
        <span class="iconify font_color_1" data-icon="carbon:location-filled" data-width="22" data-height="22"></span>
        <div>
            <span class="goingTo font_color_1">
                Going to
            </span>
            <div id="goPlace">
                
            </div>
        </div>
    </div>
    <div class="font_family font_size_2 font_weight_2">
        <span class="iconify font_color_1" data-icon="ic:baseline-date-range" data-width="22" data-height="22"></span>
        <div>
            <span class="font_color_1 font_size_3">
                Departing
            </span>
            <div id="depart" class="font_color_1">

            </div>
        </div>
    </div>
    <div class="font_family font_size_2 font_weight_2">
        <span class="iconify font_color_1" data-icon="ic:baseline-date-range" data-width="22" data-height="22"></span>
        <div>
            <span class="font_color_1 font_size_3">
                Returning
            </span>
            <div id="return" class="font_color_1">

            </div>
        </div>
    </div>
</div>
<div id="searchBtnDiv">
    <button class="font_family font_size_2 font_weight_3">Search</button>
</div>
    `
}

export default flightComponent;