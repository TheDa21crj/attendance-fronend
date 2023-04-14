import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { adduser } from "./../redux/user";
import { toggleN } from "./../redux/toggleNav";

// css
import NCss from "./Css/Nav.module.css";

export default function Nav() {
  const dispatch = useDispatch();

  useEffect(() => {
    AuthMiddleware();
  }, []);

  const AuthMiddleware = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_Backend_Base}/api/user/account`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      const data = await res.json();

      console.table(data);
      if (data.errors) {
        console.log("errors");
        dispatch(toggleN({ toggle: "false" }));
        return;
      }
      if (data) {
        console.log("==============");
        // setimg(data.message.avatar);
        dispatch(
          adduser({
            _id: data.message._id,
            email: data.message.email,
            imgSrc: data.message.avatar,
            // firstName: data.message.firstName,
            // LastName: data.message.LastName,
            // gender: data.message.gender,
            // PhoneNumber: data.message.PhoneNumber,
          })
        );
        // dispatch(toggleN({ toggle: "true" }));
      }
    } catch (error) {
      dispatch(toggleN({ toggle: "false" }));
      return;
    }
  };
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
