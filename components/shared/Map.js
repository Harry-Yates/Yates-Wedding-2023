import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { styles } from "@/styles/componentStyles/mapStyles";
// import church from "../../public/emojis/church.png";
// import house from "../../public/emojis/house.png";
// import hotel from "../../public/emojis/hotel.png";

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

// const center = useMemo(() => ({ lat: 45.750038, lng: 9.90993 }), []);

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  });

  if (!isLoaded) return "loading Maps...";

  return (
    isLoaded && (
      <div className='map-container'>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={14}
          center={{ lat: 45.750038, lng: 9.90993 }}
          options={options}>
          <MarkerF
            id='marker'
            position={{ lat: 45.750038, lng: 9.90993 }}
            // icon={{
            //   url: "https://user-images.githubusercontent.com/82885837/218527014-641fa8a9-6f0e-4e1a-9dec-b879a6096515.png"
            // }}
          />

          <MarkerF
            id='church'
            label={{
              text: "⛪️ Chiesa di San Pietro in Vincoli ⛪️",
              color: "#0e2826",
              fontSize: "1.5rem",
              // fontWeight: "bold",
              fontFamily: "cursive",
              backgroundColor: "white",
              borderRadius: "50%",
              paddingBottom: "4rem 0",
              border: "1px solid black",
              width: "2rem",
              height: "2rem",
              textAlign: "center",
              lineHeight: "2rem",
              cursor: "pointer",
              zIndex: 1000,
              position: "absolute",
              top: "200px",
              left: "50%",
              transform: "translate(-200%, -200%)",
              boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
              pointerEvents: "none",
              userSelect: "none"
            }}
            position={{ lat: 45.764436, lng: 9.922672 }}
            icon={{
              url: "https://user-images.githubusercontent.com/82885837/218527014-641fa8a9-6f0e-4e1a-9dec-b879a6096515.png"
            }}
          />

          <MarkerF
            id='house'
            label={{ text: "Cerimonia", color: "white" }}
            position={{ lat: 45.746018619, lng: 9.9142906 }}
            icon={{
              url: "https://user-images.githubusercontent.com/82885837/218531320-8c8c9c29-f96a-46d4-90c2-2122f8cb7524.png"
            }}
          />
        </GoogleMap>
      </div>
    )
  );
};

export default Map;
