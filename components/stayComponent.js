let stayComponent = () =>{
    return `
    <div id="stayBtnDiv">
    <button class="font_family font_size_2 font_weight_2">
        <span class="iconify font_color_1" data-icon="carbon:location-filled" data-width="22" data-height="22"></span>
        <div>
            <span id="goingTo" class="font_color_1">
                Going to
            </span>
            <div id="place">
                
            </div>
        </div>
    </button>
    <button class="font_family font_size_2 font_weight_2">
        <span class="iconify font_color_1" data-icon="ic:baseline-date-range" data-width="22" data-height="22"></span>
        <div>
            <span class="font_color_1">
                Check-in
            </span>
            <div id="checkIn" class="font_color_1">

            </div>
        </div>
    </button>
    <button class="font_family font_size_2 font_weight_2">
        <span class="iconify font_color_1" data-icon="ic:baseline-date-range" data-width="22" data-height="22"></span>
        <div>
            <span class="font_color_1">
                Check-out
            </span>
            <div id="checkOut" class="font_color_1">

            </div>
        </div>
    </button>
    <button class="font_family font_size_3 font_weight_2">
        <span class="iconify font_color_1" data-icon="bi:person-fill" data-width="22" data-height="22"></span>
        <div>
            <span class="font_color_1">
                Travellers
            </span>
            <div id="checkIn" class="font_size_2 font_color_1">
                <span>
                    1 room,
                </span>
                <span>
                    2 travellers
                </span>
            </div>
        </div>
    </button>
    </div>
    <div id="searchBtnDiv">
        <button class="font_family font_size_2 font_weight_3">Search</button>
    </div>
    `
}

export default stayComponent;