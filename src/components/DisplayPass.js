import React from 'react'

const DisplayPass = ({ passwords }) => {

    var counter = 0

    return (
        <div>
            { passwords.map((password) => (
                ++counter && counter === passwords.length && <h1 key={password.time}>{password.pass}</h1> 
            ))}
        </div>
    )
}

export default DisplayPass
