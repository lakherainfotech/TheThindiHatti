import React from "react";
import "./Introduction.css";
import tableimage from "../../Images/intoimage.jpg";  

function Introduction(){
    return (
        <div className="introduction">
            <div className="intro-heading">Welcome to THINDI HATTI – Endless Flavours</div>
          
            <div className="intro-info">
                  <p className="intro-subheading">Located in the heart of the city, THINDI HATTI is a vibrant new food court that brings together diverse food brands and rich culinary traditions under one roof. It’s more than just a place to eat — it’s where cravings are answered, stories are shared, and food is celebrated.</p>
                  <div className="intro-table">
                     <div className="intro-table-left">
                        <p>We are proud to house a unique mix of food outlets:</p>
                        
                        <ul>
                            <li><b> Hoskote Baadu Mane</b> – Nati style.Firewood flame. Pure tradition on every plate</li>
                            <li><b>Swadista Bhojana (Pure Veg)</b> – A celebration of rich vegetarian South Indian meals</li>
                            <li><b>iSandy Ice Cream</b> – Whimsical scoops and frozen joy for all ages</li>
                            <li><b>Corn Stories</b> – Your favorite snack, reinvented and irresistible</li>
                            <li><b>Kabab Magic</b> – Sizzling, spicy, juicy kebabs that melt in your mouth</li>
                            <li><b>Zorko</b> – Trendy and tasty fast-food fusion bites</li>
                            <li><b>Chai Corner</b> – For every mood, there's a perfect cup of chai</li>
                            <li><b>Chitamani Chat</b> – Redefining street food with a touch of sophistication</li>
                            <li><b>Jucie Box</b> – Fresh, fun, and full of flavor </li>
                        </ul>
                     </div>

                     <div className="intro-table-right">
                        <img className="image" src={tableimage} alt=""/>
                     </div>
                  </div>
                  
            </div>
        </div>
    )
};

export default Introduction;