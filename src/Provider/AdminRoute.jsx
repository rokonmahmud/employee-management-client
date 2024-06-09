import { useContext } from "react";
import { Authcontext } from "./AuthProvider";
import { Navigate } from "react-router-dom";
import spiner from "../assets/images/others/loader2.gif"
import useAdmin from "../hooks/useAdmin";


// eslint-disable-next-line react/prop-types
const AdminRoute = ({children}) => {
    const {user, loading} = useContext(Authcontext)
    const [isAdmin, isAdminLoading] = useAdmin()

    if(loading || isAdminLoading){
        return <div>
            <img src={spiner} alt="" />
        </div>
    }
    if(user && isAdmin){
        return children;
    }
    return <Navigate to={'/login'}></Navigate>
  
};

export default AdminRoute;