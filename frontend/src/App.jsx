import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api')
      .then(response => setMessage(response.data.message))
      .catch(error => console.log(error));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>MERN App</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;