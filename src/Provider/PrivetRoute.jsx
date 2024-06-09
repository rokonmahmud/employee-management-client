/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Authcontext } from "./AuthProvider";
import { Navigate } from "react-router-dom";
import spiner from "../assets/images/others/loader2.gif"

const PrivetRoute = ({children}) => {
    // const nevigate = useNavigate()
    const {user, loading} = useContext(Authcontext)

    if(loading){
        return <div>
            <img src={spiner} alt="" />
        </div>
    }
    if(user){
        return children;
    }
    return <Navigate to={'/login'}></Navigate>
};

export default PrivetRoute;