import React, { useContext } from "react";
import { Link } from "react-router-dom";

// state
import AuthContext from "./../store/auth-context";

// css
import NCss from "./Css/Nav.module.css";

export default function Nav() {
  const authCtx = useContext(AuthContext);
  return (
    <div className={NCss.mDiv}>
      <Link to="/" className="LinkStyle">
        Attendance System
      </Link>

      {authCtx.isLoggedIn && (
        <Link to="/Attendence" className="LinkStyle">
          Attendence
        </Link>
      )}
      {authCtx.isLoggedIn ? (
        <Link to="/MyAccount" className={`LinkStyle ${NCss.imageLink}`}>
          <img src={authCtx.user.pic} alt="" className={NCss.imgMA} />
        </Link>
      ) : (
        <Link to="/Login" className="LinkStyle">
          Login
        </Link>
      )}
    </div>
  );
}
