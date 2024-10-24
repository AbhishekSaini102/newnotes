import apiClient from "./apiHelper";

const API_URL = import.meta.env.VITE_AUTH_API_URL;

// Helper function to handle API errors
const handleApiError = (action, error) => {
  if (error.response && error.response.data) {
    console.error(`${action} Error:`, error.response.data);
    throw error.response.data;
  } else {
    console.error(`${action} Unexpected Error:`, error);
    throw new Error("An unexpected error occurred");
  }
};

// Create Note API call
export const createNoteApi = async (noteData, files) => {
  try {
    const formData = new FormData();

    // Append note data to FormData
    for (const key in noteData) {
      formData.append(key, noteData[key]);
    }

    // Append photos if they exist
    if (files?.photos && files.photos.length > 0) {
      files.photos.forEach((file) => formData.append("photos", file));
    }

    const response = await apiClient.post(`${API_URL}/notes/create`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });

    return response.data;
  } catch (error) {
    handleApiError("Create Note", error);
  }
};

// Get All Notes API call
export const fetchAllNotesApi = async () => {
  try {
    const response = await apiClient.get(`${API_URL}/notes/allNotes`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    handleApiError("Get All Notes", error);
  }
};

// Get Notes by Folder API call
export const getNotesByFolderIdApi = async (folderId) => {
  try {
    const response = await apiClient.get(`${API_URL}/notes/notes/folder/${folderId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError("Get Notes By Folder", error);
  }
};

// Delete Note API call
export const deleteNoteApi = async (noteId) => {
  try {
    const response = await apiClient.delete(`${API_URL}/notes/notes/delete/${noteId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    handleApiError("Delete Note", error);
  }
};

// Update Note API call
export const updateNoteApi = async (noteId, noteData, files) => {
  try {
    const formData = new FormData();

    // Append note data to FormData
    for (const key in noteData) {
      formData.append(key, noteData[key]);
    }

    // Append photos if they exist
    if (files?.photos && files.photos.length > 0) {
      files.photos.forEach((file) => formData.append("photos", file));
    }

    for (let pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    const response = await apiClient.put(`${API_URL}/notes/notes/update/${noteId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });

    console.log(response.data);
    return response.data;

  } catch (error) {
    handleApiError("Update Note", error);
  }
};
