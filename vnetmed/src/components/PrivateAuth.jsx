import React from "react";

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateAuth = ({ children }) => {
  const checkAuth = useSelector((state) => state.isAuth.isAuth);
  console.log(checkAuth);

  if (checkAuth) {
    return <>{children}</>;
  }
  return <Navigate to={"/signUp"} />;
};

export default PrivateAuth;
