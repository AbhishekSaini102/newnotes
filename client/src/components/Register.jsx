import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userRegister } from "../store/authSlice.js";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((state) => state.auth);

  const [userData, setUserData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    avatar: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleFileChange = (e) => {
    setUserData({ ...userData, avatar: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(userData).forEach((key) => {
      formData.append(key, userData[key]);
    });
    dispatch(userRegister(formData)).then((action) => {
      if (userRegister.fulfilled.match(action)) {
        navigate("/login");
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-indigo-800 tracking-tight">
          Create Your Account
        </h2>
        {error && (
          <div className="text-red-500 mb-4 text-center font-medium">
            {error}
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="space-y-6"
        >
          <div className="relative">
            <input
              type="text"
              name="fullName"
              id="register-fullName"
              value={userData.fullName}
              onChange={handleChange}
              className="w-full px-3 py-2 border-b-2 border-indigo-300 focus:border-indigo-500 focus:outline-none transition-colors duration-300 bg-transparent peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="register-fullName"
              className="absolute left-0 -top-3.5 text-indigo-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-indigo-600 peer-focus:text-sm"
            >
              Full Name
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              name="username"
              id="register-username"
              value={userData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border-b-2 border-indigo-300 focus:border-indigo-500 focus:outline-none transition-colors duration-300 bg-transparent peer"
              placeholder=" "
              required
              autoComplete="username"
            />
            <label
              htmlFor="register-username"
              className="absolute left-0 -top-3.5 text-indigo-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-indigo-600 peer-focus:text-sm"
            >
              Username
            </label>
          </div>
          <div className="relative">
            <input
              type="email"
              name="email"
              id="register-email"
              value={userData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border-b-2 border-indigo-300 focus:border-indigo-500 focus:outline-none transition-colors duration-300 bg-transparent peer"
              placeholder=" "
              required
              autoComplete="email"
            />
            <label
              htmlFor="register-email"
              className="absolute left-0 -top-3.5 text-indigo-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-indigo-600 peer-focus:text-sm"
            >
              Email
            </label>
          </div>
          <div className="relative">
            <input
              type="password"
              name="password"
              id="register-password"
              value={userData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border-b-2 border-indigo-300 focus:border-indigo-500 focus:outline-none transition-colors duration-300 bg-transparent peer"
              placeholder=" "
              required
              autoComplete="new-password"
            />
            <label
              htmlFor="register-password"
              className="absolute left-0 -top-3.5 text-indigo-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-indigo-600 peer-focus:text-sm"
            >
              Password
            </label>
          </div>
          <div className="relative">
            <label
              htmlFor="register-avatar"
              className="flex items-center justify-center w-full px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg cursor-pointer hover:bg-indigo-200 transition-all duration-300 ease-in-out shadow-sm hover:shadow-md"
            >
              <span>{userData.avatar ? "Change Avatar" : "Choose Avatar"}</span>
            </label>
            <input
              type="file"
              name="avatar"
              id="register-avatar"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-lg"
            disabled={isLoading}
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
