import React, {useState} from 'react';
import '../styles/Login.css';
import {Link, useNavigate} from "react-router-dom";

function Login() {

    const [loginData, setLoginData] = useState({
        loginUsername: '',
        loginPassword: '',
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [errorUsername, setErrorUsername] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value,
        });
    };
    const handleLogin = async (e) => {
        e.preventDefault();

        const loginThisData = {
            user: loginData.loginUsername,
            pass: loginData.loginPassword
        };

        fetch(`http://localhost:8080/lapsins_api/financeAPI/login.php`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginThisData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Response from server:', data);
                if (data.token){
                    setSuccessMsg(data.success);
                    setErrorUsername(data.errors.usernameVal);
                    setErrorPassword(data.errors.passwordVal);
                    setErrorMessage('');
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userID', data.userID);
                    localStorage.setItem('userName', data.userName);
                    setLoginData({
                        loginUsername: '',
                        loginPassword: '',
                    });
                    navigate('/');
                }else{
                    setErrorMessage(data.error);
                    setErrorUsername(data.errors.usernameVal);
                    setErrorPassword(data.errors.passwordVal);
                    setSuccessMsg('');
                }
            })
            .catch((error) => console.error('Error adding data:', error));

    }

    return (
        <div className="login-main">
            <div className="login-center">
                <div className="login-image"></div>
                <div className="loginTOP">
                    <div className="login-logo"></div>
                    <div className="login-title">
                        <h1 className="register-h1">LOGIN</h1>
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        {errorUsername && <p className="error-message">{errorUsername}</p>}
                        {errorPassword && <p className="error-message">{errorPassword}</p>}
                        {successMsg && <p className="succ-message">{successMsg}</p>}
                    </div>
                    <form className="login-form">
                        <div className="inputFI">
                            <div className="input-icon">
                                <img src="/images/user.png" alt="Username Icon" />
                            </div>
                            <input type="text"
                                   placeholder="Username"
                                   name="loginUsername"
                                   value={loginData.loginUsername}
                                   onChange={handleChange}
                            />
                        </div>
                        <div className="inputFI2">
                            <div className="input-icon">
                                <img src="/images/padlock.png" alt="Password Icon" />
                            </div>
                            <input type="password"
                                   placeholder="Password"
                                   name="loginPassword"
                                   value={loginData.loginPassword}
                                   onChange={handleChange}
                            />
                        </div>
                        <div className="buttonss">
                            <button className="button1" onClick={handleLogin}>LOGIN</button>
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