import React, { useContext } from "react";

// state
import AuthContext from "./../../store/auth-context";

// Css
import SCss from "./Css/Start.module.css";

export default function Start(props) {
  const authCtx = useContext(AuthContext);

  const setStartorStop = async (e, state) => {
    try {
      const res = await fetch(
        `${
          import.meta.env.VITE_Backend_Base
        }/api/attendance/StartorStopAttendance`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: authCtx.user.email,
            value: state,
          }),
        }
      );
      const data = await res.json();
      if (data) {
        console.log(data);
        return;
      }
    } catch (error) {
      return;
    }
  };
  return (
    <div>
      <div className={SCss.mDIv}>
        <p onClick={(e) => setStartorStop(e, "Start")}>Start</p>
        <p onClick={(e) => setStartorStop(e, "Stop")}>Stop</p>
      </div>
    </div>
  );
}
