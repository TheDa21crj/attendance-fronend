import React, { useState, useContext } from "react";

// axios
import axios from "axios";

// state
import AuthContext from "./../../store/auth-context";

// css
import Lc from "./Css/List.module.css";

export default function List() {
  const [view, setView] = useState([]);

  const authCtx = useContext(AuthContext);

  const viewAtt = async () => {
    try {
      const res = await axios.get("/api/attendance/View", {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (res.data.message) {
        setView(res.data.message);
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <p className={Lc.Refresh} onClick={viewAtt}>
        Refresh
      </p>
    </div>
  );
}
