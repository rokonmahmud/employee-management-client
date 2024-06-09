import axios from "axios";


const useAxiosPublic = () => {
    const AxiosPublic = axios.create({
        baseURL: 'https://employee-management-server-six.vercel.app'
    })
    return AxiosPublic;
};

export default useAxiosPublic;