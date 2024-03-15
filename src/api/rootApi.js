import axios from 'axios';

const BASE_URL='http://localhost:8080/api/v1/';


export const rootApi =  axios.create({
    baseURL:BASE_URL,
    withCredentials: false
})

rootApi.interceptors.response.use((response)=>{
    return response;
},
async(error)=>{
    const originalRequest=error.config;
    console.log(error)
    const errMessage=error.response.data;
    if(errMessage?.message?.includes("Username not found") && !originalRequest._retry){
        return Promise.reject("Invalid username")
    }
    if(errMessage?.message?.includes("password not correct") && !originalRequest._retry){
        return Promise.reject("password incorect")
    }
    return Promise.reject(error);
})

