import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
// import useAxios from "./useAxios";

const useMenu = ()=>{
    const AxiosPublic = useAxiosPublic()
    
   

    const {data: menu=[], refetch } = useQuery({
        queryKey: ['menus'],
        queryFn: async()=>{
            const res = await AxiosPublic.get('/menus');
            return res.data;
        }
    });

    return[menu, refetch]
}

export default useMenu;