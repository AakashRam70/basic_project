import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NoPage = () => {
    const navigate = useNavigate()

    return (
        <div className='text-center p-4' style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "100vh" }}>
            <h2>Wrong Query You Are Passing.</h2>
            <div>
                <button className='btn btn-primary' onClick={() => navigate("/login")}>Go Back</button>
            </div>
        </div>
    )
}

export default NoPage