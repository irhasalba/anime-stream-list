import axios from "axios"

const axiosInstance = axios.create({
    baseURL : 'https://api.jikan.moe/v4',
 })

 export const fetcher = (url : string) => {
    return axiosInstance.get(url).then((res) => {
      if (!res.data) {
        throw Error(res.data);
      }
  
      return res.data;
    });
  };

  