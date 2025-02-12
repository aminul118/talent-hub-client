import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user,loading } = useAuth();
  const location = useLocation()
  console.log(location);
  if(loading){
    return <span className="loading loading-bars loading-lg"></span>;
  }
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" state={location?.pathname} replace />;
  }
};

export default PrivateRoute;
