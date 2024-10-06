// // folderApi.js
// import apiClient from "./apiHelper";

// const API_URL = import.meta.env.VITE_AUTH_API_URL;

// // Create folder API call
// export const createFolder = async (folderData) => {
//   try {
//     const response = await apiClient.post(
//       `${API_URL}/folders/create`,
//       folderData,
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//         },
//       }
//     );
//     return response.data; // Ensure that response.data contains the correct folder object
//   } catch (error) {
//     if (error.response && error.response.data) {
//       console.error("Create Folder Error:", error.response.data);
//       throw error.response.data;
//     } else {
//       console.error("Create Folder Unexpected Error:", error);
//       throw new Error("An unexpected error occurred");
//     }
//   }
// };

// // Fetch folders API call
// export const getFolders = async (parent = null) => {
//   try {
//     const response = await apiClient.get(`${API_URL}/folders/allFolders`, {
//       params: { parent },
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//       },
//     });

//     console.log(response.data) // Ensure this returns the correct data structure
//     return response.data;
//   } catch (error) {
//     if (error.response && error.response.data) {
//       console.error("Get Folders Error:", error.response.data);
//       throw error.response.data;
//     } else {
//       console.error("Get Folders Unexpected Error:", error);
//       throw new Error("An unexpected error occurred");
//     }
//   }
// };
// export const getFolderBySlug = async (slug) => {
//   try {
//     const response = await apiClient.get(`${API_URL}/folders/folder/${slug}`, {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//       },
//     });

//     return response.data;
//   } catch (error) {
//     if (error.response && error.response.data) {
//       console.error("Get Folder by Slug Error:", error.response.data);
//       throw error.response.data;
//     } else {
//       console.error("Get Folder by Slug Unexpected Error:", error);
//       throw new Error("An unexpected error occurred");
//     }
//   }
// };

// export const updateFolder = async (folderId, folderData) => {
//   try {
//     const response = await apiClient.put(
//       `${API_URL}/folders/update/${folderId}`,
//       folderData,
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//         },
//       }
//     );

//     return response.data;
//   } catch (error) {
//     if (error.response && error.response.data) {
//       console.error("Update Folder Error:", error.response.data);
//       throw error.response.data;
//     } else {
//       console.error("Update Folder Unexpected Error:", error);
//       throw new Error("An unexpected error occurred");
//     }
//   }
// };

// export const deleteFolder = async (folderId) => {
//   try {
//     const response = await apiClient.delete(
//       `${API_URL}/folders/delete/${folderId}`,
//       {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//         },
//       }
//     );

//     return response.data;
//   } catch (error) {
//     if (error.response && error.response.data) {
//       console.error("Delete Folder Error:", error.response.data);
//       throw error.response.data;
//     } else {
//       console.error("Delete Folder Unexpected Error:", error);
//       throw new Error("An unexpected error occurred");
//     }
//   }
// };

// folderApi.js
import apiClient from "./apiHelper";

const API_URL = import.meta.env.VITE_AUTH_API_URL;

// Create folder API call
export const createFolder = async (folderData) => {
  try {
    const response = await apiClient.post(
      `${API_URL}/folders/create`,
      folderData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    return response.data; // Ensure that response.data contains the correct folder object
  } catch (error) {
    if (error.response && error.response.data) {
      console.error("Create Folder Error:", error.response.data);
      throw error.response.data;
    } else {
      console.error("Create Folder Unexpected Error:", error);
      throw new Error("An unexpected error occurred");
    }
  }
};

// Fetch folders API call
export const getFolders = async (parent = null) => {
  try {
    const response = await apiClient.get(`${API_URL}/folders/allFolders`, {
      params: { parent },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });

    // console.log("API Response:", response.data); // Log the response data
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      console.error("Get Folders Error:", error.response.data);
      throw error.response.data;
    } else {
      console.error("Get Folders Unexpected Error:", error);
      throw new Error("An unexpected error occurred");
    }
  }
};

export const getFolderBySlug = async (user, slug) => {
  try {
    const response = await apiClient.get(`${API_URL}/folders/${slug}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });

    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      console.error("Get Folder by Slug Error:", error.response.data);
      throw error.response.data;
    } else {
      console.error("Get Folder by Slug Unexpected Error:", error);
      throw new Error("An unexpected error occurred");
    }
  }
};

export const updateFolder = async (folderId, folderData) => {
  try {
    const response = await apiClient.put(
      `${API_URL}/folders/update/${folderId}`,
      folderData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      console.error("Update Folder Error:", error.response.data);
      throw error.response.data;
    } else {
      console.error("Update Folder Unexpected Error:", error);
      throw new Error("An unexpected error occurred");
    }
  }
};

export const deleteFolder = async (folderId) => {
  try {
    const response = await apiClient.delete(
      `${API_URL}/folders/delete/${folderId}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      console.error("Delete Folder Error:", error.response.data);
      throw error.response.data;
    } else {
      console.error("Delete Folder Unexpected Error:", error);
      throw new Error("An unexpected error occurred");
    }
  }
};

export const getFolderById = async (folderId) => {
  try {
    const response = await apiClient.get(
      `${API_URL}/folders/folder/${folderId}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      console.error("Get Folder by ID Error:", error.response.data);
      throw error.response.data;
    } else {
      console.error("Get Folder by ID Unexpected Error:", error);
      throw new Error("An unexpected error occurred");
    }
  }
};
