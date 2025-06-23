import {React} from "react";
import InfoCard from "./InfoCard";

function ContactInfo(){
    const data =[
        {
            heading: "Email Us",
            information: "Samprapthiorg@gmail.com"
        },
        {
            heading: "Phone Number",
            information: "+91 8884725172"
        },
        {
            heading: "Our location",
            information: "Railway Feeder Rd, Nehru Extension, Besides RS Car Care, Malur, Karnataka-563130."
        }
    ] ;
    
    return (
    <div className="contact-info">
        { data.map((item, index) => 
            <InfoCard key={index} data={item}/>
        )}
     </div>
    );
}

export default ContactInfo;