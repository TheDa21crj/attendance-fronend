import React, { useState, useEffect, useContext } from "react";

// axios
import axios from "axios";

// state
import AuthContext from "./../../store/auth-context";

// css
import Lc from "./Css/List.module.css";

const dummyData = [
  {
    roll: 1,
    name: "Tom",
    branch: "EEE",
    time: new Date().getHours() + ":" + new Date().getMinutes(),
    date: new Date().toDateString(),
  },
  {
    roll: 2,
    name: "Dan",
    branch: "ECE",
    time: new Date().getHours() + ":" + new Date().getMinutes(),
    date: new Date().toDateString(),
  },
  {
    roll: 3,
    name: "Pot",
    branch: "ECS",
    time: new Date().getHours() + ":" + new Date().getMinutes(),
    date: new Date().toDateString(),
  },
];

export default function List() {
  const [view, setView] = useState([]);

  const authCtx = useContext(AuthContext);

  const viewAtt = async () => {
    try {
      setView(dummyData);

      const res = await axios.get("/api/attendance/View", {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (res.data.message) {
        console.log(res.data.message);
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
      <button className={Lc.Refresh} onClick={viewAtt}>
        Refresh
      </button>
      <div className={Lc.TdivDiv}>
        <div className={Lc.mapDiv + " " + Lc.head}>
          <div>Roll</div>
          <div>Name</div>
          <div>Branch</div>
          <div>Time</div>
          <div>Date</div>
        </div>
        {view.length > 0 ? (
          <>
            {view.map((val, key) => {
              return (
                <div key={key} className={Lc.mapDiv}>
                  <div>{val.roll}</div>
                  <div>{val.name}</div>
                  <div>{val.branch}</div>
                  <div>{val.time}</div>
                  <div>{val.date}</div>
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
