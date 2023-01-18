import { useState } from "react";

const AdminInfo = ({ selectedUser, handleSubmit, reviewed }) => {
  console.log("admin info selected user: ", selectedUser);
  const [hasBeenReviewed, setHasBeenReviewed] = useState(false);

  return (
    <>
      {selectedUser ? (
        <>
          <p>{selectedUser.username}</p>
          {selectedUser.userSubArr.map((user, index) => (
            <>
              <p key={user.UserId} value={index}>
                {user.activity_name}
              </p>
              {/* {selectedUser.userSubArr[index].is_reviewed === true
                ? setHasBeenReviewed(true)
                : setHasBeenReviewed(false)} */}
              <p>
                {selectedUser.userSubArr[index].is_reviewed === true
                  ? "Passed"
                  : "Pending"}
              </p>
              <button onClick={handleSubmit} value={user.id} title={index}>
                Submit Review
              </button>
            </>
          ))}
        </>
      ) : (
        <p>Choose a user</p>
      )}
    </>
  );
};

export default AdminInfo;

// selectedUser.userSubArr[index].is_reviewed === true;
