import React, { useState } from 'react';
import './izmaksa.css'; // Import your CSS file
import Api from './api.jsx';
import Apis from './apis.jsx';
import Change from './change.jsx';
import User from './user.jsx';
import Summa from './summa.jsx';
import Minusi from './minusi.jsx';


function Izmaksa() {
  const [kurizmaksa, setKurizmaksa] = useState('');
  const [datums, setDatums] = useState('');
  const [summa1, setSumma1] = useState('');
  const [summa2, setSumma2] = useState('');

  const [errorPara1, setErrorPara1] = useState('');
  const [successPara1, setSuccessPara1] = useState('');
  const [errorPara2, setErrorPara2] = useState('');
  const [successPara2, setSuccessPara2] = useState('');

  const handleIenakumiSubmit1 = () => {
    // Clear any previous error/success messages
    setErrorPara1('');
    setSuccessPara1('');

    // Validate the input
    if (!kurizmaksa || !datums || !summa1) {
      setErrorPara1('Please fill in all fields.');
      return;
    }

    // Check if kurizmaksa contains HTML special characters
    if (/[\u00A0-\u9999<>\&]/g.test(kurizmaksa)) {
      setErrorPara1('Kurizmaksa cannot contain HTML special characters.');
      return;
    }

    // Check if datums is a valid datetime-local
    if (!/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})$/.test(datums)) {
      setErrorPara1('Please enter a valid date for datums in the format YYYY-MM-DDTHH:MM.');
      return;
    }

    if (!/^[0-9]+(\.[0-9]+)?$/.test(summa1)) {
      setErrorPara1('Please enter a valid number for summa. It can have an optional decimal point.');
      return;
    }

    if (parseFloat(summa1) <= 0) {
      setErrorPara1('The summa must be greater than 0.');
      return;
    }

    // Clear any previous error messages
    setErrorPara1('');

    // Perform the XMLHttpRequest and handle the response (similar to your original code)
    // Modify this part to make the XMLHttpRequest to your backend API
  };

  const handleIenakumiSubmit2 = () => {
    // Clear any previous error/success messages
    setErrorPara2('');
    setSuccessPara2('');

    // Validate the input
    if (!summa2) {
      setErrorPara2('Please enter a summa.');
      return;
    }
    if (!/^[0-9]+(\.[0.9]+)?$/.test(summa2)) {
      setErrorPara2('Please enter a valid number. It can have an optional decimal point.');
      return;
    }
    if (/[\&\<\>\;A-Za-z]/.test(summa2)) {
      setErrorPara2('The summa should not contain letters or HTML special characters.');
      return;
    }
    if (parseFloat(summa2) <= 0) {
      setErrorPara2('The summa must be greater than 0.');
      return;
    }

    // Clear any previous error messages
    setErrorPara2('');

    // Perform the XMLHttpRequest and handle the response (similar to your original code)
    // Modify this part to make the XMLHttpRequest to your backend API
  };

  return (
    <div className="main">
      <div className="kreisa">
        <div className="ievades">
          <div className="izmaksreg">
            <h1>Izmaksu Reģistrs</h1>
          </div>
            <Minusi/>
        </div>
        <Summa/>
      </div>
      <div className="laba">
        <div className="top">
          <div className="hello">
            <div className="hop">
              <div className="sveiciens">
                <h1>Sveiki!</h1>
              </div>
              <div className="users">
                <User />
              </div>
              <div className="bop">
                <Change />
              </div>
            </div>
          </div>
          <div className="pedeja">
            <div className="iz">
              <h1>Pēdēja Izmaksa</h1>
            </div>
            <Apis />
          </div>
        </div>
        <div className="bot">
          <div className="teksts">
            <h1>Visas Izmaksas</h1>
          </div>
          <div className="boxi">
            <Api />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Izmaksa;
