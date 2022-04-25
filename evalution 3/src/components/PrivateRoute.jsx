import React, { useContext } from "react";
import { Navigate, Route } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export const ProtectedRoute = ({
  redirectPath = "/login",
  push = true,
  path,
  children,
  exact = false,
}) => {
  const { isAuth } = useContext(AuthContext);
  return isAuth ? (
    <div>
      <Route exact={exact} path={path}>
        {children}
      </Route>
    </div>
  ) : (
    <Navigate to={redirectPath} push={push} />
  );
};
