import React, {useState} from 'react';

function Available({statusMessage, handlePost}) {

    const [message, setMessage] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
      }

    return (
        <div>
            <div className="twobutton">
                <div className="onebutton">
                    <button className="button" style={{backgroundColor: (statusMessage == 'Currently I am not working') ? 'green' : 'gray'}} onClick={() => {handlePost({statusmessage: 'Currently I am not working'})}} type="submit">Not working</button>
                </div>
            </div>
            <div className="twobutton">
                <div className="onebutton">
                    <button className="button" style={{backgroundColor: (statusMessage == 'Currently I am working and I am AVAILABLE!') ? 'green' : 'gray'}} onClick={() => {handlePost({statusmessage: 'Currently I am working and I am AVAILABLE!'})}} type="submit">Available</button>
                </div>
            </div>
            <div className="twobutton">
                <div className="onebutton">
                    <button className="button" style={{backgroundColor: (statusMessage == 'Right now I have a customer and will be available in a few moments') ? 'green' : 'gray'}} onClick={() => {handlePost({statusmessage: 'Right now I have a customer and will be available in a few moments'})}} type="submit">Short Trip</button>
                </div>
            </div>
            <div className="twobutton">
                <div className="onebutton">
                    <button className="button" style={{backgroundColor: (statusMessage == 'Currently I am on a long trip and will be available later. Please contact') ? 'green' : 'gray'}} onClick={() => {handlePost({statusmessage: 'Currently I am on a long trip and will be available later. Please contact'})}} type="submit">Long trip</button>
                </div>
            </div>
            <div className="formbar">
                <form onSubmit={handleSubmit}>
                        <input
                            type="text" 
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button type="submit" onClick={() => {handlePost({statusmessage: message})}}>Custom Status</button>
                </form>
            </div>
            <div className="twobutton">
                <div className="onebutton">
                    <p style={{ color: 'white' }}>{statusMessage}</p>
                </div>
            </div>
    </div>
    )    
}



export default Available;