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

const ProfileIcon = ({ isCollapsed }) => {
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
    <div className="relative flex items-center" ref={dropdownRef}>
      {/* {isDropdownOpen && (
          <div
            className={`absolute ${isCollapsed ? "left-16 bottom-3 " : "right-0 bottom-full mb-2"} w-full bg-stone-100 ${isCollapsed ? "border border-gray-500 w-48" : "border w-64"} text-left rounded-md shadow-lg`}
          >
            <Link
              to="/profile"
              className={`flex items-center px-6 py-1.5 w-full text-custom-gray hover:bg-stone-200 ${isCollapsed ? "text-xs" : "text-md "}`}
              onClick={() => setIsDropdownOpen(false)}
            >
              <IconProfile />
              <span
                className={`ml-2 ${isCollapsed ? "text-sm " : "text-md text-custom-gray "}`}
              >
                Profile
              </span>
            </Link>
            <Link
              to="/account"
              className={`flex items-center px-6 py-1.5 w-full text-custom-gray hover:bg-stone-200 ${isCollapsed ? "text-xs" : "text-sm"}`}
              onClick={() => setIsDropdownOpen(false)}
            >
              <IconAccount />
              <span className={`ml-2 ${isCollapsed ? "text-sm" : "text-sm"}`}>
                Account
              </span>
            </Link>
            <Link
              to="/settings"
              className={`flex items-center px-6 py-1.5 w-full text-custom-gray hover:bg-stone-200 ${isCollapsed ? "text-xs" : "text-sm"}`}
              onClick={() => setIsDropdownOpen(false)}
            >
              <IconSettings />
              <span
                className={`ml-2 ${isCollapsed ? "text-md font-semibold" : "text-md"}`}
              >
                Settings
              </span>
            </Link>
            <LogoutButton
              className={`flex items-center px-6 py-1.5 w-full text-custom-gray hover:bg-stone-200 ${isCollapsed ? "text-xs" : "text-sm"}`}
              onClick={() => setIsDropdownOpen(false)}
            >
              <IconLogout />
              <span className={`ml-2 ${isCollapsed ? "text-xs" : "text-sm"}`}>
                Logout
              </span>
            </LogoutButton>
          </div>
        )} */}

      {isDropdownOpen && (
        <div
          className={`absolute ${isCollapsed ? "left-16 bottom-3 bg-red" : "right-0 bottom-full mb-2"} bg-stone-100 ${isCollapsed ? "border border-gray-500 w-36 py-2  px-1.5 " : "border w-full "} text-left rounded-lg shadow-lg`}
        >
          <Link
            to="/profile"
            className={`flex items-center px-6 py-1.5 w-full rounded-md text-custom-gray hover:bg-stone-200 ${isCollapsed ? "text-sm" : "text-md"}`}
            onClick={() => setIsDropdownOpen(false)}
          >
            <IconProfile />
            <span className={`ml-2 ${isCollapsed ? "text-sm" : "text-md"}`}>
              Profile
            </span>
          </Link>
          <Link
            to="/account"
            className={`flex items-center px-6 py-1.5 w-full rounded-md text-custom-gray hover:bg-stone-200 ${isCollapsed ? "text-sm" : "text-md"}`}
            onClick={() => setIsDropdownOpen(false)}
          >
            <IconAccount />
            <span className={`ml-2 ${isCollapsed ? "text-sm" : "text-md"}`}>
              Account
            </span>
          </Link>
          <Link
            to="/settings"
            className={`flex items-center px-6 py-1.5 w-full rounded-md text-custom-gray hover:bg-stone-200 ${isCollapsed ? "text-sm" : "text-md"}`}
            onClick={() => setIsDropdownOpen(false)}
          >
            <IconSettings />
            <span className={`ml-2 ${isCollapsed ? "text-sm" : "text-md"}`}>
              Settings
            </span>
          </Link>
          <LogoutButton
            className={`flex items-center px-6 py-1.5 w-full rounded-md text-custom-gray hover:bg-stone-200 ${isCollapsed ? "text-sm" : "text-md"}`}
            onClick={() => setIsDropdownOpen(false)}
          >
            <IconLogout />
            <span className={`ml-2 ${isCollapsed ? "text-sm" : "text-md"}`}>
              Logout
            </span>
          </LogoutButton>
        </div>
      )}

      <div
        className={`flex items-center w-full cursor-pointer ${isCollapsed ? "border-none" : "border border-gray-200"} rounded-lg px-0.5 py-1 w-full ${isCollapsed ? "justify-center" : "justify-start"}`}
        onClick={toggleDropdown}
      >
        {user?.avatar ? (
          <span
            className={` ${isCollapsed ? "w-12/12 border-2 border-white rounded-full shadow-sm " : "w-4/12 ml-1"}`}
          >
            <img
              src={user.avatar}
              alt="User Avatar"
              className={`rounded-full w-10 h-10`}
            />
          </span>
        ) : (
          <span className={` ${isCollapsed ? "w-full " : "w-2/12 "}`}>
            <div
              className={`rounded-full w-10 h-10 ${isCollapsed ? "bg-black text-white" : "bg-black text-white"} flex items-center justify-center font-semibold text-xs`}
            >
              {user?.fullName ? getInitials(user.fullName) : "?"}
            </div>
          </span>
        )}
        {!isCollapsed && (
          <div className="ml-3 flex flex-col w-8/12">
            <span className="text-sm font-medium text-gray-900 truncate">
              {user?.fullName || "User"}
            </span>
            <span className="text-sm text-gray-500 truncate">
              {user?.email || "user@example.com"}
            </span>
          </div>
        )}
        {!isCollapsed && (
          <div className="w-2/12 flex items-center ml-4 mb-0.5 justify-center">
            <span className="text-sm">▼</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileIcon;



