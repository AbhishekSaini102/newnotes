// import axios from "axios";
import apiClient from "./apiHelper";

const API_URL = import.meta.env.VITE_AUTH_API_URL; // Base URL from your .env file

export const register = async (formData) => {
  try {
    const response = await apiClient.post(
      `${API_URL}/users/register`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      console.error("Register Error:", error.response.data);
      throw error.response.data;
    } else {
      console.error("Register Unexpected Error:", error);
      throw new Error("An unexpected error occurred");
    }
  }
};

export const login = async ({ email, password }) => {
  try {
    const credentials = { email, password };
    const response = await apiClient.post(
      `${API_URL}/users/login`,
      credentials
    );

    const accessToken =
      response.data.accessToken || response.data.data?.accessToken;
    const refreshToken =
      response.data.refreshToken || response.data.data?.refreshToken;

    if (accessToken && refreshToken) {
      try {
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        console.log("Tokens set in localStorage successfully");
      } catch (storageError) {
        console.error("LocalStorage Error:", storageError);
      }
    } else {
      console.error("Tokens are missing or undefined in the response");
    }

    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      console.error("Login Error:", error.response.data);
      throw error.response.data;
    } else {
      console.error("Login Unexpected Error:", error);
      throw new Error("An unexpected error occurred");
    }
  }
};

export const logout = () => {
  // Clear tokens from localStorage
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};

export const getCurrentUser = async () => {
  try {
    const response = await apiClient.get(`${API_URL}/users/current-user`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Get Current User Error:",
      error.response ? error.response.data : error.message
    );
    throw error.response
      ? error.response.data
      : new Error("An unexpected error occurred");
  }
};
