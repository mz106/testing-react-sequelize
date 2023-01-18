import { useEffect, useContext, useState } from "react";
import UserContext from "../../components/context/UserContext";
import AdminContainer from "../../components/adminComponents/adminContainer/AdminContainer";
import "./adminPage.css";
import AdminSidePanel from "../../components/adminComponents/adminSidePanel/AdminSidePanel";
import AdminData from "../../components/adminComponents/adminData/AdminData";

const AdminPage = () => {
  const { users, setUsers } = useContext(UserContext);
  const [selectedUser, setSelectedUser] = useState();
  useEffect(() => {
    async function getAllUsers() {
      const res = await fetch("http://localhost/user");
      const data = await res.json();
      await setUsers(data);
    }
    console.log(users);
    getAllUsers();
  }, []);
  return (
    <div className="admin-wrapper">
      <AdminSidePanel
        users={users}
        setSelectedUser={setSelectedUser}
        selectedUser={selectedUser}
      />
      <AdminData
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
      />
    </div>
  );
};

export default AdminPage;
