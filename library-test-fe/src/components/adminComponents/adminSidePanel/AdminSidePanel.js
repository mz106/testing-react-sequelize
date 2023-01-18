import React from "react";
import "./adminSidePanel.css";

const UserPara = ({ user, selectedUser, setSelectedUser }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setSelectedUser(user);
    console.log(selectedUser);
  };
  return (
    <p className="container-user" onClick={handleClick}>
      {user.username}
    </p>
  );
};

const AdminSidePanel = ({ users, selectedUser, setSelectedUser }) => {
  return (
    <div className="sidepanel-wrapper">
      {users.map((user) => (
        <>
          <UserPara
            user={user}
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
          />
        </>
      ))}
    </div>
  );
};

export default AdminSidePanel;
