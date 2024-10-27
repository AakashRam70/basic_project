import React from 'react'
import { IoPerson } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    return (
        <div style={{ border: "2px solid red", display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
            <div className='boxShadow' style={{ padding: "20px", boxShadow: "3px 3px 2px 2px green", borderRadius: "10px" }}>
                <h3 className='pb-2' style={{ color: "green" }}><IoPerson />Login</h3>
                <input className='my-2 form-control' type="email" placeholder='Enter Your Email' />
                <input className=' my-2 form-control' type="password" placeholder='Enter Your Password' />

                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                    <button className='btn btn-primary my-2 form-control'>Login</button>
                    <button onClick={() => navigate("/")} className='btn btn-success form-control'>Register</button>
                </div>
            </div>

        </div>
    )
}

export default Login