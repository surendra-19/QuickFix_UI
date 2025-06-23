import axios from "axios";

const API_BASE = 'https://localhost:7221/api';

export const signup = async (userData) => {
    return axios.post(`${API_BASE}/Authorization/CustomerRegistration`,userData)
}

export const login = async (userData) => {
    return axios.post(`${API_BASE}/Auth/Login`,userData)
}