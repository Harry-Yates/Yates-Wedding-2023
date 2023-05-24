import React from "react";
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  InfoWindow,
} from "@react-google-maps/api";
import { styles } from "@/styles/componentStyles/mapStyles";

const libraries = ["places"];
const mapContainerStyle = {
  marginTop: "3rem",
  width: "100vw",
  height: "60vh",
};
const options = {
  styles: styles,
  disableDefaultUI: true,
  zoomControl: true,
};

const center = {
  lat: 45.750038,
  lng: 9.90993,
};

const markers = [
  {
    id: "Church",
    position: { lat: 45.7644535548191, lng: 9.922673633853233 },
    icon: "https://user-images.githubusercontent.com/82885837/218527014-641fa8a9-6f0e-4e1a-9dec-b879a6096515.png",
  },
  {
    id: "Casa Lodi-Yates",
    position: { lat: 45.745911, lng: 9.91433 },
    icon: "https://user-images.githubusercontent.com/82885837/218531320-8c8c9c29-f96a-46d4-90c2-2122f8cb7524.png",
  },
  {
    id: "Hotel Lovere Resort & Spa",
    position: { lat: 45.82195, lng: 10.08195 },
    icon: "https://user-images.githubusercontent.com/82885837/218538598-388ec01e-809e-42a9-b6a9-491f47324ab5.png",
  },
  {
    id: "Vulcano Village",
    position: { lat: 45.8025134, lng: 10.0656494 },
    icon: "https://user-images.githubusercontent.com/82885837/218538598-388ec01e-809e-42a9-b6a9-491f47324ab5.png",
  },
  {
    id: "Locanda del Boscaiolo",
    position: { lat: 45.76089607418838, lng: 9.92914617061615 },
    icon: "https://user-images.githubusercontent.com/82885837/218538598-388ec01e-809e-42a9-b6a9-491f47324ab5.png",
  },
];

// Function to adjust the position of the InfoWindow
const adjustPosition = (position) => {
  return {
    lat: position.lat + 0.01, // Adjust this value to move the InfoWindow
    lng: position.lng,
  };
};

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: libraries,
  });

  if (!isLoaded) return "loading Maps...";

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={11}
      center={center}
      options={options}>
      {markers.map((marker, index) => (
        <React.Fragment key={marker.id}>
          <MarkerF
            position={marker.position}
            icon={marker.icon && { url: marker.icon }}
          />
          <InfoWindow position={adjustPosition(marker.position)}>
            <div>{marker.id}</div>
          </InfoWindow>
        </React.Fragment>
      ))}
    </GoogleMap>
  );
};

export default Map;
