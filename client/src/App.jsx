// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Outlet } from "react-router-dom";
// import Header from "./components/Header.jsx";
// import { fetchCurrentUser } from "./store/authSlice.js";
// import "./App.css";

// function App() {
//   const [loading, setLoading] = useState(true);
//   const dispatch = useDispatch();
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

//   useEffect(() => {
//     if (isAuthenticated) {
//       dispatch(fetchCurrentUser())
//         .unwrap()
//         .finally(() => setLoading(false));
//     } else {
//       setLoading(false);
//     }
//   }, [dispatch, isAuthenticated]);

//   return !loading ? (
//     <div>
//       <Header />
//       <Outlet />
//     </div>
//   ) : null;
// }

// export default App;



// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Outlet } from "react-router-dom";
// import Header from "./components/Header.jsx";
// import { fetchCurrentUser } from "./store/authSlice.js";
// import "./App.css";

// function App() {
//   const [loading, setLoading] = useState(true);
//   const dispatch = useDispatch();
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

//   useEffect(() => {
//     // Fetch current user data if authenticated
//     if (isAuthenticated) {
//       dispatch(fetchCurrentUser())
//         .unwrap()
//         .catch((error) => {
//           console.error("Error fetching current user:", error);
//         })
//         .finally(() => setLoading(false));
//     } else {
//       // If not authenticated, just stop loading
//       setLoading(false);
//     }
//   }, [dispatch, isAuthenticated]);

//   if (loading) {
//     return <div>Loading...</div>; // Optionally, show a loading spinner or message
//   }

//   return (
//     <div>
//       <Header />
//       <Outlet />
//     </div>
//   );
// }

// export default App;


// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Outlet } from "react-router-dom";
// import Header from "./components/Header.jsx";
// import { fetchCurrentUser } from "./store/authSlice.js";
// import "./App.css";

// function App() {
//   const [loading, setLoading] = useState(true);
//   const dispatch = useDispatch();
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

//   useEffect(() => {
//     // Fetch current user data if authenticated
//     if (isAuthenticated) {
//       dispatch(fetchCurrentUser())
//         .unwrap()
//         // .then((userData) => {
//         //   // Log the user data to the console
//         //   console.log("Current User Data:", userData);
//         // })
//         .catch((error) => {
//           console.error("Error fetching current user:", error);
//         })
//         .finally(() => setLoading(false));
//     } else {
//       // If not authenticated, just stop loading
//       setLoading(false);
//     }
//   }, [dispatch, isAuthenticated]);

//   if (loading) {
//     return <div>Loading...</div>; // Optionally, show a loading spinner or message
//   }

//   return (
//     <div>
//       <Header />
//       <Outlet />
//     </div>
//   );
// }

// export default App;



import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import { fetchCurrentUser } from "./store/authSlice.js";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    // Fetch current user data if authenticated
    if (isAuthenticated) {
      dispatch(fetchCurrentUser())
        .unwrap()
        .catch((error) => {
          console.error("Error fetching current user:", error);
        })
        .finally(() => setLoading(false));
    } else {
      // If not authenticated, just stop loading
      setLoading(false);  
    }
  }, [dispatch, isAuthenticated]);

  // if (loading) {
  //   return <div>Loading...</div>; // Optionally, show a loading spinner or message
  // }

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
