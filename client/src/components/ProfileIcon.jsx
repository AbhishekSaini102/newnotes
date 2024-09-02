import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton"; // Import the LogoutButton component

const ProfileIcon = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const user = useSelector((state) => state.auth.user);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      <img
        onClick={toggleDropdown}
        src={user?.avatar || "/default-avatar.png"} // Fallback to a default avatar if user has no avatar
        alt="User Avatar"
        className="w-10 h-10 rounded-full cursor-pointer"
      />
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md">
          <Link
            to="/profile"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            View Profile
          </Link>
          <LogoutButton />
        </div>
      )}
    </div>
  );
};

export default ProfileIcon;
