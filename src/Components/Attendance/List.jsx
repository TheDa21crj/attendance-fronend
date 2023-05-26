import React, { useEffect, useContext } from "react";

// axios
import axios from "axios";

// state
import AuthContext from "./../../store/auth-context";

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

  // useEffect(() => {
  //   viewAtt();
  // }, []);

  return (
    <div>
      <div onClick={viewAtt}>List</div>
    </div>
  );
}
