import { useContext, useState } from "react";
import UserContext from "../../components/context/UserContext";

const ActivityPage = () => {
  const { activity, user } = useContext(UserContext);
  const [ghLink, setGhLink] = useState("");

  const ghLinkChangeHandler = (e) => {
    setGhLink(e.target.value);
    console.log(ghLink);
  };

  const onActivitySubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost/activitySubmission/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        gh_link: ghLink,
        activity_name: activity.name,
        is_reviewed: false,
        UserId: user.user.id,
      }),
    });

    const data = await res.json();
    console.log("data activitypage", data);
    if (data.msg === "success for user_activity_submissions") {
      user.userSubmissions.push(data.activity_submission);
    }
  };

  return (
    <div>
      <p>{activity.cat}</p>
      <h2>Activity Name</h2>
      <p>{activity.name}</p>
      <h2>Introduction</h2>
      <p>{activity.introduction}</p>
      <h2>Part one</h2>
      <p>{activity.part_one}</p>
      <h2>Part two</h2>
      <p>{activity.part_two}</p>
      <form onSubmit={onActivitySubmit}>
        <input
          placeholder="GitHub Link..."
          type="text"
          onChange={ghLinkChangeHandler}
        />
        <button type="submit">Submit Activity</button>
      </form>
    </div>
  );
};

export default ActivityPage;
