// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import {
//   createNoteApi,
//   fetchAllNotesApi,
//   getNotesByFolderIdApi,
//   updateNoteApi,
//   deleteNoteApi,
// } from "../api/noteApi"; // Adjust the path as necessary

// // Initial state
// const initialState = {
//   notes: [],
//   loading: false,
//   error: null,
// };

// // Async actions

// // Create Note
// export const createNotes = createAsyncThunk(
//   "notes/createNote",
//   async ({ noteData, files }, { rejectWithValue }) => {
//     try {
//       const response = await createNoteApi(noteData, files);
//       return response.data; // Assuming ApiResponse has a 'data' field with the note
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

// // Fetch All Notes
// export const fetchAllNotes = createAsyncThunk(
//   "notes/fetchAllNotes",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await fetchAllNotesApi();
//       // console.log("fetch notes:", response);
//       return response.data; // Assuming ApiResponse has a 'data' field with the notes array
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

// // Get Notes by Folder
// export const getNotesByFolderId = createAsyncThunk(
//   "notes/getNotesByFolder",
//   async (folderId, { rejectWithValue }) => {
//     try {
//       const response = await getNotesByFolderIdApi(folderId);
//       return response.data; // Assuming ApiResponse has a 'data' field with the notes array
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

// // Update Note
// export const updateNotes = createAsyncThunk(
//   "notes/updateNote",
//   async ({ noteId, noteData, files }, { rejectWithValue }) => {
//     try {
//       const response = await updateNoteApi(noteId, noteData, files);
//       return response.data; // Assuming ApiResponse has a 'data' field with the updated note
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

// // Delete Note
// export const deleteNotes = createAsyncThunk(
//   "notes/deleteNote",
//   async (noteId, { rejectWithValue }) => {
//     try {
//       const response = await deleteNoteApi(noteId);
//       return response.data; // Assuming ApiResponse has a 'data' field with the deleted note's ID
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

// // Slice
// const noteSlice = createSlice({
//   name: "notes",
//   initialState,
//   reducers: {
//     resetNoteState: (state) => {
//       state.notes = [];
//       state.isLoading = false;
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     // Create Note
//     builder
//       .addCase(createNotes.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(createNotes.fulfilled, (state, action) => {
//         state.loading = false;
//         state.notes.unshift(action.payload.data); // Add the new note to the beginning
//       })
//       .addCase(createNotes.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload || "Failed to create note.";
//       });

//     // Fetch All Notes
//     builder
//       .addCase(fetchAllNotes.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchAllNotes.fulfilled, (state, action) => {
//         console.log("fetch notes:", action.payload);
//         state.loading = false;
//         state.notes = action.payload; // Replace with fetched notes
//       })
//       .addCase(fetchAllNotes.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload || "Failed to fetch notes.";
//       });

//     // Get Notes by Folder
//     builder
//       .addCase(getNotesByFolderId.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(getNotesByFolderId.fulfilled, (state, action) => {
//         state.loading = false;
//         state.notes = action.payload; // Replace with fetched notes for the folder
//       })
//       .addCase(getNotesByFolderId.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload || "Failed to fetch notes by folder.";
//       });

//     // Update Note
//     builder
//       .addCase(updateNotes.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(updateNotes.fulfilled, (state, action) => {
//         state.loading = false;
//         const updatedNote = action.payload.data;
//         const index = state.notes.findIndex(
//           (note) => note._id === updatedNote._id
//         );
//         if (index !== -1) {
//           state.notes[index] = updatedNote;
//         }
//       })
//       .addCase(updateNotes.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload || "Failed to update note.";
//       });

//     // Delete Note
//     builder
//       .addCase(deleteNotes.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(deleteNotes.fulfilled, (state, action) => {
//         state.loading = false;
//         const deletedNoteId = action.payload.data._id; // Assuming data contains the deleted note's ID
//         state.notes = state.notes.filter((note) => note._id !== deletedNoteId);
//       })
//       .addCase(deleteNotes.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload || "Failed to delete note.";
//       });
//   },
// });
// export const { resetNoteState } = noteSlice.actions;
// export default noteSlice.reducer;



import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createNoteApi,
  fetchAllNotesApi,
  getNotesByFolderIdApi,
  updateNoteApi,
  deleteNoteApi,
} from "../api/noteApi"; // Adjust the path as necessary

// Initial state
const initialState = {
  notes: [],
  loading: false,
  error: null,
};

// Helper function to extract error messages
const extractErrorMessage = (error) => {
  if (error.response && error.response.data && error.response.data.message) {
    return error.response.data.message;
  }
  return error.message || "An unknown error occurred.";
};

// Async actions

// Create Note
export const createNotes = createAsyncThunk(
  "notes/createNote",
  async ({ noteData, files }, { rejectWithValue }) => {
    try {
      const response = await createNoteApi(noteData, files);
      return response.data; // Assuming response.data is the created note
    } catch (error) {
      return rejectWithValue(extractErrorMessage(error));
    }
  }
);

// Fetch All Notes
export const fetchAllNotes = createAsyncThunk(
  "notes/fetchAllNotes",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchAllNotesApi();
      return response.data; // Assuming response.data is the notes array
    } catch (error) {
      return rejectWithValue(extractErrorMessage(error));
    }
  }
);

// Get Notes by Folder
export const getNotesByFolderId = createAsyncThunk(
  "notes/getNotesByFolder",
  async (folderId, { rejectWithValue }) => {
    try {
      const response = await getNotesByFolderIdApi(folderId);
      return response.data; // Assuming response.data is the notes array for the folder
    } catch (error) {
      return rejectWithValue(extractErrorMessage(error));
    }
  }
);

// Update Note
export const updateNotes = createAsyncThunk(
  "notes/updateNote",
  async ({ noteId, noteData, files }, { rejectWithValue }) => {
    try {
      const response = await updateNoteApi(noteId, noteData, files);
      return response.data; // Assuming response.data is the updated note
    } catch (error) {
      return rejectWithValue(extractErrorMessage(error));
    }
  }
);

// Delete Note
export const deleteNotes = createAsyncThunk(
  "notes/deleteNote",
  async (noteId, { rejectWithValue }) => {
    try {
      const response = await deleteNoteApi(noteId);
      return response.data; // Assuming response.data is the deleted note's ID or object
    } catch (error) {
      return rejectWithValue(extractErrorMessage(error));
    }
  }
);

// Slice
const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    resetNoteState: (state) => {
      state.notes = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Create Note
    builder
      .addCase(createNotes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createNotes.fulfilled, (state, action) => {
        state.loading = false;
        state.notes.unshift(action.payload); // Add the new note to the beginning
      })
      .addCase(createNotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to create note.";
      });

    // Fetch All Notes
    builder
      .addCase(fetchAllNotes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllNotes.fulfilled, (state, action) => {
        state.loading = false;
        state.notes = action.payload; // Replace with fetched notes
      })
      .addCase(fetchAllNotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch notes.";
      });

    // Get Notes by Folder
    builder
      .addCase(getNotesByFolderId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getNotesByFolderId.fulfilled, (state, action) => {
        state.loading = false;
        state.notes = action.payload; // Replace with fetched notes for the folder
      })
      .addCase(getNotesByFolderId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch notes by folder.";
      });

    // Update Note
    builder
      .addCase(updateNotes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateNotes.fulfilled, (state, action) => {
        state.loading = false;
        const updatedNote = action.payload; // Assuming response.data is the updated note
        const index = state.notes.findIndex(
          (note) => note._id === updatedNote._id
        );
        if (index !== -1) {
          state.notes[index] = updatedNote;
        }
      })
      .addCase(updateNotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to update note.";
      });

    // Delete Note
    builder
      .addCase(deleteNotes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteNotes.fulfilled, (state, action) => {
        state.loading = false;
        const deletedNoteId = action.payload._id || action.payload; // Adjust based on API response
        state.notes = state.notes.filter((note) => note._id !== deletedNoteId);
      })
      .addCase(deleteNotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to delete note.";
      });
  },
});

export const { resetNoteState } = noteSlice.actions;
export default noteSlice.reducer;
