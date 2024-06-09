import { useContext, useState } from "react";
import loginImg from "../../assets/images/others/login.png";
import { Authcontext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
// import { useForm } from "react-hook-form";
import eyeClosed from "../../assets/images/others/eyeClosed.svg";
import eyeOpen from "../../assets/images/others/eye-svgrepo-com.svg";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Signup = () => {
  const [seepassword, setSeepassword] = useState(!true);
  const { updateUserProfile } = useContext(Authcontext);
  const AxiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { createUser } = useContext(Authcontext);
  const showpassword = () => {
    setSeepassword(!seepassword);
  };
  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    createUser(email, password)
      .then((result) => {
        //save user in database
        const user = result.user;
        updateUserProfile(user.name)
          .then(() => {
            "user profile updated";
          })
          .catch( 
            error => console.log(error) 
          );
        const userInfo = {
          name: name,
          email: user.email,
        };
        console.log(userInfo);
        AxiosPublic.post("/users", userInfo)
          .then((res) => {
            if (res.data.insertedId) {
              console.log(user);
              navigate("/");
            }
          })
          .then();
      })
      .then();

    console.log({ email, password });
  };

  return (
    <div>
      <div
       
        className="hero min-h-screen  bg-[#03162C] "
      >
        <div className="hero-content flex-col lg:flex-row-reverse mt-8 shadow-2xl">
          <div className="text-center lg:text-left">
            <img src={loginImg} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl ">
            <form onSubmit={handleSignup} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#16A34A]">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />

                <label className="label">
                  <span className="label-text text-[#16A34A]">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#16A34A]">Password</span>
                </label>
                <div className="flex">
                  <input
                    type={seepassword ? "password" : "text"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered w-full"
                    required
                  />
                  <span onClick={showpassword} className="-ml-16 my-2 w-8">
                    {!seepassword ? (
                      <img src={eyeClosed} alt="" />
                    ) : (
                      <img src={eyeOpen} alt="" />
                    )}
                  </span>
                </div>

                <SocialLogin />

                <p className="mt-2">
                  If you Alreadey have an acount{" "}
                  <Link className="text-[#16A34A]" to={"/Login"}>
                    Login
                  </Link>
                </p>
              </div>
              <div className="form-control mt-6">
                <button className="btn uppercase bg-[#16A34A]">
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
