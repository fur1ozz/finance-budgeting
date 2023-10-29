import React, {useState} from 'react';
import '../styles/Login.css';
import {Link} from "react-router-dom";

function Register() {

    const [registrationData, setRegistrationData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;

        setRegistrationData({
            ...registrationData,
            [name]: value,
        });
    };

    const handleRegister = (e) => {
        e.preventDefault();

        const registerThisData = {
            user: registrationData.username,
            pass: registrationData.password,
            email: registrationData.email
        };

        fetch(`http://localhost:8080/lapsins_api/financeAPI/register.php`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(registerThisData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Response from server:', data);

            })
            .catch((error) => console.error('Error adding data:', error));

    }

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
                            <input type="text"
                                   name="username"
                                   placeholder="Username"
                                   value={registrationData.username}
                                   onChange={handleChange}
                            />
                        </div>
                        <div className="inputFI10">
                            <div className="input-icon">
                                <img src="/images/mail.png" alt="Password Icon" />
                            </div>
                            <input type="email"
                                   name="email"
                                   placeholder="Email"
                                   value={registrationData.email}
                                   onChange={handleChange}
                            />
                        </div>
                        <div className="inputFI9">
                            <div className="input-icon">
                                <img src="/images/padlock.png" alt="Password Icon" />
                            </div>
                            <input type="password"
                                   name="password"
                                   placeholder="Password"
                                   value={registrationData.password}
                                   onChange={handleChange}
                            />
                        </div>
                        <div className="inputFI">
                            <div className="input-icon">
                                <img src="/images/padlock.png" alt="Password Icon" />
                            </div>
                            <input type="password"
                                   name="confirmPassword"
                                   placeholder="Confirm Password"
                                   value={registrationData.confirmPassword}
                                   onChange={handleChange}
                            />
                        </div>
                        <div className="button3">
                            <button className="button6" onClick={handleRegister}>REGISTER</button>
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