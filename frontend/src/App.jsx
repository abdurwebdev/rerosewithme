import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('https://rerosewithmebackend.vercel.app/api')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.log(error));
  }, []);

  return (
    <Router>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <nav>
          <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
          <Link to="/register" style={{ margin: '0 10px' }}>Register</Link>
          <Link to="/login" style={{ margin: '0 10px' }}>Login</Link>
        </nav>
        <Routes>
          <Route path="/" element={<div><h1>MERN App</h1><p>{message}</p></div>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;