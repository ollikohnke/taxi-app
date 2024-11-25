import React from 'react';

function Location({mapMarker, handlePost}) {

    return (
        <div>
            <div className="twobutton">
                    <div className="onebutton">
                        <button className="button" style={{backgroundColor: (mapMarker == 'none') ? 'green' : 'gray'}} onClick={() => {handlePost({longitude: null, latitude: null, mapmarker: 'none'})}} type="submit">No location</button>
                    </div>
                    <div className="onebutton">
                        <button className="button" style={{backgroundColor: (mapMarker == 'car') ? 'green' : 'gray'}} onClick={() => {handlePost({mapmarker: 'car'})}} type="submit">Exact location</button>
                    </div>
            </div>
        </div>
    )    
}



export default Location;