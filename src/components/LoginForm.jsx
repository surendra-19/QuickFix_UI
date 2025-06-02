import { useState } from 'react';
import './LoginForm.css';
import Logo from '../assets/Logo.png';
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
    <>
      <div className='loginContainer' >
        <div className="topSection">
          <img src={Logo} alt="Logo" />
          <h2>Quick Fix</h2>
        </div>

        <div className='bottomSection' >
          
          <form onSubmit={handleSubmit} className="login-form">
            <h2>Welocme Back</h2>
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

            <h3>Don't have an account? </h3>
            <h4>Sign up</h4>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
