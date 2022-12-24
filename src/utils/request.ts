import axios from 'axios';

const service = axios.create({
    baseURL:"http://kumanxuan1.f3322.net:8001",
    timeout:5000
});

//2. 请求拦截器
service.interceptors.request.use(config => {
    return config;
}, error => {
    Promise.reject(error);
});

//3. 响应拦截器
service.interceptors.response.use(response => {
    //判断code码
    return response.data;
},error => {
    return Promise.reject(error);
});
export default service;
