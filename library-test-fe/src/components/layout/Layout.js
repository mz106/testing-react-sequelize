import { useState } from "react";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import UserContext from "../context/UserContext";
import AdminContext from "../context/AdminContext";

const Layout = ({ children }) => {
  const [user, setUser] = useState({});
  const [activities, setActivities] = useState([]);
  const [videos, setVideos] = useState([]);
  const [video, setVideo] = useState();
  const [activity, setActivity] = useState({ name: "bill" });
  const [users, setUsers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState({});
  return (
    <>
      <UserContext.Provider
        value={{
          user,
          setUser,
          videos,
          setVideos,
          activities,
          setActivities,
          video,
          setVideo,
          activity,
          setActivity,
          users,
          setUsers,
          courses,
          setCourses,
          selectedCourse,
          setSelectedCourse,
        }}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </UserContext.Provider>
    </>
  );
};

export default Layout;
