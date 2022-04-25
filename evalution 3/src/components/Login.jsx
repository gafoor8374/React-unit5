import React from "react"
import { AuthContext } from "../contexts/AuthContext";
import {useContext} from "react"
import { Navigate } from "react-router-dom";

export const Login = () => {
  //  use reqres to log user in.
  const {handleChange,handleLogin,isAuth} = useContext(AuthContext)

  return !isAuth ? (
    <form className="loginform" onSubmit={handleLogin}>
      <input
        onChange={handleChange}
        name="email"
        type="text"
        placeholder="Enter username"
        className="login_username"
      />
      <input
        onChange={handleChange}
        name="password"
        type="text"
        placeholder="Enter password"
        className="login_password"
      />
      <input type="submit" value="SIGN IN" className="login_submit" />
    </form>
  ) : (
    <Navigate to={"/"} />
  );
};
