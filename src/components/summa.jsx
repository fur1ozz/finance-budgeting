import React, { useState } from 'react';
import './izmaksa.css';

function Summa() {
  const [summa2, setSumma2] = useState('');
  const [errorPara2, setErrorPara2] = useState('');
  const [successPara2, setSuccessPara2] = useState('');

  const handleIenakumiSubmit2 = async () => {
    // Clear any previous error/success messages
    setErrorPara2('');
    setSuccessPara2('');

    // Validate the input
    if (!summa2) {
      setErrorPara2('Please enter a summa.');
      return;
    }
    if (!/^[0-9]+(\.[0-9]+)?$/.test(summa2)) {
      setErrorPara2('Please enter a valid number. It can have an optional decimal point.');
      return;
    }
    if (/[\&<>\;A-Za-z]/.test(summa2)) {
      setErrorPara2('The summa should not contain letters or HTML special characters.');
      return;
    }
    if (parseFloat(summa2) <= 0) {
      setErrorPara2('The summa must be greater than 0.');
      return;
    }

    // Clear any previous error messages
    setErrorPara2('');

    let formData = {
      summa: summa2,
      user_id: 1, // Static user ID for now
    };
    

    // Send the data to your API for insertion into the ienakumi table
    try {
      let response = await fetch('http://localhost/apis/summa.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      response = await response.json();
    //   console.log(response.message);
      setSuccessPara2(response.message);
    } catch (error) {
      // Handle any network errors
      console.error('Error:', error);
      setErrorPara2('Error: ' + error.message);
      setSuccessPara2('');
    }
  };

  return (
    <div className="ievades2">
      <div className="ienakumi">
        <h1>Ienakumu Reģistrs</h1>
      </div>
      <div className="ienakumusumma">
        <input
          type="number"
          id="summa"
          placeholder="Summa"
          className="sumaunder"
          value={summa2}
          onChange={(e) => setSumma2(e.target.value)}
        />
        <p id="errorPara2" style={{ color: 'red' }}>
          {errorPara2}
        </p>
        <p id="successPara2" style={{ color: 'green' }}>
          {successPara2}
        </p>
      </div>
      <div className="poga1">
        <button id="submitIenakumiBtn2" onClick={handleIenakumiSubmit2}>
          Iesniegt
        </button>
      </div>
    </div>
  );
}

export default Summa;
