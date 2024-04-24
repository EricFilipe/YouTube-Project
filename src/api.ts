import axios from "axios";

const api = axios.create({
    baseURL: 'https://api-youtube-project.onrender.com',
    headers: {
        'Access-Control-Allow-Origin': 'https://you-tube-project-phi.vercel.app',
        'Content-Type': 'application/json',
    }
})

export default api;