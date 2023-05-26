import React, { useState, useEffect, useContext } from "react";

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
        console.log(res.data.message);
        setView(res.data.message);
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
    <div>
      <p className={Lc.Refresh} onClick={viewAtt}>
        Refresh
      </p>
      <div className={Lc.TdivDiv}>
        {view.length > 0 ? (
          <>
            {view.map((val, key) => {
              return (
                <div key={key} className={Lc.mapDiv}>
                  <p>{val.roll}</p>
                  <p>{val.name}</p>
                  <p>{val.branch}</p>
                  <p>{val.date}</p>
                </div>
              );
            })}
          </>
        ) : (
          "No Data"
        )}
      </div>
    </div>
  );
}
