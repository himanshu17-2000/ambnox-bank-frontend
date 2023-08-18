import React, { useState, useEffect } from 'react'
import { Redirect, useHistory } from "react-router-dom"
import "../../styles/Login.css"
import Particles from '../widgets/Particles';
import { db } from "../../Firebase"
function Login() {
    let history = useHistory();
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    // function submitHandler(e) {
    //     e.preventDefault()

    //     if (username !== "" && password !== "") {
    //         if (username === "earthboxer" && password === "7024885234") {
    //             history.push("/home")
    //         }
    //         else {
    //             alert("not authorized personell")
    //             setpassword("")
    //             setusername("")
    //         }
    //     }
    //     else {
    //         alert("all fields are complusory")
    //     }


    // }
        return (
            <div className="login-container">
                <Particles className="particles" />
                <h1 className="login-heading">WELCOME TO AMBNOX BANKING </h1>
                <form className="login-form" >
                    <h4>Username</h4>
                    <input type="text" value={username} onChange={(e) => { setusername(e.target.value) }} />
                    <h4>password</h4>
                    <input type="password" value={password} onChange={(e) => { setpassword(e.target.value) }} />
                    <br />
                    <button type="submit">LOGIN</button>
                </form>

            </div>
        )
    

}

export default Login
