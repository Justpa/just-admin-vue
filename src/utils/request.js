import axios from axios;

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// 请求拦截器
axios.interceptors.request.use(function(config) {
    return config;
  }, function(error) {
    return Promise.reject(error);
  })
  // 响应拦截器
axios.interceptors.response.use(function(response) {
  return response;
}, function(error) {
  return Promise.reject(error);
})

// 封装axios的post请求
export function fetch(url, method, params) {
  return new Promise((resolve, reject) => {
    axios[method](url, params)
      .then(response => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      })
  })
}

export default request =(config)=>{
  let url = config.url;
  let method = config.method;
  let data = null;
  delete config.url
  delete config.method
  if(config.data) {
    data = config.data;
    delete config.data
  }

  switch(method) {
    case 'post': fetch(url, 'post', data); break;
    case 'get': fetch(url, 'get', data); break;
    case 'put': fetch(url, 'put', data); break;
    case 'delete': fetch(url, 'delete', data); break;
  }
}
