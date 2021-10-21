//Importing
import React from 'react'
import loading from './loading.gif'

export default function Spinner() {
    return (
        <div className="text-center d-flex justify-content-center" style={{backgroundColor: 'white'}}>
            <img className="my-3" src={loading} alt="Loading..." />
        </div>
    )
}
