import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { styles } from "@/styles/componentStyles/mapStyles";

const libraries = ["places"];
const mapContainerStyle = {
  marginTop: "3rem",
  width: "100vw",
  height: "50vh"
};
const options = {
  styles: styles
};

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "loading Maps";

  return (
    <div className='map-container'>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={{ lat: 45.750038, lng: 9.90993 }}
        options={options}></GoogleMap>
    </div>
  );
};

export default Map;
