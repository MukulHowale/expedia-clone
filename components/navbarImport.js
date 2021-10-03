function navbar()
{
    return `
        <div><a href="../index.html"><img src="https://www.expedia.co.in/_dms/header/logo.svg?locale=en_GB&siteid=27&2" alt="logo"></a></div>
        <div><p id="category" style="width:20%;">More travel ˅</p>
         <div class="category">
             <ul><img src="../Images/stays.svg" >  Stays</ul>
             <ul><img src="../Images/flights.svg" > Flights</ul>
             <ul><img src="../Images/cars.svg" > Cars</ul>
             <ul><img src="../Images/packages.png" >Packages</ul>
             <ul><img src="../Images/holidays.png" > Holiday activities</ul>
         </div>        
        </div>
        <div><img src="/Images/language.png" alt=""><p>English</p></div>
        <div><p>Support</p></div>
        <div><p>Trips</p></div>
        <div id="in"><p>Sign in</p></div>
        <div id="up"><p>Sign up</p></div>
        <div id="out"><p>logout</p></div>
        <div id="username"></div>
        `
}

export default navbar