import Vue from 'vue'
import axios from 'axios'
const baseURL = 'localhost:8080'
axios.defaults.baseURL = baseURL
    // // 添加一个请求拦截器
    // axios.interceptors.request.use(function(config) {
    //     let token = localStorage.getItem('mytoken');
    //     if (token) {
    //         config.headers['Authorization'] = token
    //     }
    //     return config;
    // }, function(error) {
    //     return Promise.reject(error);
    // });

Vue.use(axios)

// 登陆验证
export const loginPost = form => axios.post('login', form).then(res => res.data)
export const getMap = () => axios.get(this.mapJson).then(res => res)