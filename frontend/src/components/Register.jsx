import React, { useState } from 'react'
import { IoPerson } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { handleError } from '../../utils';

const Register = () => {

    const navigate = useNavigate();

    const [login, setLogin] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const copyLogin = { ...login };
        copyLogin[name] = value;
        setLogin(copyLogin);
    }



    const handleSignup = (e) => {
        e.preventDefault();
        const { name, email, password } = login;
        if (!name || !email || !password) {
            return handleError('name and email and password are required');
        }

        return (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
                <div style={{ padding: "20px", boxShadow: "3px 3px 2px 2px blue", borderRadius: "10px" }}>
                    <form onSubmit={handleSignup}>
                        <h3 className='pb-2' style={{ color: "blue" }}><IoPerson /> Register</h3>
                        <input onChange={handleChange} className='form-control my-2' type="text" placeholder='Enter Your Name' />
                        <input onChange={handleChange} className='my-2 form-control' type="email" placeholder='Enter Your Email' />
                        <input onChange={handleChange} className=' my-2 form-control' type="password" placeholder='Enter Your Password' />

                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                            <button className='btn btn-primary my-2 form-control'>Register</button>
                            <button onClick={() => navigate("/login")} className='btn btn-success form-control'>Login</button>
                        </div>
                    </form>
                </div>

            </div>
        )
    }
}

export default Register;