// import { useDispatch } from "react-redux";
// import { userLogout } from "../store/authSlice";
// import { useNavigate } from "react-router-dom";

// const LogoutButton = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     dispatch(userLogout());
//     navigate("/login"); // Redirect to the login page after logout
//   };

//   return (
//     <button
//       onClick={handleLogout}
//       className="px-6 py-1.5 w-full text-left bg-stone-200 text-custom-gray rounded-b-md
//        hover:bg-stone-300 hover:text-custom-gray font-semibold transition duration-150 ease-in-out"
//     >
//       Logout
//     </button>
//   );
// };

// export default LogoutButton;

import { useDispatch } from "react-redux";
import { userLogout } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

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

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(userLogout());
    navigate("/login"); // Redirect to the login page after logout
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center px-6 py-1 w-full text-left bg-stone-100 text-custom-gray rounded-md
       hover:bg-stone-200 hover:text-custom-gray font-semibold transition duration-150 ease-in-out"
    >
      <IconLogout />
      <span className="ml-2">Logout</span>
    </button>
  );
};

export default LogoutButton;