import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import store from "./store/store.js";
import App from "./App.jsx";
// import AuthLayout from "./layout/AuthLayout.jsx";
// import Home from "./components/Home"; // Assuming you have a Home component
import "./index.css";
import { Login, Register} from "./components/index.js"

//Pages
import Home from "./pages/Home.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
// import Login from "./pages/login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          // <AuthLayout>
            <Home />
          // </AuthLayout>    
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Register />,
      },
      {
        path:"/profile",
        element: <ProfilePage />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
