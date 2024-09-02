// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { login, register, logout, getCurrentUser } from "../api/authApi.js";
// import apiClient from "../api/apiHelper.js";

// // Thunks for async actions
// export const userLogin = createAsyncThunk(
//   "users/login",
//   async (credentials, { rejectWithValue }) => {
//     try {
//       const response = await login(credentials);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(
//         error.response ? error.response.data : error.message
//       );
//     }
//   }
// );

// export const userRegister = createAsyncThunk(
//   "users/register",
//   async (userData, { rejectWithValue }) => {
//     try {
//       const response = await register(userData);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(
//         error.response ? error.response.data : error.message
//       );
//     }
//   }
// );

// export const userLogout = createAsyncThunk("users/logout", async () => {
//   logout();
// });

// export const fetchCurrentUser = createAsyncThunk(
//   "users/fetchCurrentUser",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await getCurrentUser();
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(
//         error.response ? error.response.data : error.message
//       );
//     }
//   }
// );

// export const fetchProtectedResource = createAsyncThunk(
//   "resource/fetchProtectedResource",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await apiClient.get("/protected-resource");
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(
//         error.response ? error.response.data : error.message
//       );
//     }
//   }
// );

// const initialState = {
//   user: null,
//   accessToken: localStorage.getItem("accessToken") || null,
//   refreshToken: localStorage.getItem("refreshToken") || null,
//   isAuthenticated: !!localStorage.getItem("accessToken"),
//   isLoading: false,
//   error: null,
//   showSessionExpiredPopup: false, 
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     resetAuthState: (state) => {
//       state.user = null;
//       state.accessToken = null;
//       state.refreshToken = null;
//       state.isAuthenticated = false;
//       state.error = null;
//       state.showSessionExpiredPopup = false; // Reset popup state
//       localStorage.removeItem("accessToken");
//       localStorage.removeItem("refreshToken");
//     },
//     sessionExpired: (state) => {
//       // state.isAuthenticated = false;
//       state.showSessionExpiredPopup = true;
//     },
//   },
//   extraReducers: (builder) => {
//     // Login handling
//     builder.addCase(userLogin.pending, (state) => {
//       state.isLoading = true;
//       state.error = null;
//     });
//     builder.addCase(userLogin.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.isAuthenticated = true;
//       state.user = action.payload.user;
//       state.accessToken = action.payload.accessToken;
//       state.refreshToken = action.payload.refreshToken;
//       localStorage.setItem("accessToken", action.payload.accessToken);
//       localStorage.setItem("refreshToken", action.payload.refreshToken);
//     });
//     builder.addCase(userLogin.rejected, (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     });

//     // Register handling
//     builder.addCase(userRegister.pending, (state) => {
//       state.isLoading = true;
//       state.error = null;
//     });
//     builder.addCase(userRegister.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.user = action.payload.user;
//       state.isAuthenticated = false; // No tokens, so not authenticated
//     });
//     builder.addCase(userRegister.rejected, (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     });

//     // Logout handling
//     builder.addCase(userLogout.fulfilled, (state) => {
//       state.user = null;
//       state.accessToken = null;
//       state.refreshToken = null;
//       state.isAuthenticated = false;
//       localStorage.removeItem("accessToken");
//       localStorage.removeItem("refreshToken");
//     });

//     // Fetch Current User
//     builder.addCase(fetchCurrentUser.pending, (state) => {
//       state.isLoading = true;
//       state.error = null;
//     });
//     builder.addCase(fetchCurrentUser.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.user = action.payload.user;
//     });
//     builder.addCase(fetchCurrentUser.rejected, (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     });

//     // Fetch Protected Resource
//     builder.addCase(fetchProtectedResource.pending, (state) => {
//       state.isLoading = true;
//       state.error = null;
//     });
//     builder.addCase(fetchProtectedResource.fulfilled, (state, action) => {
//       state.isLoading = false;
//       // Handle protected resource data if needed
//     });
//     builder.addCase(fetchProtectedResource.rejected, (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     });
//   },
// });

// export const { resetAuthState, sessionExpired } = authSlice.actions;
// export default authSlice.reducer;



import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login, register, logout, getCurrentUser } from "../api/authApi.js";
import apiClient from "../api/apiHelper.js";

// Thunks for async actions
export const userLogin = createAsyncThunk(
  "users/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await login(credentials);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const userRegister = createAsyncThunk(
  "users/register",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await register(userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const userLogout = createAsyncThunk("users/logout", async () => {
  logout();
});

export const fetchCurrentUser = createAsyncThunk(
  "users/fetchCurrentUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getCurrentUser();
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const fetchProtectedResource = createAsyncThunk(
  "resource/fetchProtectedResource",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiClient.get("/protected-resource");
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

const initialState = {
  user: null,
  accessToken: localStorage.getItem("accessToken") || null,
  refreshToken: localStorage.getItem("refreshToken") || null,
  isAuthenticated: !!localStorage.getItem("accessToken"),
  isLoading: false,
  error: null,
  showSessionExpiredPopup: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuthState: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
      state.error = null;
      state.showSessionExpiredPopup = false; // Reset popup state
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    },
    sessionExpired: (state) => {
      state.showSessionExpiredPopup = true;
    },
  },
  extraReducers: (builder) => {
    // Login handling
    builder.addCase(userLogin.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      localStorage.setItem("accessToken", action.payload.accessToken);
      localStorage.setItem("refreshToken", action.payload.refreshToken);
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // Register handling
    builder.addCase(userRegister.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(userRegister.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.isAuthenticated = false; // No tokens, so not authenticated
    });
    builder.addCase(userRegister.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // Logout handling
    builder.addCase(userLogout.fulfilled, (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    });

    // Fetch Current User
    builder.addCase(fetchCurrentUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchCurrentUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
    });
    builder.addCase(fetchCurrentUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // Fetch Protected Resource
    builder.addCase(fetchProtectedResource.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchProtectedResource.fulfilled, (state, action) => {
      state.isLoading = false;
      // Handle protected resource data if needed
    });
    builder.addCase(fetchProtectedResource.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { resetAuthState, sessionExpired } = authSlice.actions;
export default authSlice.reducer;
