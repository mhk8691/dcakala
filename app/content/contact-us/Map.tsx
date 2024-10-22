'use client'
import { GoogleMap, LoadScript } from "@react-google-maps/api";
export default function Map() {
  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  const defaultCenter = {
    lat: 35.6892, // عرض جغرافیایی تهران
    lng: 51.389, // طول جغرافیایی تهران
  };
  
  return (
    <LoadScript googleMapsApiKey="2LUXP68B36LzY5dcXdKScqWCHWgljEEEkbaRMTV3UIs">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      />
    </LoadScript>
  );
}
