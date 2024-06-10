import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Status = () => {
  const { user } = useContext(UserContext);

  if (!user) return   <h2 className="p-4 block w-full rounded-md text-center text-white bg-orange-700 font-bold text-3xl">Please login </h2>;
  return <div>
      <h2 className="p-4 block w-full rounded-md text-center text-white bg-blue-700 font-bold text-3xl">
    welcome {user.username} sir...
      </h2>
    </div>
};

export default Status;
