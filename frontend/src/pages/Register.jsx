import { useState } from 'react';
  import axios from 'axios';

  function Register() {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post('https://rerosewithmebackend.vercel.app/api/register', formData);
        setMessage(res.data.message);
      } catch (error) {
        setMessage(error.response?.data?.message || 'Registration failed');
      }
    };

    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Register</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: '0 auto' }}>
          <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" required autoComplete="username" />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required autoComplete="email" />
          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required autoComplete="new-password" />
          <button type="submit">Register</button>
        </form>
        <p>{message}</p>
      </div>
    );
  }

  export default Register;