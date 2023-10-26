
import axios from 'axios';
import Cookies from 'js-cookie';

const axiosClient = axios.create({
    baseURL: `https://z0qmycg8b1.execute-api.us-east-1.amazonaws.com/dev`,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})


axiosClient.interceptors.request.use(
    config=>{
        const accessToken = Cookies.get('accessToken');
        if(accessToken){
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
    },
    error=>{
        Promise.reject(error)
    }
)

axiosClient.interceptors.response.use(
    response=>{
        return response.data['data'];
    },
    error=>{
        const originalRequest = error.config;
        if (
            error.response.status === 401 && originalRequest.url === 'https://z0qmycg8b1.execute-api.us-east-1.amazonaws.com/dev/accessToken'
        ) {
            window.location.href = 'https://formly-ai.web.app/signin';
            return Promise.reject(error)
        }
        if(error.response.status === 401 && !originalRequest._retry){
            originalRequest._retry = true;
            const refreshToken = Cookies.get('refreshToken');
            axios.post('/accessToken', {refreshToken: refreshToken})
                .then(res=>{
                    if(res.status===200){
                        const data = res.data['data'];
                        Cookies.set('accessToken', data?.accessToken); 
                        Cookies.set('refreshToken', data?.refreshToken); 
                        axiosClient.defaults.headers.common['Authorization'] = `Bearer ${data?.accessToken}`;
                        return axios(originalRequest)
                    }
                })
        }
        return Promise.reject(error)
    }
)

export default axiosClient;