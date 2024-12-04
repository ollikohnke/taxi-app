import React from 'react';

function OnShift({statusMessage, loading}) {
    
    if (loading) {
        return (
            <div className="loader"></div>
        )
    } else {    

        return (
            <div className="status">
                <h1>{statusMessage}</h1>
            </div>
        )
    }
       
}

export default OnShift;