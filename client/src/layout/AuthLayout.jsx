/* eslint-disable no-unused-vars */
// import { useEffect, useState } from "react";
// import PropTypes from "prop-types";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { fetchCurrentUser } from "../store/authSlice.js";

// export default function AuthLayout({ children }) {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [loader, setLoader] = useState(true);
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const user = useSelector((state) => state.auth.user);
//   const isLoading = useSelector((state) => state.auth.isLoading);

//   useEffect(() => {
//     if (!isAuthenticated) {
//       navigate("/login"); // Redirect if not authenticated
//     } else if (isAuthenticated && !user) {
//       // Fetch user data if authenticated but user data is missing
//       navigate("/");
//       dispatch(fetchCurrentUser())
//         .unwrap()
//         .finally(() => setLoader(false));
//     } else {
//       setLoader(false);
//     }
//   }, [isAuthenticated, user, navigate, dispatch]);

//   // Show loader while fetching user data
//   if (loader || isLoading) {
//     return <h1>Loading...</h1>;
//   }

//   // Render children if authentication is valid
//   return <>{children}</>;
// }

// AuthLayout.propTypes = {
//   children: PropTypes.node.isRequired,
// };


import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchCurrentUser, resetAuthState } from "../store/authSlice.js";

export default function AuthLayout({ children }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(true);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const showSessionExpiredPopup = useSelector(
    (state) => state.auth.showSessionExpiredPopup
  );

  useEffect(() => {
    const checkAuthentication = async () => {
      if (isAuthenticated && !user) {
        // Fetch user data if authenticated but user data is missing
        try {
          await dispatch(fetchCurrentUser()).unwrap();
        } catch (error) {
          dispatch(resetAuthState());
          navigate("/login");
        }
      } else if (!isAuthenticated) {
        navigate("/login");
      } else {
        setLoader(false);
      }
    };

    checkAuthentication();
  }, [isAuthenticated, user, navigate, dispatch]);

  // Show loader while fetching user data
  if (loader || isLoading) {
    return <h1>Loading...</h1>;
  }

  // Show session expired popup if needed
  // if (showSessionExpiredPopup) {
  //   return <h1>Session Expired. Please log in again.</h1>;
  // }

  // Render children if authentication is valid
  return <>{children}</>;
}

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
