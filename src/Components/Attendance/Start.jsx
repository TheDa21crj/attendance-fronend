import React, { useContext } from "react";

// state
import AuthContext from "./../../store/auth-context";

// Css
import SCss from "./Css/Start.module.css";
import axios from "axios";

export default function Start(props) {
  const authCtx = useContext(AuthContext);

  const setStartorStop = async (e, state) => {
    try {
      const resp = await axios.post("/api/attendance/StartorStopAttendance", {
        email: authCtx.user.email,
        value: state,
      });
      // const res = await fetch(
      //   "/api/attendance/StartorStopAttendance`,
      //   {
      //     method: "POST",
      //     headers: {
      //       Accept: "application/json",
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       email: authCtx.user.email,
      //       value: state,
      //     }),
      //   }
      // );
      // const data = await res.json();
      console.log(resp);
      // if (data) {
      //   console.log(data);
      //   return;
      // }
    } catch (error) {
      // console.log(error);
      return;
    }
  };
  return (
    <div>
      <div className={SCss.container}>
        <button className={SCss.btn} onClick={(e) => setStartorStop(e, true)}>
          Start
        </button>
        <button className={SCss.btn} onClick={(e) => setStartorStop(e, false)}>
          Stop
        </button>
      </div>
    </div>
  );
}
