import React, { useState } from "react";
import test from "../test/index";

function LoginForm () {
    const [ loginData, setLoginData ] = useState({
        email: "",
        password: "",
    });
    
    const loginDataChange = (e) => {
        const { id, value } = e.target;
        setLoginData( (prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    return(
        <>
            ID
            <input
                type="email"
                id="email"
                placeholder="Enter email"
                value={loginData.email}
                onChange={loginDataChange}
            />
            PW
            <input
                type="password"
                id="password"
                placeholder="Password"
                value={loginData.password}
                onChange={loginDataChange}
            />
            <button onClick={test.Login({loginData})}> Login </button>
        </>
    );
}

export default LoginForm;