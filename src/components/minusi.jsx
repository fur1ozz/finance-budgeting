import React, { useState } from 'react';
import './izmaksa.css';

function Minusi() {
  const [kurizmaksa, setKurizmaksa] = useState('');
  const [datums, setDatums] = useState('');
  const [summa1, setSumma1] = useState('');
  const [errorPara1, setErrorPara1] = useState('');
  const [successPara1, setSuccessPara1] = useState('');

  const handleIenakumiSubmit1 = async () => {
    setErrorPara1('');
    setSuccessPara1('');

    if (!kurizmaksa || !datums || !summa1) {
      setErrorPara1('Please fill in all fields.');
      return;
    }

    // Validate Kurizmaksa
    if (/[^A-Za-z0-9\s\-.,]/.test(kurizmaksa)) {
      setErrorPara1('Kurizmaksa should only contain letters, numbers, spaces, hyphens, and commas.');
      return;
    }

    // Validate Datums as a valid datetime
    const validDate = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/;
    if (!validDate.test(datums)) {
      setErrorPara1('Please enter a valid datetime in the format YYYY-MM-DDTHH:MM.');
      return;
    }

    if (parseFloat(summa1) <= 0) {
      setErrorPara1('The summa must be greater than 0.');
      return;
    }

    setErrorPara1('');

    let formData = {
      kurizmaksa: kurizmaksa,
      datums: datums,
      summa: summa1,
      user_id: 1, // Static user ID for now
    };
     console.log(formData);

    try {
      let response = await fetch('http://localhost/apis/minusi.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      response = await response.json();
      setSuccessPara1(response.message);
    } catch (error) {
      console.error('Error:', error);
      setErrorPara1('Error: ' + error.message);
      setSuccessPara1('');
    }
  };

  return (
    <>

      <div className="kurizmaksa">
        <input
          type="text"
          placeholder="Kurizmaksa"
          name="kurizmaksaInput"
          id="kurizmaksa"
          value={kurizmaksa}
          onChange={(e) => setKurizmaksa(e.target.value)}
        />
      </div>
      <div className="datums">
        <input
          type="datetime-local"
          placeholder="Datums"
          name="datumsInput"
          id="datums"
          value={datums}
          onChange={(e) => setDatums(e.target.value)}
        />
      </div>
      <div className="summa">
        <input
          type="number"
          placeholder="Summa"
          name="summaInput"
          id="summas"
          value={summa1}
          onChange={(e) => setSumma1(e.target.value)}
        />
        <p id="errorPara1" style={{ color: 'red' }}>
          {errorPara1}
        </p>
        <p id="successPara1" style={{ color: 'green' }}>
          {successPara1}
        </p>
      </div>
      <div className="poga">
        <button id="submitIenakumiBtn1" onClick={handleIenakumiSubmit1}>
          Iesniegt
        </button>
      </div>
    </>
  );
}

export default Minusi;
