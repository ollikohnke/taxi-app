import React from 'react';

function OnShift({onShift, isAvailable, availableIn, loading}) {
    
    if (loading) {
        return (
            <div className="loader"></div>
        )
    } else {

    
        if (onShift && isAvailable) {
            return (
                <div className="status">
                    <h1>Currently I am working and I am <span style={{color: "green"}}>AVAILABLE!</span></h1>
                </div>
            )
        } else if (onShift && !isAvailable && availableIn !== null) {

            return (
                <div className="status">
                    <h1> Currently I am working and will be <span style={{color: "green"}}>AVAILABLE!</span> in {availableIn} minutes!</h1>
                </div>
            )
        } else if (onShift && !isAvailable && availableIn == null) {
            
            return (
                <div className="status">
                    <h1>Currently I am on shift but unfortunately unavailable...</h1>
                </div>
            )
        } else {
            return (
                <div className="status">
                    <h1>Currently I am not working</h1>
                </div>
            )
        } 
    }
}

export default OnShift;