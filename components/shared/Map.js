import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { styles } from "@/styles/componentStyles/mapStyles";

const libraries = ["places"];
const mapContainerStyle = {
  marginTop: "3rem",
  width: "100vw",
  height: "60vh"
};
const options = {
  styles: styles,
  disableDefaultUI: true,
  zoomControl: true
};

const center = [
  {
    lat: 45.750038,
    lng: 9.90993
  }
];

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  });

  if (!isLoaded) return "loading Maps...";

  return (
    isLoaded && (
      <>
        {/* <div className='map-container'> */}
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={12}
          center={{ lat: 45.750038, lng: 9.90993 }}
          options={options}>
          {/* Casazza Marker */}
          <MarkerF
            id='marker'
            position={{ lat: 45.750038, lng: 9.90993 }}
            // icon={{
            //   url: "https://user-images.githubusercontent.com/82885837/218527014-641fa8a9-6f0e-4e1a-9dec-b879a6096515.png"
            // }}
          />

          {/* Chiesa di San Pietro in vincoli, Via San Pietro, 24060 Spinone al Lago BG, Italy */}
          <MarkerF
            id='church'
            position={{ lat: 45.7644535548191, lng: 9.922673633853233 }}
            icon={{
              url: "https://user-images.githubusercontent.com/82885837/218527014-641fa8a9-6f0e-4e1a-9dec-b879a6096515.png"
            }}
          />

          {/* Piazza Armando Diaz, 1, Casazza, BG */}
          <MarkerF
            id='casa lodi-yates'
            position={{ lat: 45.7459046, lng: 9.9143232 }}
            icon={{
              url: "https://user-images.githubusercontent.com/82885837/218531320-8c8c9c29-f96a-46d4-90c2-2122f8cb7524.png"
            }}
          />

          {/* HOTEL SAN PANRAZIO* */}
          <MarkerF
            id='Hotel 1'
            position={{ lat: 45.6900668, lng: 9.846434 }}
            icon={{
              url: "https://user-images.githubusercontent.com/82885837/218538598-388ec01e-809e-42a9-b6a9-491f47324ab5.png"
            }}
          />

          {/* VULCANO VILLAGE  */}
          <MarkerF
            id='Hotel 1'
            position={{ lat: 45.8025134, lng: 10.0656494 }}
            icon={{
              url: "https://user-images.githubusercontent.com/82885837/218538598-388ec01e-809e-42a9-b6a9-491f47324ab5.png"
            }}
          />

          {/* LOCANDA DEL BOSCAIOLO */}
          <MarkerF
            id='Hotel 1'
            position={{ lat: 45.76089607418838, lng: 9.92914617061615 }}
            icon={{
              url: "https://user-images.githubusercontent.com/82885837/218538598-388ec01e-809e-42a9-b6a9-491f47324ab5.png"
            }}
          />
        </GoogleMap>
      </>
      // </div>
    )
  );
};

export default Map;
