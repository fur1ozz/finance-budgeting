import React, { useState, useEffect } from 'react';

function User() {
  const [username, setUsername] = useState(0);

  useEffect(() => {
    // Replace with your API endpoint
    const apiUrl = 'http://localhost/apis/user.php';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setUsername(data.username))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <h1>{username}</h1>
    </>
  );
}

export default User;
