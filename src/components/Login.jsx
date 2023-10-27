import React from 'react';
import '../style/style.css';

function Login() {
  return (
    <div className="main">
      <div className="center">
        <div className="image"></div>
        <div className="loginTOP">
          <div className="logo"></div>
          <div className="title1">
            <h1>REGISTER</h1>
          </div>
          <form className="login-form" action="your-server-endpoint" method="post">
            <div className="inputFI">
              <div className="input-icon">
                <img src="/pictures/user.png" alt="Username Icon" />
              </div>
              <input type="text" name="username" placeholder="Username" />
            </div>
            <div className="inputFI10">
              <div className="input-icon">
                <img src="/pictures/mail.png" alt="Password Icon" />
              </div>
              <input type="email" name="email" placeholder="Email" />
            </div>
            <div className="inputFI9">
              <div className="input-icon">
                <img src="/pictures/padlock.png" alt="Password Icon" />
              </div>
              <input type="password" name="password" placeholder="Password" />
            </div>
            <div className="inputFI">
              <div className="input-icon">
                <img src="/pictures/padlock.png" alt="Password Icon" />
              </div>
              <input type="password" name="confirm-password" placeholder="Confirm Password" />
            </div>
            <div className="button3">
              <button className="button6" type="submit">REGISTER</button>
            </div>
          </form>
          <div className="loginB1">
            <button className="button1">LOGIN</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
