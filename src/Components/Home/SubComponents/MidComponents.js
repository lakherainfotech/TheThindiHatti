import React from "react";
import "./MidComponent.css";
function MidComponent(){
    return (
        <div className="mid-component"> 
             <div className="mid-component-card">
                <div className="mid-component-heading">Inspiration</div>
                <div className="mid-component-heading">The Place Where Dreams Take Shape</div>
                <div className="sub-info">
                    <p>Inspired by India’s rich food culture and the vision to create an inclusive space that connects people through food, THINDI HATTI is the dream of passionate entrepreneurs who believe in the power of taste and community. Much like how great leaders are driven by vision, our founders were fueled by a dream to create a space where comfort food meets modern convenience — accessible, affordable, and memorable.</p>
                </div>
             </div>

             <div className="mid-component-card">
                <div className="mid-component-heading">Our Mission</div>
                <div className="sub-info">
                 <p>To deliver high-quality, diverse culinary experiences in a clean, welcoming environment while fostering growth and dignity among our staff, vendors, and partners.</p>
                </div>
             </div>

             <div className="mid-component-card">
                <div className="mid-component-heading">Our Values</div>
                <div className="sub-info">
                    <ul>
                    <li><b>Integrity in Ingredients</b> – No compromise on freshness and quality</li>
                    <li><b>Respect for People</b> – Staff, vendors, and guests are treated with dignity</li>
                    <li><b>Commitment to Community</b> – We serve to bring people closer, one meal at a time</li>
                    <li><b>Passion for Progress </b> – Always improving, always innovating</li>
                    </ul>
                </div>
             </div>
        </div>
    )
};

export default MidComponent;