import React, { useState } from "react";

// Css
import LCss from "./Css/Login.module.css";

export default function Login() {
  const [showUser, setUser] = useState({ email: "", password: "" });
  const [showPassword, setPassword] = useState(false);

  const DataInp = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...showUser, [name]: value });
  };

  const PostData = async () => {
    console.log("first");
  };
  return (
    <div className={LCss.mDIv}>
      <p>Login</p>
      <input type="email" name="email" placeholder="Email" onChange={DataInp} />
      <input
        type={showPassword ? "text" : "password"}
        name="password"
        placeholder="Password"
        onChange={DataInp}
      />
      <div
        onClick={() => {
          setPassword(!showPassword);
        }}
      >
        {showPassword ? "Show Password" : "Hide Password"}
      </div>

      <div>
        <button onClick={PostData}>Login</button>
      </div>
    </div>
  );
}
