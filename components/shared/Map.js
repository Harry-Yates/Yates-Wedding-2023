import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { styles } from "@/styles/componentStyles/mapStyles";
// import church from "../../public/emojis/church.png";
// import house from "../../public/emojis/house.png";
// import hotel from "../../public/emojis/hotel.png";

const libraries = ["places"];
const mapContainerStyle = {
  marginTop: "3rem",
  width: "100vw",
  height: "50vh"
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

  // const markers = [
  //   ["Church", 45.750038, 9.90993, "../../public/emojis/church.png", 30, 30],
  //   ["Hotel", 45.750038, 9.90993, "./../public/emojis/hotel.png", 30, 30],
  //   ["House", 45.750038, 9.90988, "./../public/emojis/house.png", 30, 30]
  // ];

  if (!isLoaded) return "loading Maps...";

  return (
    isLoaded && (
      <div className='map-container'>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={15}
          center={{ lat: 45.750038, lng: 9.90993 }}
          options={options}>
          <MarkerF
            id='marker'
            position={{ lat: 45.750038, lng: 9.90993 }}
            icon={{
              url: "https://user-images.githubusercontent.com/82885837/218527014-641fa8a9-6f0e-4e1a-9dec-b879a6096515.png",
              label: "Church"
            }}
          />
        </GoogleMap>
      </div>
    )
  );
};

export default Map;
