import React, { useEffect, useContext } from "react";

// axios
import axios from "axios";

// state
import AuthContext from "./../../store/auth-context";

// css
import Lc from "./Css/List.module.css";

export default function List() {
  const authCtx = useContext(AuthContext);

  const viewAtt = async () => {
    try {
      const res = await axios.get("/api/attendance/View", {
        headers: { Authorization: `${authCtx.token}` },
      });

      console.log(res.data);
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
