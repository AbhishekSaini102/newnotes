// import axios from "axios";
// import store from "../store/store.js";
// import { sessionExpired, resetAuthState } from "../store/authSlice";

// const apiClient = axios.create({
//   baseURL: import.meta.env.VITE_AUTH_API_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// let isRefreshing = false;
// let failedQueue = [];

// const processQueue = (error, token = null) => {
//   failedQueue.forEach((prom) => {
//     if (error) {
//       prom.reject(error);
//     } else {
//       prom.resolve(token);
//     }
//   });
//   failedQueue = [];
// };

// apiClient.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (
//       error.response &&
//       error.response.status === 401 &&
//       !originalRequest._retry
//     ) {
//       originalRequest._retry = true;

//       if (isRefreshing) {
//         return new Promise((resolve, reject) => {
//           failedQueue.push({ resolve, reject });
//         })
//           .then((token) => {
//             originalRequest.headers["Authorization"] = `Bearer ${token}`;
//             return apiClient(originalRequest);
//           })
//           .catch((err) => {
//             console.error("Error in failed queue:", err);
//             return Promise.reject(err);
//           });
//       }

//       isRefreshing = true;

//       try {
//         const refreshToken = localStorage.getItem("refreshToken");
//         if (!refreshToken) {
//           console.error("No refresh token available.");
//           throw new Error("No refresh token available");
//         }

//         const response = await apiClient.post("/users/refresh-token", {
//           refreshToken,
//         });

//         const { accessToken, refreshToken: newRefreshToken } =
//           response.data.data;

//         if (accessToken) {
//           localStorage.setItem("accessToken", accessToken);
//           apiClient.defaults.headers["Authorization"] = `Bearer ${accessToken}`;
//           originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
//           console.log("Access token refreshed and updated.");
//         } else {
//           console.error("No access token received.");
//         }

//         if (newRefreshToken) {
//           localStorage.setItem("refreshToken", newRefreshToken);
//           console.log("Refresh token updated.");
//         } else {
//           console.error("Received undefined refresh token, not storing it.");
//         }

//         processQueue(null, accessToken);

//         return apiClient(originalRequest);
//       } catch (refreshError) {
//         console.error("Token refresh failed:", refreshError);
//         processQueue(refreshError, null);
//         store.dispatch(resetAuthState());
//         store.dispatch(sessionExpired());
//         return Promise.reject(refreshError);
//       } finally {
//         isRefreshing = false;
//       }
//     }

//     // Handle session expired case directly if no refresh token is available
//     if (
//       error.response &&
//       error.response.status === 401 &&
//       !localStorage.getItem("refreshToken")
//     ) {
//       console.warn("Session expired or refresh token missing.");
//       store.dispatch(resetAuthState());
//       store.dispatch(sessionExpired());
//     }

//     return Promise.reject(error);
//   }
// );

// export default apiClient;




// import axios from "axios";
// import store from "../store/store.js";
// import { sessionExpired, resetAuthState } from "../store/authSlice";

// const apiClient = axios.create({
//   baseURL: import.meta.env.VITE_AUTH_API_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// let isRefreshing = false;
// let failedQueue = [];

// const processQueue = (error, token = null) => {
//   failedQueue.forEach((prom) => {
//     if (error) {
//       prom.reject(error);
//     } else {
//       prom.resolve(token);
//     }
//   });
//   failedQueue = [];
// };

// apiClient.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (
//       error.response &&
//       error.response.status === 401 &&
//       !originalRequest._retry
//     ) {
//       originalRequest._retry = true;

//       if (isRefreshing) {
//         return new Promise((resolve, reject) => {
//           failedQueue.push({ resolve, reject });
//         })
//           .then((token) => {
//             originalRequest.headers["Authorization"] = `Bearer ${token}`;
//             return apiClient(originalRequest);
//           })
//           .catch((err) => {
//             console.error("Error in failed queue:", err);
//             return Promise.reject(err);
//           });
//       }

//       isRefreshing = true;

//       try {
//         const refreshToken = localStorage.getItem("refreshToken");
//         if (!refreshToken) {
//           console.error("No refresh token available.");
//           throw new Error("No refresh token available");
//         }

//         const response = await apiClient.post("/users/refresh-token", {
//           refreshToken,
//         });

//         const { accessToken, refreshToken: newRefreshToken } =
//           response.data.data;

//         if (accessToken) {
//           localStorage.setItem("accessToken", accessToken);
//           apiClient.defaults.headers["Authorization"] = `Bearer ${accessToken}`;
//           originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
//           console.log("Access token refreshed and updated.");
//         } else {
//           console.error("No access token received.");
//           throw new Error("No access token received");
//         }

//         if (newRefreshToken) {
//           localStorage.setItem("refreshToken", newRefreshToken);
//           console.log("Refresh token updated.");
//         } else {
//           console.error("Received undefined refresh token, not storing it.");
//         }

//         processQueue(null, accessToken);

//         return apiClient(originalRequest);
//       } catch (refreshError) {
//         console.error("Token refresh failed:", refreshError);
//         processQueue(refreshError, null);
//         store.dispatch(resetAuthState());
//         store.dispatch(sessionExpired());
//         return Promise.reject(refreshError);
//       } finally {
//         isRefreshing = false;
//       }
//     }

//     // Handle session expired case directly if no refresh token is available
//     if (
//       error.response &&
//       error.response.status === 401 &&
//       !localStorage.getItem("refreshToken")
//     ) {
//       console.warn("Session expired or refresh token missing.");
//       store.dispatch(resetAuthState());
//       store.dispatch(sessionExpired());
//     }

//     return Promise.reject(error);
//   }
// );

// export default apiClient;

import axios from "axios";
import store from "../store/store.js";
import { sessionExpired, resetAuthState } from "../store/authSlice";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_AUTH_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

// Function to validate the token's expiration
const isTokenExpired = (token) => {
  if (!token) return true;

  const decodedToken = JSON.parse(atob(token.split(".")[1]));
  const exp = decodedToken.exp;
  return Date.now() >= exp * 1000;
};

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers["Authorization"] = `Bearer ${token}`;
            return apiClient(originalRequest);
          })
          .catch((err) => {
            console.error("Error in failed queue:", err);
            return Promise.reject(err);
          });
      }

      isRefreshing = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken");
        if (!refreshToken || isTokenExpired(refreshToken)) {
          console.error("Refresh token is expired or not available.");
          throw new Error("Refresh token is expired or not available");
        }

        const response = await apiClient.post("/users/refresh-token", {
          refreshToken,
        });

        const { accessToken, refreshToken: newRefreshToken } =
          response.data.data;

        if (accessToken) {
          localStorage.setItem("accessToken", accessToken);
          apiClient.defaults.headers["Authorization"] = `Bearer ${accessToken}`;
          originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
          console.log("Access token refreshed and updated.");
        } else {
          console.error("No access token received.");
          throw new Error("No access token received");
        }

        if (newRefreshToken) {
          localStorage.setItem("refreshToken", newRefreshToken);
          console.log("Refresh token updated.");
        } else {
          console.error("Received undefined refresh token, not storing it.");
        }

        processQueue(null, accessToken);

        return apiClient(originalRequest);
      } catch (refreshError) {
        console.error("Token refresh failed:", refreshError);
        processQueue(refreshError, null);
        store.dispatch(resetAuthState());
        store.dispatch(sessionExpired());
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    // Handle session expired case directly if no valid refresh token is available
    if (
      error.response &&
      error.response.status === 401 &&
      (!localStorage.getItem("refreshToken") ||
        isTokenExpired(localStorage.getItem("refreshToken")))
    ) {
      console.warn("Session expired or refresh token missing.");
      store.dispatch(resetAuthState());
      store.dispatch(sessionExpired());
    }

    return Promise.reject(error);
  }
);

export default apiClient;
