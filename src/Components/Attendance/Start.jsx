import React, { useContext } from "react";

// state
import AuthContext from "./../../store/auth-context";

// Css
import SCss from "./Css/Start.module.css";
import axios from "axios";

export default function Start({ refresh, setLoading }) {
  const authCtx = useContext(AuthContext);

  const setStartorStop = async (e, state) => {
    try {
      const resp = await axios.post("/api/attendance/StartorStopAttendance", {
        email: authCtx.user.email,
        value: state,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleRefresh = () => {
    setLoading(true);
    refresh();
  };
  return (
    <div className={SCss.mainContainer}>
      <h4>Controls</h4>
      <div className={SCss.container}>
        <button className={SCss.btn} onClick={(e) => setStartorStop(e, true)}>
          Start
        </button>
        <button className={SCss.btn} onClick={(e) => setStartorStop(e, false)}>
          Stop
        </button>
        <button className={SCss.btn} onClick={handleRefresh}>
          Refresh
        </button>
      </div>
    </div>
  );
}
