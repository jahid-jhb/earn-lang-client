import axios from 'axios';
import { auth } from './firebase.config'; // import your initialized Firebase app


// Create Axios instance with base URL
const api = axios.create({
  baseURL: 'http://localhost:3000', // replace with your actual backend URL
});

// Axios interceptor to attach Firebase JWT token to requests
api.interceptors.request.use(
  async (config) => {
    const user = auth.currentUser;
    if (user) {
      const token = await user.getIdToken();
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
