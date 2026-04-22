import axios from "axios";

const API = "http://localhost:5000";

export const registerUser = (data) =>
  axios.post(`${API}/api/auth/register`, data);

export const loginUser = (data) =>
  axios.post(`${API}/api/auth/login`, data);