import axios from "axios";

const instance = axios.create({
    baseURL: 'http://116.62.213.186:8080',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'appDevice': 1,
        'pushUserId': '0',
        'platForm': '0',
        'deviceNumber': '0'
      }
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
 
// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Do something with response data
    if(response.data.code === 0){
        return response.data.data;
    }else{
        return Promise.reject('error');
    }
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

export default instance;