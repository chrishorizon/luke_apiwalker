import React from 'react'
import { useHistory } from 'react-router-dom'
import owk from '../img/owk.jpg'

const Error = () => {
    const history = useHistory();
    return (
        <div>
            <h1>These aren't the droids you're looking for</h1>
            <img src={owk} alt="Obi Wan"></img>
            {/* <button onClick={history.push('/')} >Home</button> */}
        </div>
    )
}

export default Error
