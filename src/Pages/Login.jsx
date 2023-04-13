import React from "react";

// Css
import LCss from "./Css/Login.module.css";

export default function Login() {
  return (
    <div className={LCss.mDIv}>
      <p>Login</p>
      <input type="email" name="" id="" placeholder="Email" />
      <input type="password" name="" id="" placeholder="Password" />
    </div>
  );
}
