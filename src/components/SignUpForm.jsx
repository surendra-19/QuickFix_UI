import { useState } from 'react';
import './SignUpForm.css';
import LogoComponent from './LogoComponent';

function SignUpForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    city: ''
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
      <div className='signupContainer'>
        <LogoComponent />

        <div className='bottomSection'>
          <form onSubmit={handleSubmit} className="signup-form">
            <h2>Create a new account</h2>
            <p>It's quick and easy</p>

            <div className='input-row'>
              <input
                type='text'
                name='firstName'
                placeholder='First name'
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type='text'
                name='lastName'
                placeholder='Last name'
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <input
              type='email'
              name='email'
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type='password'
              name='password'
              placeholder='Password'
              value={formData.password}
              onChange={handleChange}
              required
            />

            <select
              name='city'
              value={formData.city}
              onChange={handleChange}
              required
            >
              <option defaultChecked value=''>City living in</option>
              <option value='Delhi'>Delhi</option>
              <option value='Mumbai'>Mumbai</option>
              <option value='Bangalore'>Bangalore</option>
              <option value='Other'>Other</option>
            </select>

            <button type="submit">Sign Up</button>
            <h3>Already have an account?</h3>
            <h4>Log in</h4>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUpForm;
