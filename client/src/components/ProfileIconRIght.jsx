/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";

// Icons
const IconProfile = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const IconAccount = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <line x1="19" y1="8" x2="19" y2="14"></line>
    <line x1="22" y1="11" x2="16" y2="11"></line>
  </svg>
);

const IconSettings = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);

const IconLogout = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
    <polyline points="16 17 21 12 16 7"></polyline>
    <line x1="21" y1="12" x2="9" y2="12"></line>
  </svg>
);

const ProfileIconRight = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const dropdownRef = useRef(null);

  const getInitials = (name) => {
    const nameParts = name.split(" ");
    if (nameParts.length > 1) {
      return `${nameParts[0][0]}${nameParts[1][0]}`.toUpperCase();
    } else {
      return nameParts[0][0].toUpperCase();
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative flex items-center justify-end" ref={dropdownRef}>
      <div
        className="flex items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        {user?.avatar ? (
          <span className="mr-2 border-2 border-white border-opacity-50 rounded-full shadow-sm">
            <img
              src={user.avatar}
              alt="User Avatar"
              className="rounded-full w-9 h-9 shadow-md"
            />
          </span>
        ) : (
          <span className="w-10 h-10">
            <div className="rounded-full w-9 h-9 bg-black text-white flex items-center justify-center font-semibold text-xs">
              {user?.fullName ? getInitials(user.fullName) : "?"}
            </div>
          </span>
        )}
      </div>

      {isDropdownOpen && (
        <div className="absolute right-1 top-12 bg-white bg-transparent border border-gray-200 w-64 text-left rounded-lg shadow-lg ">
          <div className="flex items-center justify-center py-2 truncate space-x-2  ">
            {user?.avatar ? (
              <img
                src={user.avatar}
                alt="User Avatar"
                className="rounded-full w-10 h-10 mr-3"
              />
            ) : (
              <div className="rounded-full w-8 h-8  bg-black text-white flex items-center justify-center font-semibold text-xs truncate">
                {user?.fullName ? getInitials(user.fullName) : "?"}
              </div>
            )}
            <div className="flex flex-col truncate">
              <span className="text-md font-medium text-gray-900 truncate">
                {user?.fullName || "User"}
              </span>
              <span className="text-sm text-gray-500 truncate">
                {user?.email || "user@example.com"}
              </span>
            </div>
          </div>
          <div className="border-t border-gray-200 divide-y divide-gray-200">
            <Link
              to="/profile"
              className="flex items-center px-6 py-1.5 w-full text-custom-gray hover:bg-stone-200"
              onClick={() => setIsDropdownOpen(false)}
            >
              <IconProfile />
              <span className="ml-2 text-md">Profile</span>
            </Link>
            <Link
              to="/account"
              className="flex items-center px-6 py-1.5 w-full text-custom-gray hover:bg-stone-200"
              onClick={() => setIsDropdownOpen(false)}
            >
              <IconAccount />
              <span className="ml-2 text-md">Account</span>
            </Link>
            <Link
              to="/settings"
              className="flex items-center px-6 py-1.5 w-full text-custom-gray hover:bg-stone-200"
              onClick={() => setIsDropdownOpen(false)}
            >
              <IconSettings />
              <span className="ml-2 text-md">Settings</span>
            </Link>
            <LogoutButton
              className="flex items-center px-6 py-1.5 w-full text-custom-gray hover:bg-stone-200"
              onClick={() => setIsDropdownOpen(false)}
            >
              <IconLogout />
              <span className="ml-2 text-md">Logout</span>
            </LogoutButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileIconRight;
