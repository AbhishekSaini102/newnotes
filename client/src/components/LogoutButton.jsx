import { useDispatch } from "react-redux";
import { userLogout } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

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
      className="px-6 py-1.5 bg-red-500 text-white rounded-md hover:bg-red-600 hover:text-white transition duration-150 ease-in-out"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
