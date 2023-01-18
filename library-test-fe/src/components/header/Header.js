import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";

import "./header.css";

const Header = () => {
  const { user } = useContext(UserContext);
  console.log("user header: ", user);
  return (
    <div className="container-header">
      <div className="container-logo">CN LOGO</div>
      {Object.entries(user).length === 0 ? null : (
        <Link to="/profile">Profile</Link>
      )}
      {Object.keys({ isAdmin: true }) ? <Link to="/admin">Admin</Link> : null}
      {Object.entries(user).length === 0 ? null : <h2>{user.user.username}</h2>}
    </div>
  );
};

export default Header;
