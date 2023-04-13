import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Css
import LCss from "./Css/Login.module.css";

export default function Login() {
  const [showUser, setUser] = useState({ email: "", password: "" });
  const [showPassword, setPassword] = useState(false);
  const [showError, setError] = useState("");

  const navigate = useNavigate();

  const DataInp = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...showUser, [name]: value });
  };

  const PostData = async () => {
    const { email, password } = showUser;

    const res = await fetch(
      `${import.meta.env.VITE_Backend_Base}/api/user/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const r = await res.json();

    if (r.errors) {
      setError("Invalid Credentials");
    } else if (!r.errors) {
      setError("Success");
      navigate("/");
    } else {
      setError("Unwanted Error");
    }
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
      <p>{showError}</p>
    </div>
  );
}
