import {

  FaEnvelope,
  FaHome,
  FaListUl,
 
  FaServer,
  FaShoppingCart,
  FaUsers,
  FaWallet,
} from "react-icons/fa";
import logo from "../../../assets/images/logo/logo.png";
import { NavLink } from "react-router-dom";
import useAdmin from "../../../hooks/useAdmin";


const AdminDrwer = () => {


  const [isAdmin] = useAdmin();

  return (
    <div>
      <div>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-2"
              className="btn absolute  left-4 top-4 btn-primary  drawer-button lg:hidden"
            >
              menu
            </label>
          </div>
          <div className="drawer-side ">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full gap-1 bg-[#021327] text-base-content">
              <img className=" px-4 mb-6 p-2 rounded-lg" src={logo} alt="" />
              {/* Sidebar content here */}

              {isAdmin ? (
                <>
                  <li>
                    <a className="text-xl font-medium uppercase text-[#44DA64]">
                      <FaHome /> Admin Home
                    </a>
                  </li>
                  <li>
                    <NavLink
                      to={"/dashbord/additems"}
                      className="text-xl font-medium uppercase text-[#44DA64]"
                    >
                      {" "}
                      <FaServer />
                      add Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/dashbord/manageitems"}
                      className="text-xl font-medium uppercase text-[#44DA64]"
                    >
                      <FaListUl />
                      manage Services
                    </NavLink>
                  </li>
                  
                  <li>
                    <NavLink
                      to={"/dashbord/users"}
                      className="text-xl font-medium uppercase text-[#44DA64]"
                    >
                      <FaUsers />
                      all users
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  {/* for user */}
                  <li>
                    <a className="text-xl font-medium uppercase text-[#44DA64]">
                      <FaHome />
                      User Home
                    </a>
                  </li>
                 
                  <li>
                    <a className="text-xl font-medium uppercase text-[#44DA64]">
                      <FaWallet />
                      payment history
                    </a>
                  </li>
                  <li>
                    <NavLink
                      to={"/dashbord/cart"}
                      className="text-xl font-medium uppercase text-[#44DA64]"
                    >
                      <FaShoppingCart />
                      my Services
                    </NavLink>
                  </li>
                  
                  
                </>
              )}

              <div className="divider divider-success"></div>

              <li>
                <NavLink
                  to={"/"}
                  className="text-xl font-medium uppercase text-[#44DA64]"
                >
                  <FaHome />
                  home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/"}
                  className="text-xl font-medium uppercase text-[#44DA64]"
                >
                  <FaListUl />
                  services
                </NavLink>
              </li>

              <li>
                <a className="text-xl font-medium uppercase text-[#44DA64]">
                  <FaEnvelope />
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDrwer;
