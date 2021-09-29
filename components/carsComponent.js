let carsComponent = () =>{
    return `
    <div id="carsDiv">
                        <div>
                            <button id="re" class="font_color_2 font_weight_3 font_size_1 background_color_1">Rental cars</button>
                            <button id="oneWay" class="font_color_1 font_weight_3 font_size_1 background_color_2">Airport transport</button>
                        </div>
                    </div>
                    <div id="carsTravelBtnDiv">
                        <div class="font_family font_size_2 font_weight_2">
                            <span class="iconify font_color_1" data-icon="carbon:location-filled" data-width="22" data-height="22"></span>
                            <div>
                                <span class="goingTo font_color_1">
                                    Pick-up
                                </span>
                                <div id="leavePlace">
                                    
                                </div>
                            </div>
                        </div>
                        <div class="font_family font_size_2 font_weight_2">
                            <span class="iconify font_color_1" data-icon="carbon:location-filled" data-width="22" data-height="22"></span>
                            <div>
                                <span class="goingTo font_color_1">
                                    Drop-off
                                </span>
                                <div id="goPlace">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="carsDateBtnDiv">
                        <div class="font_family font_size_2 font_weight_2">
                            <span class="iconify font_color_1" data-icon="ic:baseline-date-range" data-width="22" data-height="22"></span>
                            <div>
                                <span class="goingTo font_color_1">
                                    Pick-up date
                                </span>
                                <div id="leavePlace">
                                    
                                </div>
                            </div>
                        </div>
                        <div class="font_family font_size_2 font_weight_2">
                            <span class="iconify font_color_1" data-icon="ic:baseline-date-range" data-width="22" data-height="22"></span>
                            <div>
                                <span class="goingTo font_color_1">
                                    Drop-off date
                                </span>
                                <div id="goPlace">
                                    
                                </div>
                            </div>
                        </div>
                        <div class="font_family font_size_2 font_weight_2">
                            <span class="iconify" data-icon="ant-design:clock-circle-outlined" data-width="22" data-height="22"></span>
                            <div>
                                <span class="goingTo font_color_1">
                                    Pick-up time
                                </span>
                                <div id="leavePlace">
                                    
                                </div>
                            </div>
                        </div>
                        <div class="font_family font_size_2 font_weight_2">
                            <span class="iconify" data-icon="ant-design:clock-circle-outlined" data-width="22" data-height="22"></span>
                            <div>
                                <span class="goingTo font_color_1">
                                    Drop-off time
                                </span>
                                <div id="goPlace">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="searchBtnDiv">
                        <button class="font_family font_size_2 font_weight_3">Search</button>
                    </div>
    `
}

export default carsComponent;