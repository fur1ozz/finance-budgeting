import React from 'react';
import '../styles/Login.css';
import {Link} from "react-router-dom";

function Login() {
    return (
        <div className="login-main">
            <div className="login-center">
                <div className="login-image"></div>
                <div className="loginTOP">
                    <div className="login-logo"></div>
                    <div className="login-title">
                        <h1 className="register-h1">LOGIN</h1>
                    </div>
                    <form className="login-form">
                        <div className="inputFI">
                            <div className="input-icon">
                                <img src="/images/user.png" alt="Username Icon" />
                            </div>
                            <input type="text" name="username" placeholder="Username" />
                        </div>
                        <div className="inputFI2">
                            <div className="input-icon">
                                <img src="/images/padlock.png" alt="Password Icon" />
                            </div>
                            <input type="password" name="password" placeholder="Password" />
                        </div>
                        <div className="buttonss">
                            <button className="button1">LOGIN</button>
                        </div>
                        <div className="loginB">
                            <Link to="/Register" className="button2">REGISTER</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;