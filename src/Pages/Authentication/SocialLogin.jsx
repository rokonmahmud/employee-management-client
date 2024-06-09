import { useContext } from "react";
import { Authcontext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {
  const { googleLogin } = useContext(Authcontext);
  const AxiosPublic = useAxiosPublic();
  const nevigate = useNavigate();
  const handleGoogle = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        const userInfo = {
          email: user?.email,
          name: user?.displayName,
        };
        AxiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
          nevigate("/");
        });
        console.log(user);
      })
      .then((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="flex items-center justify-center pt-4 space-x-2">
        <p className="text-sm text-center text-[#16A34A]">
          ---- Login with social accounts ----
        </p>
      </div>
      {/* Social icons */}
      <div className="flex justify-center space-x-4">
        <button
          onClick={handleGoogle}
          type="button"
          className="btn hover:bg-[#f7bd66] py-2 px-5 mb-4 mt-8 mx-auto block shadow-lg border rounded-md border-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current inline-block mr-2"
          >
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
