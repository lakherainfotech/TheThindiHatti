import React from 'react';
import "./ContactUs.css"
import ContactInfo from  "./ContactInfo";
import LocationMap from "./LocationMap";
function ContactUs(){
    return (
        <div className='contact-us'>
           
            <ContactInfo />
            <LocationMap />
        </div>
    );
}

export default ContactUs;