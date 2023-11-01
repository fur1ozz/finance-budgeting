import React from 'react';
import './Footer.css'; // Import your CSS file

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="link">General info</div>
        <div className="link2">Privacy Policy</div>
        <div className="link3">Terms of Use</div>
      </footer>
    );
  }
}

export default Footer;
