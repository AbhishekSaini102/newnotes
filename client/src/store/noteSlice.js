import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createNote as addNote,
  getNotes as fetchNotes,
} from "../api/noteApi.js";

//Thunks for async actions

export const createNotes = createAsyncThunk(
  "notes/create",
  async (notaData, { rejectWithValue }) => {
    try {
      const response = await addNote(notaData);
      return response;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const getNotes = createAsyncThunk(
  "notes/allNotes",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchNotes();
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

const initialState = {
  notes: [],
  isLoading: false,
  error: null,
  // showNotePopup:false,
  // activeNote:null
};

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    resetNoteState: (state) => {
      state.notes = [];
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Create note
    builder
      .addCase(createNotes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createNotes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.notes.push(action.payload);
      })
      .addCase(createNotes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    // Get all notes
    builder
      .addCase(getNotes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNotes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.notes = action.payload;
      })
      .addCase(getNotes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { resetNoteState } = noteSlice.actions;
export default noteSlice.reducer;
