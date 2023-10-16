import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

// state
import AuthContext from "./../store/auth-context";

// axios
import axios from "axios";

import RegisterStyle from "./Css/Form.module.css";

export default function Register() {
  const authCtx = useContext(AuthContext);

  const redirect = useNavigate();

  const [show, set] = useState("");

  const [showUser, setUser] = useState({
    name: "",
    email: "",
    password: "",
    roll: "",
    branch: "",
  });

  const DataInp = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "email") {
      if (value.indexOf("@") === -1 || value.indexOf(".") === -1) {
        e.target.style.border = "2px solid  #FF0000";
        e.target.style.outline = "none";
      } else {
        e.target.style.border = "2px solid  transparent";
      }
    } else if (value === "") {
      e.target.style.border = "2px solid  #FF0000";
      e.target.style.outline = "none";
    } else {
      e.target.style.border = "2px solid  transparent";
    }

    setUser({ ...showUser, [name]: value });
  };

  const submit = async (e) => {
    const { name, email, password, roll, branch } = showUser;

    if (
      name !== "" &&
      email !== "" &&
      password !== "" &&
      email.indexOf("@") > -1 &&
      email.indexOf(".") !== -1 &&
      Number(roll) > 0 &&
      branch !== ""
    ) {
      const userObject = {
        name,
        email,
        password,
        roll,
        branch,
      };
      try {
        const res = await axios.post("/api/user/Register", userObject, {
          headers: { Authorization: `${authCtx.token}` },
        });
        const data = res.data;

        console.log(data);

        if (res.data.exists === false) {
          const info = data.user;
          await authCtx.login(
            info.name,
            info.email,
            info.avatar,
            res.data.token,
            10800000
          );
          if (authCtx.target === null) {
            redirect("/");
          } else {
            redirect(`/${authCtx.target}`);
            authCtx.settarget(null);
          }
        } else {
          alert("Account already exists . please login");
          redirect("/Login");
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      set("Please fill all the fields");
      console.log("Error");
    }
  };

  return (
    <div className={RegisterStyle.form}>
      <div className={RegisterStyle.inputDiv}>
        <input
          type="text"
          name="name"
          id="name"
          className="w-full rounded-md p-3"
          placeholder="Enter your Name"
          onChange={DataInp}
        />
      </div>
      <div className={RegisterStyle.inputDiv}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your Email"
          onChange={DataInp}
        />
      </div>
      <div className={RegisterStyle.inputDiv}>
        <input
          type="password"
          name="password"
          id="password"
          className="w-full rounded-md p-3"
          placeholder="Password"
          onChange={DataInp}
        />
      </div>
      <div className={RegisterStyle.inputDiv}>
        <input
          type="number"
          name="roll"
          id="roll"
          className="w-full rounded-md p-3"
          placeholder="roll"
          onChange={DataInp}
        />
      </div>
      <div className={RegisterStyle.inputDiv}>
        <input
          type="text"
          name="branch"
          id="branch"
          className="w-full rounded-md p-3"
          placeholder="branch"
          onChange={DataInp}
        />
      </div>

      <div className={RegisterStyle.inputDiv}>
        <button type="button" onClick={submit}>
          Sign Up
        </button>

        <div>{show}</div>
      </div>
      <div>
        <p>
          Already have an account?
          <span>
            {" "}
            <Link to="/Login"> Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
}
