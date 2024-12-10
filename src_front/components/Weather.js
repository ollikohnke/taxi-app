import React from 'react'

function Calendar () {
    return (
        <div className="weather" style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
            <iframe
                src="https://saaasema.com/"
                style={{ borderWidth: 0, width: '100%', height: '800px' }}
                width="800"
                height="600"
                frameBorder="0"
                scrolling="no"
                title="Weather"
            />
        </div>
    )
}

export default Calendar