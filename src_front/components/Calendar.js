import React from 'react'

function Calendar () {
    return (
        <div className="calendar" style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
            <iframe
                src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FHelsinki&showPrint=0&showTz=0&showCalendars=0&hl=en&title=Mercedes-Benz%20Sprinter&src=OTE3N2UzYTQ4MWE2NDVkMmNmMmE4ZTk4NGQ1NGQzZWZmYTUyZWU0N2NlNmNiYTUwNDYxNDZiMjkxMjExZmY2NUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%237CB342"
                style={{ borderWidth: 0, width: '100%', height: '600px' }}
                width="800"
                height="600"
                frameBorder="0"
                scrolling="no"
                title="Mercedes-Benz Sprinter Calendar"
            />
        </div>
    )
}

export default Calendar