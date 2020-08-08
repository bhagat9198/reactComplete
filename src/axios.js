import axios from 'axios';

// creting the instance
// create() : a method which craetes a instance of axios,  ie copy of teh instance object. and we can create multiple such copies as we want. 
// axios.create({
  // configrations
// });

// storing instance in a variable 
const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});


instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN INSTANCE';
// and all the requests will be using this 'Authorization' token where this instance will be used in file.

// we set up instance own interceptors
// instance.interceptors.request(...)

instance.interceptors.request.use(requestConfig => {
  console.log(requestConfig);
  return requestConfig;
});

// exporting theinstance so that it can be used in other files
export default instance;


// like this we can create mutilple instances for multiple files

