import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom';
import Stylejs from './style';
import jwt_decode from "jwt-decode";
import Logo from '../../assets/images/Group30.png';
import {Form} from 'react-bootstrap';
import axios from 'axios';
import cookie from 'react-cookies'
import {apiPath} from '../../Config'
import '../../assets/style/style.css'

const Login = (props) => {
    let {history, dispatch} = props;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const [error, setError] = useState("");
    const userAuthentication = e => {
        e.preventDefault();
        let payLoad = {email: email, password: password};
        axios.post(apiPath + "/api/login", payLoad).then(async response => {
            await localStorage.setItem("age", remember ? 1296000 : 86400);
            await cookie.save('token', response.data.token, {maxAge: (remember ? 1296000 : 86400), path: "/"});
            let data = await jwt_decode(response.data.token);
            await dispatch({
                type: "SET_SHOP_ID",
                payload: data.shopId
            });
            await history.push("/dashboard");
            await setEmail("");
            await setPassword("");
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

    return (

        <div className="Container-fluid login-background-color">
            <div className="login">

                <div className="login-picture">
                    <div className="image-portion fnt-poppins">
                        <h1>Logo</h1>
                    </div>
                </div>
                <div className="login-form">
                    <form className="input-form"
                          onSubmit={(event) => {
                              userAuthentication(event)
                          }}>
                        <h2 className="Sign-in fnt-poppins">Sign in</h2>
                        <Form.Control className="input-text flirt fnt-poppins" type="text" value={email} name="User"
                                      placeholder="User name"
                                      onChange={(event) => {
                                          setEmail(event.target.value)
                                      }}
                        />

                        <Form.Control className="input-text signin-input fnt-poppins" type="password" value={password}
                                      name="password" placeholder="Password"
                                      onChange={(event) => {
                                          setPassword(event.target.value)
                                      }}
                        />

                        <div className="custom-control custom-checkbox signin-checkbox">
                            <input id="checked" className="custom-control-input" checked={remember}
                                   onChange={() => setRemember(!remember)} type="checkbox"/>
                            <label for="checked" className="custom-control-label"/>
                            <div className="checkbox-data fnt-poppins">Remember me</div>
                            <div className="signin-forgrt-password fnt-poppins"><a href="#">Forgot password?</a></div>

                        </div>
                        <div className="signin-button-div">
                            <button className="btn-blue btn-signin-padding fnt-poppins" type="submit">Sign In</button>
                        </div>
                        <div className="checkbox-data fnt-poppins ml-4 mt-5">
                            Dont have an account?
                            <Link to="/createshop" className="ml-3">SignUp</Link>
                        </div>
                    </form>
                </div>
            </div>
            <Stylejs />
        </div>);
};

export default withRouter(Login);
