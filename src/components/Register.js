import React, { useState } from 'react';
import AuthService from '../auth/AuthService';
import { useNavigate } from 'react-router-dom';

const Register = () => {
const navigate = useNavigate();
  const [registerRequest, setRegisterRequest] = useState({
    // Initialize your state here
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    mobile: '',
    role: '',
  });

  const handleRegister = async () => {
    try {
      const response = await AuthService.register(registerRequest);
        console.log('Registration successful:', response.data);
        navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

return (
    <div className="container mt-5">
      <div className="card p-4" style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <h3 className="mb-4">Register</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="firstname" className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              placeholder="Enter your first name"
              value={registerRequest.firstname}
              onChange={(e) => setRegisterRequest({ ...registerRequest, firstname: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="lastname" className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              placeholder="Enter your last name"
              value={registerRequest.lastname}
              onChange={(e) => setRegisterRequest({ ...registerRequest, lastname: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={registerRequest.email}
              onChange={(e) => setRegisterRequest({ ...registerRequest, email: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={registerRequest.password}
              onChange={(e) => setRegisterRequest({ ...registerRequest, password: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="mobile" className="form-label">Mobile</label>
            <input
              type="text"
              className="form-control"
              id="mobile"
              placeholder="Enter your mobile number"
              value={registerRequest.mobile}
              onChange={(e) => setRegisterRequest({ ...registerRequest, mobile: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="role" className="form-label">Role</label>
            <select
              className="form-select"
              id="role"
              value={registerRequest.role}
              onChange={(e) => setRegisterRequest({ ...registerRequest, role: e.target.value })}
            >
              <option value="" disabled>Select a role</option>
              <option value="ADMIN">ADMIN</option>
              <option value="USER">USER</option>
              <option value="CONTENT_CREATOR">CONTENT CREATOR</option>
            </select>
          </div>

          <button type="button" className="btn btn-primary" onClick={handleRegister}>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;