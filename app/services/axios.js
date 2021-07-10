import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

//--------------------------------------- create axios instance -------------------------------
//axios instance to send unauthenticated requests
export const axiosInstance = axios.create({
    withCredentials: true
})

//axios instance to send authenticated requests
export const authenticatedAxiosInstance = axios.create({
    withCredentials: true
})


//--------------------------------------- axios request interceptors -------------------------------
authenticatedAxiosInstance.interceptors.request.use(async (req) => {
    // append access token to request authorization header
    let token = await SecureStore.getItemAsync('access_token');
    req.headers.authorization = token;
    req.headers['Accept-language'] = 'en';
    return req;
});

//--------------------------------------- axios request interceptors -------------------------------
axiosInstance.interceptors.request.use(async (req) => {
    // append access token to request authorization header
    req.headers['Accept-language'] = 'en';
    
    return req;
});

//--------------------------------------- axios response interceptors -------------------------------
axiosInstance.interceptors.response.use( undefined , function (error) {
    //Any status codes that falls outside the range of 2xx cause this function to trigger
    //Do something with response error
    console.log(error.response.data);
    return error.response;
});
  
authenticatedAxiosInstance.interceptors.response.use( (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("interceptor success")
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const {status, data, config } = error.response;
    console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^ Bendary " + data.json);
    //return Promise.reject(error);
    throw new Error(error);
});