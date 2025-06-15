import { useState } from 'react';
import '../styles/ServiceProviderSignup.css';
import LogoComponent from './LogoComponent';
import MultiSelectSearchForm from './MultiSelectSearchForm';

function ServiceProviderSignup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    city: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className='service-provider-container'>
      <LogoComponent />

      <div className='bottomSection'>
        <form className="service-provider-form" onSubmit={handleSubmit}>
          <h2>Work with us</h2>

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

          <div className="custom-width-wrapper">
            <MultiSelectSearchForm />
          </div>

          <select
            name='city'
            value={formData.city}
            onChange={handleChange}
            required
          >
            <option value='' disabled>City living in</option>
            <option value='Delhi'>Delhi</option>
            <option value='Mumbai'>Mumbai</option>
            <option value='Bangalore'>Bangalore</option>
            <option value='Other'>Other</option>
          </select>

          <button className='orange-btn' type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default ServiceProviderSignup;
