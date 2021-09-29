function midPart()
{
    return `
    <div class="mid_part">
    <div class="back_image">
        <div>
            <p>Plan ahead and save</p>
            <p>Book 60 days in advance for 20% off select stays.</p>
        </div>
    </div>
    <div class="second_part">
        <div>
            <img src="https://a.travel-assets.com/mad-service/header/takeover/expedia_marquee_refresh.jpg" alt="">
        </div>
        <div>
            <div class="app_info">
                <p>Supercharge your planning powers</p>
                <p>Use the Expedia app to organise your entire trip and find app deals on the go</p>
                <p>Text yourself a download link</p>
                <div class="down_btns">
                    <select id="countryCode">
                        <option value="code">Country code</option>
                        <option value="+93,Afghanistan">Afghanistan +93</option>
                        <option value="+672,Antarctica">Antarctica +672</option>
                        <option value="+54,Argentina">Argentina +54</option>
                        <option value="+61,Australia">Australia +61</option>
                        <option value="+43,Austria">Austria +43</option>
                        <option value="+880,Bangladesh">Bangladesh +880</option>
                        <option value="+32,Belgium">Belgium +32</option>
                        <option value="+975,Bhutan">Bhutan +975</option>
                        <option value="+55,Brazil">Brazil +55</option>
                        <option value="+1,Canada">Canada +1</option>
                        <option value="+86,China">China +86</option>
                        <option value="+45,Denmark">Denmark +45</option>
                        <option value="+20,Egypt">Egypt +20</option>
                        <option value="+33,France">France +33</option>
                        <option value="+49,Germany">Germany +49</option>
                        <option value="+30,Greece">Greece +30</option>
                        <option value="+299,Greenland">Greenland +299</option>
                        <option value="+852,HongKong">Hong Kong SAR +852</option>
                        <option value="+36,Hungary">Hungary +36</option>
                        <option value="+354,Iceland">Iceland +354</option>
                        <option selected="" value="+91,India">India +91</option>
                        <option value="+62,Indonesia">Indonesia +62</option>
                        <option value="+98,Iran">Iran +98</option>
                        <option value="+964,Iraq">Iraq +964</option>
                        <option value="+353,Ireland">Ireland +353</option>
                        <option value="+972,Israel">Israel +972</option>
                        <option value="+39,Italy">Italy +39</option>
                        <option value="+1,Jamaica">Jamaica +1</option>
                        <option value="+81,Japan">Japan +81</option>
                        <option value="+60,Malaysia">Malaysia +60</option>
                        <option value="+960,Maldives">Maldives +960</option>
                        <option value="+230,Mauritius">Mauritius +230</option>
                        <option value="+52,Mexico">Mexico +52</option>
                        <option value="+977,Nepal">Nepal +977</option>
                        <option value="+31,Netherlands">Netherlands +31</option>
                        <option value="+64,New_Zealand">New Zealand +64</option>
                        <option value="+234,Nigeria">Nigeria +234</option>
                        <option value="+850,North_Korea">North Korea +850</option>
                        <option value="+47,Norway">Norway +47</option>
                        <option value="+968,Oman">Oman +968</option>
                        <option value="+92,Pakistan">Pakistan +92</option>
                        <option value="+63,Philippines">Philippines +63</option>
                        <option value="+48,Poland">Poland +48</option>
                        <option value="+351,Portugal">Portugal +351</option>
                        <option value="+40,Romania">Romania +40</option>
                        <option value="+7,Russia">Russia +7</option>
                        <option value="+966,Saudi_Arabia">Saudi Arabia +966</option>
                        <option value="+65,Singapore">Singapore +65</option>
                        <option value="+421,Slovakia">Slovakia +421</option>
                        <option value="+27,South_Africa">South Africa +27</option>
                        <option value="+82,South_Korea">South Korea +82</option>
                        <option value="+94,Sri_Lanka">Sri Lanka +94</option>
                        <option value="+46,Sweden">Sweden +46</option>
                        <option value="+41,Switzerland">Switzerland +41</option>
                        <option value="+886,Taiwan">Taiwan +886</option>
                        <option value="+992,Tajikistan">Tajikistan +992</option>
                        <option value="+66,Thailand">Thailand +66</option>
                        <option value="+993,Turkmenistan">Turkmenistan +993</option>
                        <option value="+688,Tuvalu">Tuvalu +688</option>
                        <option value="+380,Ukraine">Ukraine +380</option>
                        <option value="+971,United_Arab_Emirates">United Arab Emirates +971</option>
                        <option value="+44,United_Kingdom">United Kingdom +44</option>
                        <option value="+1,USA">United States of America +1</option>
                        <option value="+39,Vatican_City">Vatican City +39</option>
                        <option value="+58,Venezuela">Venezuela +58</option>
                        <option value="+84,Vietnam">Vietnam +84</option>
                        <option value="+263,Zimbabwe">Zimbabwe +263</option>
                    </select>
                    <input type="text" placeholder="Phone Number">
                    <button>Get the app</button>
                </div>
                <p>By providing your number, you agree to receive a one-time automated text message with a link to get the
                    app. Standard
                    text message rates may apply.</p>
            </div>
            <div class="qr_code">
                <img src="https://a.travel-assets.com/mad-service/qr-code/footer_qr/27_QR_FOOTER.png" alt="">
                <p>Scan the QR code</p>
            </div>
        </div>
    </div>
    <div>
        <p>Explore a world of travel with Expedia</p>
        <a href="">Discover new places and experiences</a>
    </div>
</div>

     `
}


export default midPart