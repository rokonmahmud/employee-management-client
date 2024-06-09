import axios from "axios";


const useAxiosPublic = () => {
    const AxiosPublic = axios.create({
        baseURL: 'http://localhost:5000'
    })
    return AxiosPublic;
};

export default useAxiosPublic;