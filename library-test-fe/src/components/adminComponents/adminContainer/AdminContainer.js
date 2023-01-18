import React from "react";
import AdminData from "../adminData/AdminData";
import AdminSidePanel from "../adminSidePanel/AdminSidePanel";

import "./adminContainer.css";

const AdminContainer = ({ users }) => {
  return (
    <div className="wrapper">
      <AdminSidePanel users={users} />
      <p>hello</p>
    </div>
  );
};

export default AdminContainer;
