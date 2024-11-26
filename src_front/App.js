import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Welcome from './components/Welcome.js'
import OnShift from './components/OnShift.js'
import Mapview from './components/Map.js'
import Prices from './components/Prices.js'

// Lift the state
// Make api calls here and pass as props to children
 
function App() {

    const [loading, setLoading] = useState(true);
    const [longitude, setLongitude] = useState(null)
    const [latitude, setLatitude] = useState(null)
    const [onShift, setOnShift] = useState('')
    const [isAvailable, setIsAvailable] = useState('')
    const [availableIn, setAvailableIn] = useState('')
    const [mapMarker, setMapMarker] = useState('none')

    useEffect(() => {

        const intervalId = setInterval(() => {  

            const fetchData = async () => {
                const responseData = await axios.get(API_SERVER_URI_STATUS)
                    .then(response => {
                        return response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
                    setOnShift(responseData.onshift)
                    setIsAvailable(responseData.isavailable)
                    setAvailableIn(responseData.availablein)
                    setLongitude(responseData.longitude)
                    setLatitude(responseData.latitude)
                    setMapMarker(responseData.mapmarker)
            }
            fetchData()
            setLoading(false)
        }, 1000) // Change this in prod

        return () => {
            clearInterval(intervalId)
        }
        
    }, [])

    if (loading) {
        return (
            <div id="main">
            <Welcome />
            <div className="loader"></div>
            <Prices />
        </div>
        )
    }
    return (
        <div id="main">
            <Welcome />
            <OnShift
                onShift={onShift}
                isAvailable={isAvailable}
                availableIn={availableIn}
                loading={loading}
            />
            <Mapview
                longitude={longitude}
                latitude={latitude}
                mapMarker={mapMarker}
            />
            <Prices />
        </div>
    );
}
 
export default App;