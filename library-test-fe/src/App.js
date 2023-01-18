import logo from "./logo.svg";
import "./App.css";

import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import UserProfile from "./pages/userProfile/UserProfile";
import ActivitiesPage from "./pages/activitiesPage/ActivitiesPage";
import VideosPage from "./pages/videosPage/VideosPage";
import VideoPage from "./pages/videoPage/VideoPage";
import UserContext from "./components/context/UserContext";
import ActivityPage from "./pages/activityPage/ActivityPage";
import AdminPage from "./pages/adminPage/AdminPage";
import NotAuthourized from "./pages/notAuthourized/NotAuthourized";
import CoursesPage from "./pages/coursesPage/CoursesPage";
import CoursePage from "./pages/coursePage/CoursePage";

function App() {
  const { video, setVideo, user } = useContext(UserContext);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/course" element={<CoursePage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/activity" element={<ActivityPage />} />
        <Route path="/videos" element={<VideosPage setVideo={setVideo} />} />
        <Route path="/video" element={<VideoPage video={video} />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route
          path="/admin"
          element={
            Object.keys({ isAdmin: true }).length === 0 ? (
              <NotAuthourized />
            ) : (
              <AdminPage />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;
