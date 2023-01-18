import { useState } from "react";
import "./adminData.css";
import AdminInfo from "./AdminInfo";

const AdminData = ({ selectedUser, setSelectedUser }) => {
  const [reviewed, setReviewed] = useState(false);
  console.log("selected user: ", selectedUser);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(selectedUser);
    console.log(e.target.title);
    console.log("title: ", selectedUser.userSubArr[e.target.title]);

    if (selectedUser.userSubArr[e.target.title].is_reviewed === false) {
      const res = await fetch("http://localhost/activitySubmission/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: e.target.value,
        }),
      });

      const data = await res.json();
      console.log(data);
      console.log("admindata selectedUser: ", selectedUser);
      const updatedSelectedUser = (selectedUser.userSubArr[
        e.target.title
      ].is_reviewed = true);
      console.log("admindata updatedSelectedUser: ", updatedSelectedUser);
      // setSelectedUser(updatedSelectedUser);
      // console.log(selectedUser);
      setReviewed(true);
    } else {
      setReviewed(true);
      console.log("has been reviewed");
    }
  };
  return (
    <div className="admindata-wrapper">
      <h1>AdminData</h1>
      <AdminInfo selectedUser={selectedUser} handleSubmit={handleSubmit} />
    </div>
  );
};

export default AdminData;
