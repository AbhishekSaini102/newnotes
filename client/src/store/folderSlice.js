// folderSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createFolder as addFolder,
  updateFolder,
  deleteFolder,
  getFolders as fetchFolders,
  getFolderBySlug as fetchFolderBySlug,
  getFolderById as fetchFolderById,
} from "../api/folderApi.js";

// Thunks for async actions

export const fetchAllFolders = createAsyncThunk(
  "folders/allFolders",
  async (parent = null, { rejectWithValue }) => {
    try {
      const response = await fetchFolders(parent);
      // console.log("fetch folder:", response);
      return response.data; // Ensure that this is correct from the API response
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const createFolder = createAsyncThunk(
  "folders/create",
  async (folderData, { rejectWithValue }) => {
    try {
      const response = await addFolder(folderData);
      return response.data; // Ensure this returns the folder object
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const editFolder = createAsyncThunk(
  "folders/edit",
  async ({ id, folderData }, { rejectWithValue }) => {
    try {
      const response = await updateFolder(id, folderData);
      return response.data; // Ensure this returns the updated folder object
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const removeFolder = createAsyncThunk(
  "folders/remove",
  async (id, { rejectWithValue }) => {
    try {
      await deleteFolder(id);
      return id; // Return the deleted folder's ID to remove it from the state
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const getFolderBySlug = createAsyncThunk(
  "folders/fetchBySlug",
  async ({ user, slug }, { rejectWithValue }) => {
    try {
      const response = await fetchFolderBySlug(user, slug); // Adjust based on API requirements
      return response.data; // Ensure this returns the folder object
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const getFolderById = createAsyncThunk(
  "folders/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetchFolderById(id); // Adjust based on API requirements
      // console.log(response);
      return response.data; // Ensure this returns the folder object
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);
const initialState = {
  folders: [],
  isLoading: false,
  error: null,
};

const folderSlice = createSlice({
  name: "folders",
  initialState,
  reducers: {
    resetFolderState: (state) => {
      state.folders = [];
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Fetch folders
    builder.addCase(fetchAllFolders.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchAllFolders.fulfilled, (state, action) => {
      state.isLoading = false;
      // console.log("Fetched folders:", action.payload);  // Log the payload
      state.folders = action.payload;
    });
    builder.addCase(fetchAllFolders.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // Create folder
    builder.addCase(createFolder.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(createFolder.fulfilled, (state, action) => {
      state.isLoading = false;
      if (action.payload) {
        state.folders.push(action.payload); // Only push valid payloads
      }
    });
    builder.addCase(createFolder.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // Edit folder
    builder.addCase(editFolder.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(editFolder.fulfilled, (state, action) => {
      state.isLoading = false;
      const index = state.folders.findIndex(
        (folder) => folder._id === action.payload._id
      );
      if (index !== -1) {
        state.folders[index] = action.payload; // Update the folder
      }
    });
    builder.addCase(editFolder.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // Remove folder
    builder.addCase(removeFolder.fulfilled, (state, action) => {
      state.folders = state.folders.filter(
        (folder) => folder._id !== action.payload
      );
    });
    builder.addCase(removeFolder.rejected, (state, action) => {
      state.error = action.payload;
    });

    builder.addCase(getFolderBySlug.pending, (state) => {
      state.isLoading = true;
      state.error = null;
      state.currentFolder = null; // Optionally reset currentFolder
    });
    builder.addCase(getFolderBySlug.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currentFolder = action.payload;
    });
    builder.addCase(getFolderBySlug.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.currentFolder = null;
    });

    //fetch folder by Id
    builder.addCase(getFolderById.pending, (state) => {
      state.isLoading = true;
      state.error = null;
      // state.currentFolder = null; 
    });
    builder.addCase(getFolderById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currentFolder = action.payload;
    });
    builder.addCase(getFolderById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.currentFolder = null;
    });
  },
});

export const { resetFolderState } = folderSlice.actions;
export default folderSlice.reducer;
