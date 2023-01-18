import { useContext, useEffect } from "react";
import UserContext from "../../components/context/UserContext";

const UserProfile = () => {
  const { user } = useContext(UserContext);
  console.log("user: ", user.user, "user submissions: ", user.userSubmissions);

  return (
    <div>
      <h1>User Profile</h1>
      <p>{user.username}</p>
      {user.userSubmissions.map((submission, key) => (
        <>
          <p>{submission.activity_name}</p>
          <p>{submission.is_reviewed ? "Reviewed" : "Pending Review"}</p>
        </>
      ))}
    </div>
  );
};

export default UserProfile;
