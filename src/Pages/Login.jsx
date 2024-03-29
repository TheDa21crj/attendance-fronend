import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

// State
import AuthContext from "./../store/auth-context";

// axios
import axios from "axios";

import LoginStyle from "./Css/Form.module.css";

export default function Login() {
  const [showUser, setUser] = useState({ Email: "", Password: "" });
  const [show, set] = useState("");

  const authCtx = useContext(AuthContext);

  const redirect = useNavigate();

  const DataInp = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "Email") {
      if (value.indexOf("@") === -1 || value.indexOf(".") === -1) {
        e.target.style.border = "2px solid  #FF0000";
        e.target.style.outline = "none";
      } else {
        e.target.style.border = "2px solid  transparent";
      }
    }
    if (name === "Password") {
      if (value === "") {
        e.target.style.border = "2px solid  #FF0000";
        e.target.style.outline = "none";
      } else {
        e.target.style.border = "2px solid  transparent";
      }
    }

    setUser({ ...showUser, [name]: value });
  };

  const login = async () => {
    const { Email, Password } = showUser;

    if (
      Password !== "" &&
      Email !== "" &&
      Email.indexOf("@") > -1 &&
      Email.indexOf(".") !== -1
    ) {
      const userObject = {
        email: Email,
        password: Password,
      };
      try {
        const res = await axios.post("/api/user/Login", userObject, {
          headers: { Authorization: `` },
        });
        const data = res.data;

        if (data.success == true) {
          const info = data.user;

          await authCtx.login(
            info.name,
            info.email,
            info.avatar,
            res.data.token,
            10800000,
            info.branch,
            info.roll
          );

          redirect("/Attendence");
        }
      } catch (err) {
        console.error(err);
        set("Invalid Credentials");
      }
    } else {
      set("Please fill all the fields");
      console.log("Error");
    }
  };

  return (
    <div className={LoginStyle.form}>
      <div className={LoginStyle.inputDiv}>
        <input
          type="email"
          name="Email"
          id="Email"
          placeholder="Ente your email"
          onChange={DataInp}
        />
      </div>
      <div className={LoginStyle.inputDiv}>
        <input
          type="password"
          name="Password"
          id="Password"
          placeholder="Enter your password"
          onChange={DataInp}
        />
      </div>
      <div>{show}</div>
      <div className={LoginStyle.inputDiv}>
        <button
          type="button"
          className="w-[95%] mt-5 bg-[#ff673a] text-white rounded-md py-3 font-bold text-xl"
          onClick={login}
        >
          Login
        </button>
      </div>
      <div className={LoginStyle.inputDiv}>
        <p className="text-center mt-5 text-white">
          Don't have an account?
          <span className="text-blue-500">
            {" "}
            <Link to="/Register">Sign up</Link>
          </span>
        </p>
      </div>
    </div>
  );
}
