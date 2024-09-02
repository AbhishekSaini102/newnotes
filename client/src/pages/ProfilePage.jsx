/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Profile</h1>
      {user && (
        <div>
          <img
            src={user.avatar || "/default-avatar.png"}
            alt="User Avatar"
            className="w-20 h-20 rounded-full"
          />
          <p>
            <strong>Name:</strong> {user.fullName}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          {/* Add other user details here */}
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
