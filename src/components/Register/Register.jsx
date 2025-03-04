import React, { useState } from 'react';
import './Register.css'; 

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Registering user:', formData);
  };

  return (
    <div className="container-fluid">
    <div className="register-container">
      <h2 className="register-title">Create Your Account</h2>
      
      <form onSubmit={handleSubmit} className="register-form">
        {/* Name Field */}
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        {/* Email Field */}
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {/* phone feild */}
        <label htmlFor="email">Phone</label>
        <input
          id="phone"
          name="phone"
          type="number"
          placeholder="Enter your phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />


        {/* Password Field */}
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Enter your Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        {/* Confirm Password Field */}
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Confirm your Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        {/* Register Button */}
        <button type="submit" className="register-button">
          Register
        </button>
      </form>

      <div className="separator">or</div>

      {/* Google Sign-In Button (Mock) */}
      <button className="google-button">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
          alt="Google"
          className="google-icon"
        />
        Continue with Google
      </button>

      <p className="login-redirect">
        Already have an account? <a href="/login">Log In</a>
      </p>
    </div>
    </div>

  );
};

export default Register;

