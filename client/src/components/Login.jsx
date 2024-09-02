/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../store/authSlice.js";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error, isAuthenticated } = useSelector(
    (state) => state.auth
  );
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin(credentials));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white mb-10">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl">
        <div className="flex justify-center mb-8">
          <img src="/api/placeholder/100/100" alt="Logo" className="h-16" />
        </div>
        <h2 className="text-3xl font-bold text-center mb-8 text-indigo-800 tracking-tight">
          Login
        </h2>
        {error && (
          <div className="text-red-500 mb-4 text-center font-medium">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="email"
              name="email"
              id="login-email"
              value={credentials.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border-b-2 border-indigo-300 focus:border-indigo-500 focus:outline-none transition-colors duration-300 bg-transparent peer"
              placeholder=" "
              required
              autoComplete="email"
            />
            <label
              htmlFor="login-email"
              className="absolute left-0 -top-3.5 text-indigo-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-indigo-600 peer-focus:text-sm"
            >
              Email address
            </label>
          </div>
          <div className="relative">
            <input
              type="password"
              name="password"
              id="login-password"
              value={credentials.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border-b-2 border-indigo-300 focus:border-indigo-500 focus:outline-none transition-colors duration-300 bg-transparent peer"
              placeholder=" "
              required
              autoComplete="current-password"
            />
            <label
              htmlFor="login-password"
              className="absolute left-0 -top-3.5 text-indigo-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-indigo-600 peer-focus:text-sm"
            >
              Password
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <a
            href="/register"
            className="text-indigo-600 hover:text-indigo-500 transition-colors duration-300"
          >
            Don't have an account? Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
