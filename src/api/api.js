// src/api/api.js
import axios from 'axios';

// Use environment variable or fallback URL
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://rehabhospitality.com/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // Add authorization headers here if needed
  },
});

// Common GET
export const getData = (endpoint, params = {}) => {
  return api.get(endpoint, { params });
};

// Common POST
export const postData = (endpoint, data = {}) => {
  return api.post(endpoint, data);
};

// Common PUT
export const updateData = (endpoint, data = {}) => {
  return api.put(endpoint, data);
};

// Common DELETE
export const deleteData = (endpoint) => {
  return api.delete(endpoint);
};

export default api;
