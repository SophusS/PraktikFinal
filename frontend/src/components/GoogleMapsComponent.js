import { useMemo } from "react"
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api"

const GoogleMapsComponent = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_PUBLIC_GOOGLE_MAPS_API_KEY
    })

    if (!isLoaded) return <div>Loading...</div>
    return <Map />
} 

function Map() {
    const center = useMemo(() => ({ lat: 55, lng: 12 }), []) 
    
    return (
    <GoogleMap zoom={10} center={center} mapContainerStyle={{ width: "100%", height: "50vh" }}>
        <MarkerF position={center} />
    </GoogleMap>
    ) 
}

export default GoogleMapsComponent