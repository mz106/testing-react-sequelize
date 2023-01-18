import React from "react";
import { useEffect, useState } from "react";

const ActivitiesPage = () => {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    async function getAllActivities() {
      const res = await fetch("http://localhost/activity");
      console.log(res);
      const data = await res.json();
      console.log(data);
      await setActivities(data);
    }
    getAllActivities();
  }, []);
  return (
    <div>
      <div>
        {activities.map((activity) => (
          <p>{activity.activity_name}</p>
        ))}
      </div>
    </div>
  );
};

export default ActivitiesPage;
