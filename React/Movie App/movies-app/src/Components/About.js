import React from 'react'

// passing paramaters from app.js through routing only and isAuth is a parametre
function About({isAuth}) {
    console.log(isAuth);
    return (
        <div>
            <h1>This is the About commponent</h1>
        </div>
    )
}

export default About