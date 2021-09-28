function navbar()
{
    return `
    <div class="navbar">
    <div><img src="https://www.expedia.co.in/_dms/header/logo.svg?locale=en_GB&siteid=27&2" alt="logo"></div>
    <div><p id="category" >More travel ▼</p>
     <div class="category">
         <ul><span class="iconify font_color_1" data-icon="fa-solid:hotel" data-width="15" data-height="15"></span> Stays</ul>
         <ul><img src="/Images/flights.svg" alt="FlightsLogo"> Flights</ul>
         <ul><img src="/Images/cars.svg" alt="carsLogo"> Cars</ul>
         <ul><span class="iconify font_color_1" data-icon="ic:baseline-luggage" data-width="20" data-height="20"></span> Packages</ul>
         <ul><span class="iconify font_color_1" data-icon="jam:inbox-f" data-width="20" data-height="20"></span> Holiday activities</ul>
     </div>
    
    </div>
    <div></div>
    <div><img src="/Images/language.png" alt=""><p>English</p></div>
    <div><p>Support</p></div>
    <div><p>Trips</p></div>
    <div><p>SignIN</p></div>
</div>
           
          `
}

export default navbar