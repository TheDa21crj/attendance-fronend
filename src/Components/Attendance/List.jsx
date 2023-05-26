import React, { useEffect } from "react";

// axios
import axios from "axios";

export default function List() {
  const viewAtt = async () => {
    try {
      const res = await axios.post("/api/attendance/View", userObject, {
        headers: { Authorization: `` },
      });
    } catch (error) {}
  };

  useEffect(() => {
    viewAtt();
  }, []);

  return <div>List</div>;
}
