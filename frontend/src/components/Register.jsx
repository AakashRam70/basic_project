import React from 'react'
import { IoPerson } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();

    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
            <div style={{ padding: "20px", boxShadow: "3px 3px 2px 2px blue", borderRadius: "10px" }}>
                <h3 className='pb-2' style={{ color: "blue" }}><IoPerson /> Register</h3>
                <input className='form-control my-2' type="text" placeholder='Enter Your Name' />
                <input className='my-2 form-control' type="email" placeholder='Enter Your Email' />
                <input className=' my-2 form-control' type="password" placeholder='Enter Your Password' />

                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                    <button className='btn btn-primary my-2 form-control'>Register</button>
                    <button onClick={() => navigate("/login")} className='btn btn-success form-control'>Login</button>
                </div>
            </div>

        </div>
    )
}

export default Register