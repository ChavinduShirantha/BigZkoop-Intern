import axios from "axios";

axios.defaults.baseURL='http://localhost:8000';

export const getUsersAPI=async ()=> axios.get('/users');

export const getUserByIdAPI=async (id)=> axios.get(`/users/${id}`);

export const createUserAPI=async (user)=> axios.post(`/users`,user);
