import Lottie from "lottie-react";
import registerLottie from "../../assets/lottie/register.json";
import SocialLogin from "../Shared/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const Login = () => {
  const { loginUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || "/";
  console.log(location);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    const registerInfo = { email, password };
    console.log(registerInfo);
    loginUser(email, password)
      .then((result) => {
        console.log(result.user.email);
        const user = { email: email };
        axios
          .post("http://localhost:5000/jwt", user, { withCredentials: true })
          .then((res) => console.log(res.data));

        // e.target.reset();
        // navigate(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="min-h-[calc(100vh-288px)] flex ">
      <div className="md:flex gap-6 items-center  ">
        <form
          onSubmit={handleLogin}
          className="card-body flex-1 shadow-xl rounded-lg p-14"
          data-aos="fade-right"
        >
          <h1 className="text-5xl font-bold mb-8 ">Login</h1>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            {/* Email */}
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
              <span className="label-text">Password</span>
            </label>
            {/* Password */}
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <SocialLogin />
          <p className="py-2 text-center">
            You don't have an account?
            <Link className="hover:underline text-blue-400 ml-2" to="/register">
              Register
            </Link>
          </p>
        </form>

        <div className="flex-1 ">
          <Lottie animationData={registerLottie}></Lottie>
        </div>
      </div>
    </section>
  );
};

export default Login;
