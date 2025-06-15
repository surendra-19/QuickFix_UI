import { useState } from 'react';
import '../styles/LoginForm.css';
import '../index.css'
import LogoComponent from './LogoComponent';

function LoginForm({setFormType}) {
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
        <LogoComponent/>

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

            <button className='orange-btn' type="submit">Log In</button>

            <h3>Don't have an account? </h3>
            <h4
              onClick={()=>setFormType('signup')}
            >
              Sign up
            </h4>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
