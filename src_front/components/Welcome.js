import React from 'react'

function Welcome () {
    return (
        <div className="welcome">
            <h1>Hello from <span style={{color:"yellow"}}>TAXI</span></h1>
            <small>click to chat</small>
            <a href="https://wa.me/358408611006"><img style={{width: "70px", marginTop: "5px"}} src="/assets/whatsapp.png"></img></a>
            <small style={{marginTop: "20px"}}>or call</small>
            <a href="tel:+358408611006"><h2 style={{marginTop: "5px"}}>+358 40 8611006</h2></a>
        </div>
    )
}

export default Welcome