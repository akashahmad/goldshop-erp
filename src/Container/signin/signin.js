import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom'
import Stylejs from './style';
import Logo from '../../assects/images/Group30.png';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import cookie from 'react-cookies'
import { userAuthapiPath } from '../../Config'
import '../../assects/style/style.css'

export default () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState("");
    const [error, setError] = useState("");
    const userAuthentication = e => {
        e.preventDefault();
        let payLoad = { email: email, password: password };
        axios.post(userAuthapiPath + "/api/login", payLoad).then(response => {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("age", remember ? 1296000 : 86400);
            cookie.save('token', response.data.token, { maxAge: (remember ? 1296000 : 86400), path: "/home" });
            setEmail("");
            setPassword("");
            window.location.replace("/home");
        })
            .catch(err => {
                if (err.message === "Request failed with status code 404") {
                    setError("Invalid Password");
                }
                else if (err.message === "Request failed with status code 500") {
                    setError("Email does not exist");
                }
            });
    };

    // useEffect(() => {
    //     let loggedIn = localStorage.getItem("token");
    //     if (loggedIn) {
    //       window.location.replace('/');
    //     }
        
    //   }, []);

    return (

        <div className="Container-fluid login-background-color">
            <div className="login" >

                <div className="login-picture">
                    <div className="image-portion fnt-poppins">
                        <h1>Logo</h1>
                    </div>
                </div>


                <div className="login-form">
                    <form className="input-form"
                        onSubmit={(event) => { userAuthentication(event) }}
                    >
                        <h2 className="Sign-in fnt-poppins">Sign in</h2>
                        <Form.Control className="input-text flirt fnt-poppins" type="text" value={email} name="User" placeholder="User name"
                            onChange={(event) => { setEmail(event.target.value) }}
                        />

                        <Form.Control className="input-text signin-input fnt-poppins" type="password" value={password} name="password" placeholder="Password"
                            onChange={(event) => { setPassword(event.target.value) }}
                        />

                        <div class="custom-control custom-checkbox signin-checkbox">
                            <input id="checked" class="custom-control-input " type="checkbox" />

                            <label for="checked" class="custom-control-label"></label>
                            <div className="checkbox-data fnt-poppins">Remember me</div>
                            <div className="signin-forgrt-password fnt-poppins"><a href="#">Forgot password?</a></div>

                        </div>
                        <div className="signin-button-div"><button className="btn-blue btn-signin-padding fnt-poppins" type="submit">Sign In</button></div>
                        <div className="checkbox-data fnt-poppins ml-4 mt-5">Dont have an account?<Link className="ml-3">Sign Up</Link></div>
                    </form>
                </div>
            </div>
            <Stylejs />
        </div>


    );
}
