import {React} from "react";
import { GoogleMap, LoadScript, Marker,  useJsApiLoader} from "@react-google-maps/api";

const center = {
  lat: 12.99698802746182,  
  lng: 77.93621535362246   
};

const containerStyle = {
  width: "80%",
  height: "400px",
  border: "2px solid black",
  margin: "10px"
};

function LocationMap(){

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyChW4Qs-Q5urvVssCYfzg5YuC_je1XbwjA"
    });

    if (!isLoaded) {
        return <div>Loading map...</div>; // Only shows once
    }


    return (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
            <Marker position={center} />
        </GoogleMap>
    
    );
}

export default LocationMap;