import axios from 'axios';

const api = axios.create({
    baseURL: "http://127.0.0.1:5001/next-256a6/us-central1/app"
})

export default api;
