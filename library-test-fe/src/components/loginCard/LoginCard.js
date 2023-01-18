import React from "react";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router";

const LoginCard = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const changeHandler = (e, setter) => {
    setter(e.target.value);
  };

  const submitUserLogin = async (e) => {
    e.preventDefault();
    const reqBody = {
      username: username,
      password: password,
    };
    const res = await fetch("http://localhost/user", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    });

    const data = await res.json();
    console.log("login data: ", data);
    await setUser(data);
    await navigate("/courses");
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={submitUserLogin}>
        <input
          onChange={(e) => changeHandler(e, setUsername)}
          placeholder="username"
        />
        <input
          onChange={(e) => changeHandler(e, setPassword)}
          placeholder="password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginCard;
