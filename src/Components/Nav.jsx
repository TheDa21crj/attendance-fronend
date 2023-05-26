import React, { useContext } from "react";
import { Link } from "react-router-dom";

// state
import AuthContext from "./store/auth-context";

// css
import NCss from "./Css/Nav.module.css";

export default function Nav() {
  const authCtx = useContext(AuthContext);
  return (
    <div className={NCss.mDiv}>
      <Link to="/" className="LinkStyle">
        Nav
      </Link>
      <Link to="/Login" className="LinkStyle">
        Login/Register
      </Link>
    </div>
  );
}
