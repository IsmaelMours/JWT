// src/LoginComponent.js
import React, { useState } from 'react';
import AuthService from '../auth/AuthService';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [loginRequest, setLoginRequest] = useState({
    email: '',
    password: '',
  });

  const handleLogin = async () => {
    try {
      const response = await AuthService.authenticate(loginRequest);
        console.log('Authentication successful:', response.data);
        navigate('/profile');
    } catch (error) {
      console.error('Authentication failed:', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4" style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <h3 className="mb-4">Login</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={loginRequest.email}
              onChange={(e) => setLoginRequest({ ...loginRequest, email: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={loginRequest.password}
              onChange={(e) => setLoginRequest({ ...loginRequest, password: e.target.value })}
            />
          </div>

          <button type="button" className="btn btn-primary" onClick={handleLogin}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
