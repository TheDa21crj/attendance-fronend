import React, { useState, useEffect, useContext } from "react";

// Components
import Start from "./../Components/Attendance/Start";
import List from "./../Components/Attendance/List";
import AuthContext from "../store/auth-context";
import axios from "axios";
import AdminControls from "../Components/Attendance/AdminControls";

export default function Attendence() {
  const [view, setView] = useState([]);
  const [loading, setLoading] = useState(true);

  const authCtx = useContext(AuthContext);
  const [error, setError] = useState(false);

  const viewAtt = async () => {
    try {
      const res = await axios.get("/api/attendance/View", {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (res.data.attandanceArr) {
        setView(res.data.attandanceArr);
        setLoading(false);
        setError(false);
      } else {
        console.error("Error occured");
      }
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    viewAtt();
  }, []);

  return (
    <div className="attendanceBox">
      <div className="controls">
        <Start refresh={viewAtt} setLoading={setLoading} err={error} />
        <AdminControls setLoading={setLoading} err={error} />
      </div>
      <List viewData={view} loading={loading} error={error} />
    </div>
  );
}
