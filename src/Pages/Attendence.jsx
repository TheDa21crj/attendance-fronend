import React, { useState, useEffect, useContext } from "react";

// Components
import Start from "./../Components/Attendance/Start";
import List from "./../Components/Attendance/List";
import AuthContext from "../store/auth-context";
import axios from "axios";

export default function Attendence() {
  const [view, setView] = useState([]);
  const [loading, setLoading] = useState(true);

  const authCtx = useContext(AuthContext);

  const viewAtt = async () => {
    try {
      const res = await axios.get("/api/attendance/View", {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (res.data.attandanceArr) {
        setView(res.data.attandanceArr);
        setLoading(false);
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    viewAtt();
  }, []);
  return (
    <div className="attendanceBox">
      <Start refresh={viewAtt} setLoading={setLoading} />
      <List viewData={view} loading={loading} />
    </div>
  );
}
