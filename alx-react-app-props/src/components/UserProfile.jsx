import React, { useContext } from "react";
import UserContext from "../UserContext";

const UserProfile = () => {
  const user = useContext(UserContext);

  return (
    <div
      style={{
        border: "5px solid gray",
        color: "blue",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h2 style={{ color: "white" }}>{user.name}</h2>
      <p>
        Age: <span style={{ fontWeight: "bold" }}>{user.age}</span>
      </p>
      <p>Bio: {user.bio}</p>
    </div>
  );
};

export default UserProfile;
