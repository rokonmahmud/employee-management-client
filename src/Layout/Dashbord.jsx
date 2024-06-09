import { Outlet } from "react-router-dom";
import AdminDrwer from "../Pages/Shared/Navbar/AdminDrwer";


const Dashbord = () => {
  return (
    <div className="flex">
     
      <AdminDrwer/>
      <div className="w-9/12 mx-auto">
      <Outlet ></Outlet>
      </div>
    </div>
  );
};

export default Dashbord;
