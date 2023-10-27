import React from 'react';
import '../styles/Login.css';
import {Link} from "react-router-dom";

function Register() {
    return (
        <div className="login-main">
            <div className="login-center">
                <div className="login-image"></div>
                <div className="loginTOP">
                    <div className="login-logo"></div>
                    <div className="login-title1">
                        <h1 className="register-h1">REGISTER</h1>
                    </div>
                    <form className="login-form">
                        <div className="inputFI">
                            <div className="input-icon">
                                <img src="/images/user.png" alt="Username Icon" />
                            </div>
                            <input type="text" name="username" placeholder="Username" />
                        </div>
                        <div className="inputFI10">
                            <div className="input-icon">
                                <img src="/images/mail.png" alt="Password Icon" />
                            </div>
                            <input type="email" name="email" placeholder="Email" />
                        </div>
                        <div className="inputFI9">
                            <div className="input-icon">
                                <img src="/images/padlock.png" alt="Password Icon" />
                            </div>
                            <input type="password" name="password" placeholder="Password" />
                        </div>
                        <div className="inputFI">
                            <div className="input-icon">
                                <img src="/images/padlock.png" alt="Password Icon" />
                            </div>
                            <input type="password" name="confirm-password" placeholder="Confirm Password" />
                        </div>
                        <div className="button3">
                            <button className="button6" type="submit">REGISTER</button>
                        </div>
                    </form>
                    <div className="loginB1">
                        <Link to="/Login" className="button1">LOGIN</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;