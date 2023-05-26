import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

// state
import AuthContext from "./../store/auth-context";

export default function Attendence() {
  const authCtx = useContext(AuthContext);
  const redirect = useNavigate();

  const logout = () => {
    redirect("/Login");
    authCtx.logout();
  };
  return (
    <div>
      <br />
      <br />
      <p>Name = {authCtx.user.name}</p>
      <p>Email = {authCtx.user.email}</p>
      <br />
      <br />
      <p onClick={logout}>Logout</p>
      <br />
      <br />
      <br />
    </div>
  );
}
