import { useState } from 'react';
import '../styles/SignUpForm.css';
import LogoComponent from './LogoComponent';
import { signup } from '../services/AuthService';

function SignUpForm({ setFormType }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    CityLivingIn: '',
    address: '',         
    contactNumber: ''     
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        CityLivingIn: parseInt(formData.CityLivingIn, 10),
        address: formData.address,
        contactNumber: formData.contactNumber
      };
      console.log(payload);
      const response = await signup(payload);
      alert(response.data.message);
      setFormType('login');
    } catch (e) {
      alert(e.response?.data?.message || 'Signup failed');
    }
  };

  return (
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
            name='CityLivingIn'
            value={formData.CityLivingIn}
            onChange={handleChange}
            required
          >
            <option defaultChecked value=''>City living in</option>
            <option value={1}>Delhi</option>
            <option value={2}>Mumbai</option>
            <option value={3}>Bangalore</option>
            <option value={4}>Other</option>
          </select>

          <input
            type='text'
            name='address'
            placeholder='Address'
            value={formData.address}
            onChange={handleChange}
            required
          />

          <input
            type='tel'
            name='contactNumber'
            placeholder='Mobile Number'
            value={formData.contactNumber}
            onChange={handleChange}
            required
            pattern='[0-9]{10}'
            title='Enter a 10-digit mobile number'
          />

          <button type="submit">Sign Up</button>
          <h3>Already have an account?</h3>
          <h4 onClick={() => setFormType('login')}>Log in</h4>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
