import React, { useContext, useState } from "react";

// state
import AuthContext from "./../../store/auth-context";

// Css
import SCss from "./Css/Start.module.css";
import axios from "axios";
import ControlButton from "../ControlButton";

export default function Start({ refresh, setLoading, err }) {
  const authCtx = useContext(AuthContext);
  const [error, setError] = useState({
    message: "",
    error: false,
    index: 0,
  });

  const handleClick = async (e, state, index) => {
    try {
      const resp = await axios.post(
        "/api/attendance/StartorStopAttendance",
        {
          email: authCtx.user.email,
          value: state,
        },
        { headers: { Authorization: authCtx.token } }
      );
    } catch (err) {
      setError({
        error: true,
        message: "Failed",
        index: index,
      });
      console.error(err);
    }
  };
  const setErrorState = (value) => {
    setError((prev) => ({ ...prev, error: value }));
  };

  const handleRefresh = () => {
    setLoading(true);
    refresh();
  };

  return (
    <div className={SCss.mainContainer}>
      <h4>Controls</h4>
      <div className={`${SCss.container} ${SCss.inline}`}>
        <div className={`${SCss.container}`}>
          <ControlButton
            errorObject={error}
            text="Start"
            clickHandler={(e) => handleClick(e, true, 0)}
            setErrorState={setErrorState}
            index={0}
          />

          <ControlButton
            errorObject={error}
            text="Stop"
            clickHandler={(e) => handleClick(e, false, 1)}
            setErrorState={setErrorState}
            index={1}
          />
          <ControlButton
            errorObject={error}
            text="Refresh"
            clickHandler={handleRefresh}
            setErrorState={setErrorState}
            index={2}
          />
        </div>
      </div>
    </div>
  );
}
