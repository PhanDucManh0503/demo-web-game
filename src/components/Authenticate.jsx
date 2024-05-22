import { ACCESS_TOKEN } from "@/constant";
import { StateContext } from "@/store";
import { getStorage } from "@/utils/localStorage";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthenticateProvider = ({ children }) => {
  const navigate = useNavigate();
  const state = useContext(StateContext);

  // useEffect(() => {
  //   let time;
  //   const access_token = getStorage(ACCESS_TOKEN);

  //   if (!access_token || !state.userLogin) {
  //     time = setTimeout(() => navigate("/login"), 200);
  //   }

  //   return () => clearTimeout(time);
  // }, [navigate, state.userLogin]);

  return children;
};

export default AuthenticateProvider;
