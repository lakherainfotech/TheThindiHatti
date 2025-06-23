import {React} from "react";
import "./InfoCard.css";

function InfoCard({data}){    
    return (
        <div className="info-card">
            <h2 className="info-card-heading">{data.heading}</h2>
            <div className="info-card-information">{data.information}</div>  
        </div>
    );
}

export default InfoCard;