import React from 'react'
import { useHistory } from 'react-router-dom'

const Error = () => {
    const history = useHistory();
    return (
        <div>
            <h1>These aren't the droids you're looking for</h1>
            <img src="./owk.jpg" alt="Obi Wan"></img>
            <button onClick={history.goBack} >Home</button>
        </div>
    )
}

export default Error
