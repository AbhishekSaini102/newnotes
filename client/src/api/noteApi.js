import apiClient from "./apiHelper";

const API_URL = import.meta.env.VITE_AUTH_API_URL;

//create Note API call
export const createNote = async (noteData) => {
  try {
    const response = await apiClient.post(`${API_URL}/notes/create`, noteData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      console.error("Create Note Error:", error.response.data);
      throw error.response.data;
    } else {
      console.error("Create Note Unexpected Error:", error);
      throw new Error("An unexpected error occurred");
    }
  }
};

//getAllNotes API call

export const getAllNotes = async () => {
  try {
    const response = await apiClient.get(`${API_URL}/notes/allNotes`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      console.error("Get All Notes Error:", error.response.data);
      throw error.response.data;
    } else {
      console.error("Get All Notes Unexpected Error:", error);
      throw new Error("An unexpected error occurred");
    }
  }
};
