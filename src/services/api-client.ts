import axios from "axios";


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '7cf5ed0d14244de49a3f672b3d770e89'
    }
})