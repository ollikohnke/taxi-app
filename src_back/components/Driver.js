import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import Available from './Available.js'
import Location from './Location.js'
import axios from 'axios'
import { AuthContext } from "./AuthContext";


function Driver() {

    const navigate = useNavigate()

    const [count, setCount] = useState(0)

    const [onShift, setOnShift] = useState('')
    const [isAvailable, setIsAvailable] = useState('')
    const [availableIn, setAvailableIn] = useState('')
    const [longitude, setLongitude] = useState('')
    const [latitude, setLatitude] = useState('')
    const [mapMarker, setMapMarker] = useState('none')
    const [postData, setPostData] = useState('')

    const { token } = useContext(AuthContext);

    useEffect(() => {
        //Implementing the setInterval method
        const interval = setInterval(() => {
            if (mapMarker != 'none') {
                getUserLocation()
            }
            setCount(count + 1);
        }, 5000);

        //Clearing the interval
        return () => clearInterval(interval);
    }, [count]);

    useEffect(() => {

        const controller = new AbortController();
        const signal = controller.signal;

        // Fetch data from API
        async function fetchData() {
            const response = await axios.post(API_SERVER_URI_STATUS, postData, {
                headers: { Authorization: `Bearer: ${token}` },
                signal: AbortSignal.timeout(5000) //Aborts request after 5 seconds
             })
                .then(response => {
                    return response.data
                })
                .catch(error => {
                    if (error.name === 'AbortError') {
                        console.log('Fetching data was aborted');
                    } else if (error.status === 401) {
                        console.log('Unauthorized')
                        navigate('/login')
                    } else {
                    console.log(error);
                    }
                })
            setOnShift(response.onshift)
            setIsAvailable(response.isavailable)
            setAvailableIn(response.availablein)
            setLongitude(response.longitude)
            setLatitude(response.latitude)
            setMapMarker(response.mapmarker)
        }
        fetchData()

        return () => {
            controller.abort();
          };

    }, [postData])

    const handlePost = (value) => {
        setPostData(value)
    }

    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    handlePost({longitude: position.coords.longitude, latitude: position.coords.latitude})
                },
                (error) => {
                    // display an error if we cant get the users position
                    console.log(error('Error getting user location:', error));
                }
            );
        }
        else {
            // display an error if not supported
            console.error('Geolocation is not supported by this browser.');
        }
    };


    return (
        <div id="driver">
            <Available
                onShift={onShift}
                isAvailable={isAvailable}
                availableIn={availableIn}
                handlePost={handlePost}
            />
            <Location
                longitude={longitude}
                latitude={latitude}
                mapMarker={mapMarker}
                handlePost={handlePost}
            />
        </div>
    );
}
 
export default Driver;