import Lottie from "lottie-react";
import registerLottie from "../../assets/lottie/register.json";
import SocialLogin from "../Shared/SocialLogin";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../providers/AuthProvider/AuthContext";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const registerInfo = { name, email, password };
    console.log(registerInfo);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        e.target.reset();
      })
      .catch((error) => {
        console.log("ERROR");
      });
  };
  return (
    <section className="min-h-[calc(100vh-288px)] flex ">
      <div className="md:flex gap-6 items-center  ">
        <form
          onSubmit={handleRegister}
          className="card-body flex-1 shadow-xl rounded-lg p-14"
          data-aos="fade-left"
        >
          <h1 className="text-5xl font-bold mb-8 ">Register</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            {/* Name */}
            <input
              type="name"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
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
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
          <SocialLogin />
          <p className="py-2 text-center">
            Already have an account?
            <Link className="hover:underline text-blue-400 ml-2" to="/login">
              Login
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

export default Register;
