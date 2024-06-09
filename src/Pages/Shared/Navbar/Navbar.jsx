import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo/logo.png";
// import shopIcon from "../../../assets/images/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png";
import userImg from "../../../assets/images/others/profile.png";
import { useContext } from "react";
import { Authcontext } from "../../../Provider/AuthProvider";
import useCart from "../../../hooks/useCart";
const Navbar = () => {
  const { user, logOut } = useContext(Authcontext);
  const [cart] = useCart();
  console.log(cart);

  //logout
  const handaleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const NavigationLink = (
    <>
      <li>
        {" "}
        <NavLink
          className={`text-lg hover:bg-none focos:bg-white text-white`}
          to={"/"}
        >
          HOME
        </NavLink>{" "}
      </li>
     
      <li>
        {" "}
        <NavLink
          className={`text-lg  focos:bg-white text-white`}
          to={"/contact"}
        >
          CONTACT US
        </NavLink>{" "}
      </li>

      <li>
        {" "}
        {/* <NavLink
          className={`text-lg  focos:bg-white text-white`}
          to={"/dashbord"}
        >
          DASHBOARD
        </NavLink>{" "} */}
      </li>

      <li>
       
      </li>

    </>
  );
  
  return (
    <div className="bg-[#00000063] z-10 fixed w-full">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
            >
              {NavigationLink}
            </ul>
          </div>
          <div className="flex items-center text-white">
            <img className=" w-full" src={logo} alt="" />
          </div>
        </div>
        <div className="navbar-center  hidden lg:flex">
          <ul className=" menu menu-horizontal text-white px-1">
            {NavigationLink}
          </ul>
        </div>
        <div className="navbar-end">
          <div>
            
          </div>

          {/* aveter */}
          <div className="avatar flex items-center gap-4">
            {user ? (
              <button
                onClick={handaleLogout}
                className="text-white text-lg border-2 px-4 py-2 hover:bg-[#E6A534] hover:border-[#E6A534] btn bg-transparent"
              >
                Logout
              </button>
            ) : (
              <Link
                to={"/signup"}
                className="text-white text-lg border-2 px-4 py-2 hover:bg-[#E6A534] hover:border-[#E6A534] btn bg-transparent"
              >
                Sign Up
              </Link>
            )}
            <div className="w-12 rounded-full">
              {user ? (
                <img
                  className="h-[50px] rounded-full mr-4"
                  src={user?.photoURL}
                  alt=""
                />
              ) : (
                <img src={userImg} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
