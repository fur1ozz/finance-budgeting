import React, { useState, useEffect } from 'react';

function Apis() {
  const [transaction, setTransaction] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost/apis/apis.php');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTransaction(data[0]);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="hz">
      {transaction && (
        <>
          <div className="bum">
            <div className="parko">
              <h1>{transaction.kurizmaksa}</h1>
            </div>
            <div className="date">
              <h1>{transaction.datums}</h1>
            </div>
          </div>
          <div className="sum2">
            <h1>{transaction.summa}</h1>
          </div>
        </>
      )}
    </div>
  );
}

export default Apis;
