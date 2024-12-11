import { useContext } from "react";
import AuthContext from "../providers/AuthProvider/AuthContext";

const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export default useAuth;
