import React from "react";
import { GoogleMap } from "@react-google-maps/api";
import { useMemo } from "react";

const Map = () => {
  return (
    <div className='map-container'>
      <GoogleMap
        zoom={15}
        center={{ lat: 45.750038, lng: 9.90993 }}
        mapContainerClassName='map-container'></GoogleMap>{" "}
    </div>
  );
};

export default Map;
