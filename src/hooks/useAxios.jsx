import axios from "axios";
import { useContext } from "react";
import { Authcontext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxios = () => {
  const { logOut } = useContext(Authcontext);
  const navigate = useNavigate();
  axiosSecure.interceptors.request.use((config) => {
    const token = localStorage.getItem("access-token");
    config.headers.authorization = `bearer ${token}`;
    return config;
  }),
    (error) => {
      return Promise.reject(error);
    };

  // intercepts 401 and 403 status
   axiosSecure.interceptors.response.use(function (response){
    return response; 
   }, async (error) =>{
       const status = error.response.status;
       console.log('status error in the inrterceptor', status);
       if(status === 401 || status === 403){

        await logOut()
        navigate('/login')
       }
        return Promise.reject(error)
   })
  

  return axiosSecure;
};

export default useAxios;
