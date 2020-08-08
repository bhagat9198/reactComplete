import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});


instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN INSTANCE';

// instance.interceptors.request.use(requestConfig => {
//   console.log(requestConfig);
//   return requestConfig;
// });

export default instance;