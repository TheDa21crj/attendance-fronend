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
    <div className="accountContainer">
      <section className="accountBox">
        <div>Name</div>
        <div>{authCtx.user.name}</div>
        <div>Email</div>
        <div>{authCtx.user.email}</div>
      </section>

      <button onClick={logout}>Logout</button>
    </div>
  );
}
