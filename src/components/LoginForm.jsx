import { useState } from 'react';
import './LoginForm.css';

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <input 
        type="email" 
        name="email"
        placeholder="Email" 
        value={formData.email}
        onChange={handleChange}
        required
      />

      <input 
        type="password" 
        name="password"
        placeholder="Password" 
        value={formData.password}
        onChange={handleChange}
        required
      />

      <button type="submit">Log In</button>
    </form>
  );
}

export default LoginForm;
