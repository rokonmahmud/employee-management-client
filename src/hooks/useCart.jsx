import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import { useContext } from "react";
import { Authcontext } from "../Provider/AuthProvider";



export const useCart = () => {
    const axiosSecure = useAxios();
    const {user} = useContext(Authcontext)
     const {data: cart=[], refetch} = useQuery({
        queryKey: ['cart',user?.email],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/carts?email=${user?.email}`)
            return res.data;
        } 
     });
     return [cart, refetch]
};

export default useCart;