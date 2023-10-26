import React, { useState, useEffect, useContext } from "react";

// axios
import axios from "axios";

// state
import AuthContext from "./../../store/auth-context";

// css
import Lc from "./Css/List.module.css";

export default function List({ viewData, loading, error }) {
  if (error) return <div className={Lc.loading}>Error fetching data</div>;
  if (loading) return <div className={Lc.loading}>Loading...</div>;
  return (
    <div>
      {/* <button className={Lc.Refresh} onClick={viewAtt}>
        Refresh
      </button> */}
      <div className={Lc.TdivDiv}>
        <div className={`${Lc.mapDiv} ${Lc.head}`}>
          <div>Name</div>
          <div>Roll</div>
          <div>Branch</div>
          <div>Time</div>
          <div>Date</div>
        </div>
        {viewData.length > 0 ? (
          <>
            {viewData.map((val, key) => {
              return (
                <div key={key} className={Lc.mapDiv}>
                  <div>{val.name}</div>
                  <div>{val.roll}</div>
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
