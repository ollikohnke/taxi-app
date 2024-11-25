import React from 'react';

function Available({onShift, isAvailable, availableIn, handlePost}) {

    return (
        <div>
            <div className="twobutton">
                    <div className="onebutton">
                        <button className="button" style={{backgroundColor: !onShift ? 'green' : 'gray'}} onClick={() => {handlePost({onshift: false})}} type="submit">Not working</button>
                    </div>
                    <div className="onebutton">
                        <button className="button" style={{backgroundColor: onShift ? 'green' : 'gray'}} onClick={() => {handlePost({onshift: true})}} type="submit">Working</button>
                    </div>
                </div>
            <div className="twobutton">
                <div className="onebutton">
                    <button className="button" style={{backgroundColor: !isAvailable ? 'green' : 'gray'}} onClick={() => {handlePost({isavailable: false})}} type="submit">Not available</button>
                </div>
                <div className="onebutton">
                    <button className="button" style={{backgroundColor: isAvailable ? 'green' : 'gray'}} onClick={() => {handlePost({isavailable: true})}} type="submit">Available</button>
                </div>
            </div>
            <div className="twobutton">
                <div className="onebutton">
                    <button className="button" style={{backgroundColor: (availableIn===null) ? 'green' : 'gray'}} onClick={() => {handlePost({availablein: null})}} type="submit">null</button>
                </div>
                <div className="onebutton">
                    <button className="button" style={{backgroundColor: availableIn ? 'green' : 'gray'}} onClick={() => {handlePost({availablein: 5})}} type="submit">5</button>
                </div>
            </div>
    </div>
    )    
}



export default Available;