let stayComponent = () =>{
    return `
    <div id="stayBtnDiv">
    <div class="font_family font_size_2 font_weight_2">
        <span class="iconify font_color_1" data-icon="carbon:location-filled" data-width="22" data-height="22"></span>
        <div>
            <span class="goingTo font_color_1 font_family">
                Going to
            </span>
            <div id="place">
                
            </div>
        </div>
    </div>
    <div class="font_family font_size_2 font_weight_2">
        <span class="iconify font_color_1" data-icon="ic:baseline-date-range" data-width="22" data-height="22"></span>
        <div>
            <span class="font_color_1">
                Check-in
            </span>
            <div id="checkIn" class="font_color_1 font_family">

            </div>
        </div>
    </div>
    <div class="font_family font_size_2 font_weight_2">
        <span class="iconify font_color_1" data-icon="ic:baseline-date-range" data-width="22" data-height="22"></span>
        <div>
            <span class="font_color_1">
                Check-out
            </span>
            <div id="checkOut" class="font_color_1 font_family">

            </div>
        </div>
    </div>
    <div class="font_family font_size_3 font_weight_2">
        <span class="iconify font_color_1" data-icon="bi:person-fill" data-width="22" data-height="22"></span>
        <div>
            <span class="font_color_1">
                Travellers
            </span>
            <div id="roomTravel" class="font_size_2 font_color_1">
                <span class="font_family">
                    1 room,
                </span>
                <span class="font_family">
                    2 travellers
                </span>
            </div>
        </div>
    </div>
    </div>
    <div id="searchBtnDiv">
        <button class="font_family font_size_2 font_weight_3">Search</button>
    </div>
    `
}

export default stayComponent;