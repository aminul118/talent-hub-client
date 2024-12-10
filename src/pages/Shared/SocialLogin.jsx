import google from "../../assets/logos/google-logo.svg";
import github from "../../assets/logos/github.svg";

const SocialLogin = () => {
  return (
    <div>
      <div className="divider">or</div>
      <div className="flex  justify-center gap-6">
        <button>
          <img className="w-10 " src={google} alt="" />
        </button>
        <button>
          <img className="w-10 " src={github} alt="" />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
