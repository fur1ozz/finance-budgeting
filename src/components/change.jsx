import React, { useState, useEffect } from 'react';

function Change() {
  const [difference, setDifference] = useState(0);

  useEffect(() => {
    // Replace with your API endpoint
    const apiUrl = 'http://localhost/apis/change.php';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setDifference(data.difference))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <h1>Jūsu pieejamais atlikums ir: {difference}</h1>
    </>
  );
}

export default Change;
