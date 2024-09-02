// import { useDispatch } from "react-redux";
// import { userLogout } from "../store/authSlice.js";

// const SessionExpiredPopup = () => {
//   const dispatch = useDispatch();

//   const handleLogout = () => {
//     dispatch(userLogout()); // Clear user data and tokens
//     window.location.href = "/login"; // Redirect to login page
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white p-8 rounded-lg shadow-lg text-center">
//         <h2 className="text-2xl font-bold mb-4">Session Expired</h2>
//         <p className="mb-6">Your session has expired. Please log in again.</p>
//         <button
//           onClick={handleLogout}
//           className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg"
//         >
//           Log In Again
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SessionExpiredPopup;


import { useDispatch } from "react-redux";
import { userLogout } from "../store/authSlice.js";

const SessionExpiredPopup = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userLogout()); // Clear user data and tokens
    window.location.href = "/login"; // Redirect to login page
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      role="dialog"
      aria-labelledby="session-expired-title"
      aria-describedby="session-expired-description"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 id="session-expired-title" className="text-2xl font-bold mb-4">
          Session Expired
        </h2>
        <p id="session-expired-description" className="mb-6">
          Your session has expired. Please log in again.
        </p>
        <button
          onClick={handleLogout}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg"
        >
          Log In Again
        </button>
      </div>
    </div>
  );
};

export default SessionExpiredPopup;
