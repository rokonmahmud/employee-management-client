import { useContext, useEffect, useState } from "react";
import loginImg from "../../assets/images/others/login.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Authcontext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";

const Login = () => {
    const nevigate = useNavigate();
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const { signIn } = useContext(Authcontext);
  const [disabled, setDisabled] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        nevigate('/');

      })
      .then();

    console.log({ email, password });
  };

  const handleValidateCaptcha = (e) => {
    if (validateCaptcha(e.target.value, false) == true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  

  return (
    <div>
      <div
      
        className="hero min-h-screen bg-[#03162C]"
      >
        <div className="hero-content flex-col lg:flex-row-reverse mt-8 shadow-2xl">
          <div className="text-center lg:text-left">
            <img src={loginImg} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl ">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#16A34A]">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#16A34A]">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <div className="my-4">
                  <LoadCanvasTemplate />
                </div>
                <input
                  type="text"
                  name="recaptcha"
                  onChange={handleValidateCaptcha}
                  placeholder="type the captcha"
                  className="input input-bordered"
                  required
                />
                {/* social loin */}
                <SocialLogin/>
                <p className="mt-2">
                  If you Alreadey have an acount{" "}
                  <Link className="text-[#16A34A]" to={"/Signup"}>
                    Sign up
                  </Link>
                </p>
              </div>
              <div className="form-control mt-6">
                <button disabled={disabled} className="btn text-white bg-[#16A34A]">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
