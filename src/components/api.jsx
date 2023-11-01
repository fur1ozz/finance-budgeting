import React, { useState, useEffect } from 'react';

function Apis() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    
    fetch('http://localhost/apis/api.php')
      .then((response) => response.json())
      .then((data) => {setTransactions(data);})
      .catch((error) => console.error(error));
  }, []);

  return (

      <>
        {transactions.map((transaction, index) => (
          <div className="boks" key={index}>
            <div className="knakt">
              <div className="parko">
                <h1> {transaction.kurizmaksa}</h1>
              </div>
              <div className="date">
                <h1>{transaction.datums}</h1>
              </div>
            </div>
            <div className="sum">
              <h1>{transaction.summa}€</h1>
            </div>
          </div>
        ))}
      </>
  );
}

export default Apis;
