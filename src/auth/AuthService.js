// src/AuthService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/v1/auth';

let accessToken = null;

const setAccessToken = (token) => {
  accessToken = token;
};

const AuthService = {
  register: (registerRequest) =>
    axios.post(`${API_BASE_URL}/register`, registerRequest),
  
  authenticate: async (authenticationRequest) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/authenticate`, authenticationRequest);
      const { accessToken, refreshToken } = response.data;

      setAccessToken(accessToken);

      // Save tokens in localStorage for persistent storage
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      return response;
    } catch (error) {
      console.error('Authentication failed:', error);
      throw error;
    }
  },

  refreshToken: async () => {
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      const response = await axios.post(`${API_BASE_URL}/refresh-token`, {}, {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      });

      const newAccessToken = response.data.accessToken;
      setAccessToken(newAccessToken);

      // Update token in localStorage
      localStorage.setItem('accessToken', newAccessToken);

      return response;
    } catch (error) {
      console.error('Token refresh failed:', error);
      throw error;
    }
  },

  getAccessToken: () => accessToken,
};

export default AuthService;
