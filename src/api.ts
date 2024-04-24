import axios from "axios";

const api = axios.create({
    baseURL: 'https://you-tube-project-phi.vercel.app',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
})

export default api;