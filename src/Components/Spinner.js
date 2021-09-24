import React from 'react'
import loading from './loading.gif'

export default function Spinner() {
    return (
        <div className="text-center d-flex justify-content-center">
            <img className="my-3" src={loading} alt="Loading..." />
        </div>
    )
}
