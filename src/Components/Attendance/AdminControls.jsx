import React, { useContext } from "react";

// state
import AuthContext from "./../../store/auth-context";

// Css
import SCss from "./Css/Start.module.css";
import axios from "axios";

export default function AdminControls({ refresh, setLoading }) {
  const authCtx = useContext(AuthContext);

  const handleClick = async (e, state) => {
    try {
      const resp = await axios.post(
        "/api/attendance/toggleAdminAttendance",
        {
          value: state,
        },
        { headers: { Authorization: authCtx.token } }
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handleRefresh = () => {
    setLoading(true);
    refresh();
  };
  return (
    <div className={`${SCss.mainContainer} ${SCss.adminContainer}`}>
      <h4>Admin Controls</h4>
      <div className={`${SCss.container}`}>
        <button className={SCss.btn} onClick={(e) => handleClick(e, true)}>
          Start
        </button>
        <button className={SCss.btn} onClick={(e) => handleClick(e, false)}>
          Stop
        </button>
      </div>
    </div>
  );
}
