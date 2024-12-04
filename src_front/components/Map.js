import React, {useState} from 'react';
import Map, {Marker, NavigationControl} from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import MMLv21Mercator from '../geodata/styleJSON/MMLv21Mercator.json'

function Mapview({longitude, latitude, mapMarker}) {

    let mapPath = "./assets/" + mapMarker + ".png"

    const settings = {
        scrollZoom: true,
        boxZoom: false,
        dragRotate: false,
        dragPan: true,
        keyboard: false,
        doubleClickZoom: true,
        touchZoomRotate: true,
        touchPitch: false,
        minZoom: 3,
        maxZoom: 20,
        minPitch: 0,
        maxPitch: 0
    }

    const [viewState, setViewState] = useState({
        longitude: 25.7269,
        latitude: 66.5030,
        zoom: 7.41
    });

    if (mapMarker != 'none') {
        
        return (
            <div className="map-container">
            <Map
                {...viewState}
                {...settings}
                onMove={evt => setViewState(evt.viewState)}
                mapStyle = {MMLv21Mercator}
                style={{width: "100%", height: "50svh"}}
                onStyleLoad={map => {
                    map.flyTo({
                        center: [{longitude}, {latitude}],
                        essential: true // this animation is considered essential with respect to prefers-reduced-motion
                    });
                }}
                >
                <NavigationControl />
                <Marker longitude={longitude} latitude={latitude} anchor="bottom" >
                <img style={{height:'50px'}} src={mapPath} />
                </Marker>
            </Map>
        </div>
    );
    }
    else {
        return 
    }
}


export default Mapview