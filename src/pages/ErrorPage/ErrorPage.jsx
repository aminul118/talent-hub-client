import { Link } from "react-router-dom";
import error from "../../assets/lottie/404-searching-magnify.json";
import Lottie from "lottie-react";
const ErrorPage = () => {
  return (
    <div className="h-screen flex items-center justify-center gap-6">
      <div>
        <Lottie className="w-96" animationData={error} />
      </div>

      <div className="space-y-3 text-center">
        <h1 className="text-7xl font-extrabold">OOPS!</h1>

        <h3 className="text-slate-400 text-xl ">
          Looks like big foot has broken the link
        </h3>

        <Link to="/" className="btn btn-info my-4">
          Back to homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
