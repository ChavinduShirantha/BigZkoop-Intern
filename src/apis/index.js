import axios from "axios";

axios.defaults.baseURL='http://localhost:8000';

export const getUsersAPI=async ()=> axios.get('/users');