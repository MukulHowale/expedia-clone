let thingsComponent = () =>{
    return `
    <div id="thingsBtnDiv">
                        <div class="font_family font_size_2 font_weight_2">
                            <span class="iconify font_color_1" data-icon="carbon:location-filled" data-width="22" data-height="22"></span>
                            <div>
                                <span class="goingTo font_color_1 font_family">
                                    Things to do in
                                </span>
                                <div id="leavePlace">
                                    
                                </div>
                            </div>
                        </div>
                        <div class="font_family font_size_2 font_weight_2">
                            <span class="iconify font_color_1" data-icon="ic:baseline-date-range" data-width="22" data-height="22"></span>
                            <div>
                                <span class="font_color_1">
                                    From
                                </span>
                                <div id="depart" class="font_color_1 font_family">
                    
                                </div>
                            </div>
                        </div>
                        <div class="font_family font_size_2 font_weight_2">
                            <span class="iconify font_color_1" data-icon="ic:baseline-date-range" data-width="22" data-height="22"></span>
                            <div>
                                <span class="font_color_1">
                                    To
                                </span>
                                <div id="return" class="font_color_1 font_family">
                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="searchBtnDiv">
                        <button class="font_family font_size_2 font_weight_3">Search</button>
                    </div>
    `
}

export default thingsComponent;