import React from 'react';
import '../style/styles.css';

function Register() {
  return (
    <div className="main">
      <div className="center">
        <div className="image"></div>
        <div className="loginTOP">
          <div className="logo"></div>
          <div className="title">
            <h1>LOGIN</h1>
          </div>
          <form className="login-form" action="your-server-endpoint" method="post">
            <div className="inputFI">
              <div className="input-icon">
                <img src="/pictures/user.png" alt="Username Icon" />
              </div>
              <input type="text" name="username" placeholder="Username" />
            </div>
            <div className="inputFI2">
              <div className="input-icon">
                <img src="/pictures/padlock.png" alt="Password Icon" />
              </div>
              <input type="password" name="password" placeholder="Password" />
            </div>
            <div className="buttonss">
              <button className="button1">LOGIN</button>
            </div>
            <div className="loginB">
              <button className="button2">REGISTER</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
