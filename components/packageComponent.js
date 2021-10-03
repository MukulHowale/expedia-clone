let packageComponent = () =>{
    return `
    <div id="packTravelDiv">
    <div>
        <p id="travel" class="font_color_2 font_size_1">
            1 room
            <span class="iconify" data-icon="dashicons:arrow-down-alt2" style="color: #3662d8;"></span>
        </p>
        <p id="economy" class="font_color_2 font_size_1">
           2 travellers
            <span class="iconify" data-icon="dashicons:arrow-down-alt2" style="color: #3662d8;"></span>
        </p>
    </div>
</div>
<div id="packBtnDiv">
    <div class="font_family font_size_2 font_weight_2">
        <span class="iconify font_color_1" data-icon="carbon:location-filled" data-width="22" data-height="22"></span>
        <div>
            <span class="goingTo font_color_1 font_family">
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
            <span class="goingTo font_color_1 font_family">
                Going to
            </span>
            <div id="goPlace">
                
            </div>
        </div>
    </div>
    <div class="font_family font_size_2 font_weight_2">
        <span class="iconify font_color_1" data-icon="ic:baseline-date-range" data-width="22" data-height="22"></span>
        <div>
            <span class="font_color_1">
                Departing
            </span>
            <div id="depart" class="font_color_1 font_family">

            </div>
        </div>
    </div>
    <div class="font_family font_size_2 font_weight_2">
        <span class="iconify font_color_1" data-icon="ic:baseline-date-range" data-width="22" data-height="22"></span>
        <div>
            <span class="font_color_1">
                Returning
            </span>
            <div id="return" class="font_color_1 font_family">

            </div>
        </div>
    </div>
</div>
<div id="need">
    <span class="font_size_1 font_color_1 font_family">
        <input type="checkbox">
        I only need accommodation for part of my trip
    </span>
</div>
<div id="searchBtnDiv">
    <button class="font_family font_size_2 font_weight_3">Search</button>
</div>
    `
}

export default packageComponent;