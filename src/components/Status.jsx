import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Status = () => {
  const { user } = useContext(UserContext);

  if (!user) return <div>no user available</div>;
  return <div>welcome {user.username} sir...</div>;
};

export default Status;
