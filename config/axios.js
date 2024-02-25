import axios from "axios";

const axiosApi = axios.create({
   baseURL:"http://ecommerce.codeitapps.com/api",
   headers:{
      "Accept": 'application/json',
      "Content-Type" : 'application/json',
   },
});

export default axiosApi;