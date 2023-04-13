import React from "react";
import { Link } from "react-router-dom";

// css
import NCss from "./Css/Nav.module.css";

export default function Nav() {
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
