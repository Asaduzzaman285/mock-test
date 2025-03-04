import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// import './ResetPassword.css'; 

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [tokenValid, setTokenValid] = useState(false);
  const [tokenData, setTokenData] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Extract token from query parameters
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');
    if (!token) {
      setError('Invalid or missing token.');
      return;
    }

    try {
      // Decode token (Base64 and then JSON parse)
      const decoded = atob(token);
      const data = JSON.parse(decoded);
      setTokenData(data);

      // Check if token has expired
      if (Date.now() > data.exp) {
        setError('This password reset link has expired. Please request a new one.');
      } else {
        setTokenValid(true);
      }
    } catch (err) {
      setError('Invalid token data.');
    }
  }, [location.search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Simulate password update.
    // In a real app, send `tokenData.email` and new password to the backend.
    alert('Password has been reset successfully!');
    navigate('/'); // Redirect to home or login page
  };

  if (error) {
    return (
      <div className="container reset-container">
        <h2 className="text-center reset-title">Reset Password</h2>
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    );
  }

  if (!tokenValid) {
    return (
      <div className="container reset-container">
        <h2 className="text-center reset-title">Reset Password</h2>
        <div className="alert alert-warning" role="alert">
          Verifying token...
        </div>
      </div>
    );
  }

  return (
    <div className="container reset-container">
      <h2 className="text-center reset-title">Reset Password</h2>
      <form onSubmit={handleSubmit} className="reset-form">
        <div className="mb-3">
          <label htmlFor="newPassword" className="form-label">New Password</label>
          <input
            id="newPassword"
            type="password"
            className="form-control"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
          <input
            id="confirmPassword"
            type="password"
            className="form-control"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <button type="submit" className="btn btn-primary w-100">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
