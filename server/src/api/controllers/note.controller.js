// import mongoose from "mongoose";
// import { asyncHandler } from "../../utils/asyncHandler.js";
// import { ApiError } from "../../utils/ApiError.js";
// import ApiResponse from "../../utils/ApiResponse.js";
// import Note from "../../models/note.model.js";
// import { uploadOnCloudinary } from "../../utils/cloudinary.js";

// // const createNote = asyncHandler(async (req, res) => {
// //   let {
// //     title,
// //     content,
// //     links = [],
// //     photos = [],
// //     // location = null,
// //     tags = [], // Default to an empty array
// //     folder = null,
// //     color = "white",
// //     isArchived = false,
// //     isDeleted = false,
// //   } = req.body;

// //   // Ensure proper key name without extra spaces
// //   location = req.body.location || req.body["location "] || null;

// //   // Validate required fields
// //   if (!content) {
// //     throw new ApiError(400, "Content is required");
// //   }

// //   // Upload photos to Cloudinary if any
// //   const uploadedPhotos = [];
// //   if (req.files?.photos && req.files.photos.length > 0) {
// //     for (let photo of req.files.photos) {
// //       const uploadedPhoto = await uploadOnCloudinary(photo.path);
// //       if (!uploadedPhoto?.secure_url) {
// //         throw new ApiError(500, "Failed to upload photo");
// //       }
// //       uploadedPhotos.push(uploadedPhoto.secure_url);
// //     }
// //   }

// //   // Parse location if it's a string and ensure valid coordinates
// //   // let formattedLocation;
// //   // if (location && typeof location === "string") {
// //   //   try {
// //   //     location = JSON.parse(location.trim());
// //   //   } catch (error) {
// //   //     console.error("Error parsing location:", error);
// //   //     throw new ApiError(400, "Invalid location format");
// //   //   }
// //   // }

// //   // // Validate and format location if it's provided
// //   // if (location && location.type === "Point") {
// //   //   const { coordinates } = location;
// //   //   if (Array.isArray(coordinates) && coordinates.length === 2) {
// //   //     formattedLocation = {
// //   //       type: "Point",
// //   //       coordinates: [parseFloat(coordinates[0]), parseFloat(coordinates[1])],
// //   //     };
// //   //   } else {
// //   //     throw new ApiError(400, "Invalid coordinates format");
// //   //   }
// //   // }

// //   // Parse tags if it's a string, and handle blank or undefined tags
// //   if (typeof tags === "string" && tags.trim() === "") {
// //     tags = []; // Handle blank string by converting to an empty array
// //   } else if (typeof tags === "string") {
// //     try {
// //       tags = JSON.parse(tags);
// //     } catch (error) {
// //       console.error("Error parsing tags:", error);
// //       throw new ApiError(400, "Invalid tags format");
// //     }
// //   }

// //   // Ensure `tags` is an array of valid ObjectIds, but handle empty array gracefully
// //   // const tagsArray = Array.isArray(tags)
// //   //   ? tags
// //   //       .filter((tag) => mongoose.Types.ObjectId.isValid(tag)) // Filter valid ObjectIds
// //   //       .map((tag) => new mongoose.Types.ObjectId(tag)) // Convert to ObjectId using `new`
// //   //   : [];

// //   // Ensure `folder` is an ObjectId if provided and valid, otherwise null
// //   // const folderId =
// //   //   folder && mongoose.Types.ObjectId.isValid(folder)
// //   //     ? new mongoose.Types.ObjectId(folder) // Convert to ObjectId using `new`
// //   //     : null;

// //   // Create note using Note.create()
// //   const createdNote = await Note.create({
// //     title,
// //     content,
// //     links,
// //     photos: uploadedPhotos.length > 0 ? uploadedPhotos : photos,
// //     // location: formattedLocation || undefined,
// //     user: req.user._id,
// //     tags: tags.length > 0 ? tags : undefined, // Only set tags if not empty
// //     folder: folder || undefined, // Only set folder if not null
// //     color,
// //     isArchived: !!isArchived,
// //     isDeleted: !!isDeleted,
// //   });

// //   if (!createdNote) {
// //     throw new ApiError(500, "Something went wrong while creating the note");
// //   }

// //   return res
// //     .status(201)
// //     .json(new ApiResponse(201, "Note created successfully", createdNote));
// // });

// const createNote = asyncHandler(async (req, res) => {
//   let {
//     title,
//     content,
//     links = [],
//     photos = [],
//     tags = [], // Default to an empty array
//     folder = null,
//     color = "white",
//     isArchived = false,
//     isDeleted = false,
//   } = req.body;

//   // Validate required fields
//   if (!content) {
//     throw new ApiError(400, "Content is required");
//   }

//   // Upload photos to Cloudinary if any
//   const uploadedPhotos = [];
//   if (req.files?.photos && req.files.photos.length > 0) {
//     for (let photo of req.files.photos) {
//       const uploadedPhoto = await uploadOnCloudinary(photo.path);
//       if (!uploadedPhoto?.secure_url) {
//         throw new ApiError(500, "Failed to upload photo");
//       }
//       uploadedPhotos.push(uploadedPhoto.secure_url);
//     }
//   }

//   // Parse tags if it's a string, and handle blank or undefined tags
//   if (typeof tags === "string" && tags.trim() === "") {
//     tags = []; // Handle blank string by converting to an empty array
//   } else if (typeof tags === "string") {
//     try {
//       tags = JSON.parse(tags);
//     } catch (error) {
//       console.error("Error parsing tags:", error);
//       throw new ApiError(400, "Invalid tags format");
//     }
//   }

//   // Create note using Note.create()
//   const createdNote = await Note.create({
//     title,
//     content,
//     links,
//     photos: uploadedPhotos.length > 0 ? uploadedPhotos : photos,
//     user: req.user._id,
//     tags: tags.length > 0 ? tags : undefined, // Only set tags if not empty
//     folder: folder || undefined, // Only set folder if not null
//     color,
//     isArchived: !!isArchived,
//     isDeleted: !!isDeleted,
//   });

//   if (!createdNote) {
//     throw new ApiError(500, "Something went wrong while creating the note");
//   }

//   return res
//     .status(201)
//     .json(new ApiResponse(201, "Note created successfully", createdNote));
// });

// const getAllNotesByUser = asyncHandler(async (req, res) => {
//   const userId = req.user._id; // Ensure req.user._id is set

//   // Find all notes for the given user and exclude deleted notes
//   const notes = await Note.find({ user: userId, isDeleted: false });

//   if (!notes) {
//     return res
//       .status(404)
//       .json(new ApiResponse(404, "No notes found for the user"));
//   }

//   return res
//     .status(200)
//     .json(new ApiResponse(200, "Notes retrieved successfully", notes));
// });

// const getNotesByFolder = asyncHandler(async (req, res) => {
//   const { folderId } = req.params;

//   // Validate folderId
//   if (!mongoose.Types.ObjectId.isValid(folderId)) {
//     throw new ApiError(400, "Invalid folder ID");
//   }

//   // Find notes for the given folder and exclude deleted notes
//   const notes = await Note.find({ folder: folderId, isDeleted: false });

//   if (!notes) {
//     return res
//       .status(404)
//       .json(new ApiResponse(404, "No notes found for the folder"));
//   }

//   return res
//     .status(200)
//     .json(new ApiResponse(200, "Notes retrieved successfully", notes));
// });

// // const updateNote = asyncHandler(async (req, res) => {
// //   const { noteId } = req.params;
// //   const { title, content, links, photos, location, tags, folder, color } =
// //     req.body;

// //   // Validate noteId
// //   if (!mongoose.Types.ObjectId.isValid(noteId)) {
// //     throw new ApiError(400, "Invalid note ID");
// //   }

// //   // Validate required fields
// //   // if (!content) {
// //   //   throw new ApiError(400, "Content is required");
// //   // }

// //   if (
// //     !title ||
// //     !content ||
// //     !folder ||
// //     !color ||
// //     !tags ||
// //     !location ||
// //     !links ||
// //     !photos
// //   ) {
// //     throw new ApiError(400, "All fields are required");
// //   }

// //   // Validate and format location if it's provided
// //   let formattedLocation;
// //   if (location) {
// //     if (typeof location === "string") {
// //       try {
// //         formattedLocation = JSON.parse(location);
// //       } catch (error) {
// //         console.error("Error parsing location:", error);
// //         throw new ApiError(400, "Invalid location format");
// //       }
// //     } else if (location.type === "Point") {
// //       const { coordinates } = location;
// //       if (Array.isArray(coordinates) && coordinates.length === 2) {
// //         formattedLocation = {
// //           type: "Point",
// //           coordinates: [parseFloat(coordinates[0]), parseFloat(coordinates[1])],
// //         };
// //       } else {
// //         throw new ApiError(400, "Invalid coordinates format");
// //       }
// //     }
// //   }

// //   // Update note using Note.findByIdAndUpdate()
// //   const updatedNote = await Note.findByIdAndUpdate(
// //     noteId,
// //     {
// //       title,
// //       content,
// //       links,
// //       photos,
// //       location: formattedLocation || undefined,
// //       tags: tags && tags.length > 0 ? tags : undefined, // Only set tags if not empty
// //       folder: folder || undefined, // Only set folder if not null
// //       color,
// //     },
// //     { new: true } // Return the updated note
// //   );

// //   if (!updatedNote) {
// //     throw new ApiError(500, "Something went wrong while updating the note");
// //   }

// //   return res
// //     .status(200)
// //     .json(new ApiResponse(200, "Note updated successfully", updatedNote));
// // });

// // const updateNote = asyncHandler(async (req, res) => {
// //   const { noteId } = req.params;
// //   const updateFields = req.body; // Get all fields from the request body

// //   // Validate noteId
// //   if (!mongoose.Types.ObjectId.isValid(noteId)) {
// //     throw new ApiError(400, "Invalid note ID");
// //   }

// //   // Log the request body for debugging
// //   console.log("Request body:", JSON.stringify(req.body, null, 2));

// //   // Log the update fields for debugging
// //   console.log("Update fields:", JSON.stringify(updateFields, null, 2));

// //   // Upload photos to Cloudinary if any
// //   if (req.files?.photos && req.files.photos.length > 0) {
// //     const uploadedPhotos = [];
// //     for (let photo of req.files.photos) {
// //       const uploadedPhoto = await uploadOnCloudinary(photo.path);
// //       if (!uploadedPhoto?.secure_url) {
// //         throw new ApiError(500, "Failed to upload photo");
// //       }
// //       uploadedPhotos.push(uploadedPhoto.secure_url);
// //     }
// //     updateFields.photos = uploadedPhotos;
// //   }

// //   // Parse tags if it's a string, and handle blank or undefined tags
// //   if (updateFields.tags) {
// //     if (typeof updateFields.tags === "string") {
// //       if (updateFields.tags.trim() === "") {
// //         updateFields.tags = []; // Handle blank string by converting to an empty array
// //       } else {
// //         try {
// //           updateFields.tags = JSON.parse(updateFields.tags);
// //         } catch (error) {
// //           console.error("Error parsing tags:", error);
// //           throw new ApiError(400, "Invalid tags format");
// //         }
// //       }
// //     } else if (!Array.isArray(updateFields.tags)) {
// //       throw new ApiError(400, "Tags must be an array");
// //     }
// //   } else {
// //     updateFields.tags = []; // Ensure tags is an array if not provided
// //   }

// //   // Log the parsed tags for debugging
// //   console.log("Parsed tags:", JSON.stringify(updateFields.tags, null, 2));

// //   // Use $set to update only the provided fields
// //   const updatedNote = await Note.findByIdAndUpdate(
// //     noteId,
// //     { $set: updateFields },
// //     { new: true } // Return the updated note
// //   );

// //   if (!updatedNote) {
// //     throw new ApiError(500, "Something went wrong while updating the note");
// //   }

// //   return res
// //     .status(200)
// //     .json(new ApiResponse(200, "Note updated successfully", updatedNote));
// // });

// const updateNote = asyncHandler(async (req, res) => {
//   const { noteId } = req.params;
//   const updateFields = req.body; // Get all fields from the request body

//   // Validate noteId
//   if (!mongoose.Types.ObjectId.isValid(noteId)) {
//     throw new ApiError(400, "Invalid note ID");
//   }

//   // Log the request body for debugging
//   console.log("Request body:", JSON.stringify(req.body, null, 2));

//   // Log the update fields for debugging
//   console.log("Update fields:", JSON.stringify(updateFields, null, 2));

//   // Fetch the existing note to get the current photos
//   const existingNote = await Note.findById(noteId);
//   if (!existingNote) {
//     throw new ApiError(404, "Note not found");
//   }

//   // Upload new photos to Cloudinary if any
//   if (req.files?.photos && req.files.photos.length > 0) {
//     const uploadedPhotos = [];
//     for (let photo of req.files.photos) {
//       const uploadedPhoto = await uploadOnCloudinary(photo.path);
//       if (!uploadedPhoto?.secure_url) {
//         throw new ApiError(500, "Failed to upload photo");
//       }
//       uploadedPhotos.push(uploadedPhoto.secure_url);
//     }

//     // Merge new photos with existing photos
//     updateFields.photos = [...(existingNote.photos || []), ...uploadedPhotos];
//   }

//   // Parse tags if it's a string, and handle blank or undefined tags
//   if (updateFields.tags) {
//     if (typeof updateFields.tags === "string") {
//       if (updateFields.tags.trim() === "") {
//         updateFields.tags = []; // Handle blank string by converting to an empty array
//       } else {
//         try {
//           updateFields.tags = JSON.parse(updateFields.tags);
//         } catch (error) {
//           console.error("Error parsing tags:", error);
//           throw new ApiError(400, "Invalid tags format");
//         }
//       }
//     } else if (!Array.isArray(updateFields.tags)) {
//       throw new ApiError(400, "Tags must be an array");
//     }
//   } else {
//     updateFields.tags = []; // Ensure tags is an array if not provided
//   }

//   // Log the parsed tags for debugging
//   console.log("Parsed tags:", JSON.stringify(updateFields.tags, null, 2));

//   // Use $set to update only the provided fields
//   const updatedNote = await Note.findByIdAndUpdate(
//     noteId,
//     { $set: updateFields },
//     { new: true } // Return the updated note
//   );

//   if (!updatedNote) {
//     throw new ApiError(500, "Something went wrong while updating the note");
//   }

//   return res
//     .status(200)
//     .json(new ApiResponse(200, "Note updated successfully", updatedNote));
// });

// const deleteNote = asyncHandler(async (req, res) => {
//   const { noteId } = req.params;

//   // Validate noteId
//   if (!mongoose.Types.ObjectId.isValid(noteId)) {
//     throw new ApiError(400, "Invalid note ID");
//   }

//   // Update note using Note.findByIdAndUpdate()
//   const deletedNote = await Note.findByIdAndUpdate(
//     noteId,
//     { isDeleted: true },
//     { new: true } // Return the updated note
//   );

//   if (!deletedNote) {
//     throw new ApiError(500, "Something went wrong while deleting the note");
//   }

//   return res
//     .status(200)
//     .json(new ApiResponse(200, "Note deleted successfully", deletedNote));
// });

// export {
//   createNote,
//   getAllNotesByUser,
//   getNotesByFolder,
//   updateNote,
//   deleteNote,
// };

// import mongoose from "mongoose";
// import { asyncHandler } from "../../utils/asyncHandler.js";
// import { ApiError } from "../../utils/ApiError.js";
// import ApiResponse from "../../utils/ApiResponse.js";
// import Note from "../../models/note.model.js";
// import { uploadOnCloudinary } from "../../utils/cloudinary.js";

// const createNote = asyncHandler(async (req, res) => {
//   let {
//     title,
//     content,
//     links = [],
//     photos = [],
//     tags = [], // Default to an empty array
//     folder = null,
//     color = "white",
//     isArchived = false,
//     isDeleted = false,
//   } = req.body;

//   // Upload photos to Cloudinary if any
//   const uploadedPhotos = [];
//   if (req.files?.photos && req.files.photos.length > 0) {
//     for (let photo of req.files.photos) {
//       const uploadedPhoto = await uploadOnCloudinary(photo.path);
//       if (!uploadedPhoto?.secure_url) {
//         throw new ApiError(500, "Failed to upload photo");
//       }
//       uploadedPhotos.push(uploadedPhoto.secure_url);
//     }
//   }

//   // Parse tags if it's a string, and handle blank or undefined tags
//   if (typeof tags === "string" && tags.trim() === "") {
//     tags = []; // Handle blank string by converting to an empty array
//   } else if (typeof tags === "string") {
//     try {
//       tags = JSON.parse(tags);
//     } catch (error) {
//       console.error("Error parsing tags:", error);
//       throw new ApiError(400, "Invalid tags format");
//     }
//   }

//   // Create note using Note.create()
//   const createdNote = await Note.create({
//     title,
//     content,
//     links,
//     photos: uploadedPhotos.length > 0 ? uploadedPhotos : photos,
//     user: req.user._id,
//     tags: tags.length > 0 ? tags : undefined, // Only set tags if not empty
//     folder: folder || undefined, // Only set folder if not null
//     color,
//     isArchived: !!isArchived,
//     isDeleted: !!isDeleted,
//   });

//   if (!createdNote) {
//     throw new ApiError(500, "Something went wrong while creating the note");
//   }

//   return res
//     .status(201)
//     .json(new ApiResponse(201, "Note created successfully", createdNote));
// });

// const getAllNotesByUser = asyncHandler(async (req, res) => {
//   const userId = req.user._id; // Ensure req.user._id is set

//   // Find all notes for the given user and exclude deleted notes
//   const notes = await Note.find({ user: userId, isDeleted: false });

//   if (!notes) {
//     return res
//       .status(404)
//       .json(new ApiResponse(404, "No notes found for the user"));
//   }

//   return res
//     .status(200)
//     .json(new ApiResponse(200, "Notes retrieved successfully", notes));
// });

// const getNotesByFolder = asyncHandler(async (req, res) => {
//   const { folderId } = req.params;

//   // Validate folderId
//   if (!mongoose.Types.ObjectId.isValid(folderId)) {
//     throw new ApiError(400, "Invalid folder ID");
//   }

//   // Find notes for the given folder and exclude deleted notes
//   const notes = await Note.find({ folder: folderId, isDeleted: false });

//   if (!notes) {
//     return res
//       .status(404)
//       .json(new ApiResponse(404, "No notes found for the folder"));
//   }

//   return res
//     .status(200)
//     .json(new ApiResponse(200, "Notes retrieved successfully", notes));
// });

// const updateNote = asyncHandler(async (req, res) => {
//   const { noteId } = req.params;
//   const updateFields = req.body; // Get all fields from the request body

//   // Validate noteId
//   if (!mongoose.Types.ObjectId.isValid(noteId)) {
//     throw new ApiError(400, "Invalid note ID");
//   }

//   // Log the request body for debugging
//   console.log("Request body:", JSON.stringify(req.body, null, 2));

//   // Log the update fields for debugging
//   console.log("Update fields:", JSON.stringify(updateFields, null, 2));

//   // Fetch the existing note to get the current photos
//   const existingNote = await Note.findById(noteId);
//   if (!existingNote) {
//     throw new ApiError(404, "Note not found");
//   }

//   // Upload new photos to Cloudinary if any
//   if (req.files?.photos && req.files.photos.length > 0) {
//     const uploadedPhotos = [];
//     for (let photo of req.files.photos) {
//       const uploadedPhoto = await uploadOnCloudinary(photo.path);
//       if (!uploadedPhoto?.secure_url) {
//         throw new ApiError(500, "Failed to upload photo");
//       }
//       uploadedPhotos.push(uploadedPhoto.secure_url);
//     }

//     // Merge new photos with existing photos
//     updateFields.photos = [...(existingNote.photos || []), ...uploadedPhotos];
//   }

//   // Parse tags if it's a string, and handle blank or undefined tags
//   if (updateFields.tags) {
//     if (typeof updateFields.tags === "string") {
//       if (updateFields.tags.trim() === "") {
//         updateFields.tags = []; // Handle blank string by converting to an empty array
//       } else {
//         try {
//           updateFields.tags = JSON.parse(updateFields.tags);
//         } catch (error) {
//           console.error("Error parsing tags:", error);
//           throw new ApiError(400, "Invalid tags format");
//         }
//       }
//     } else if (!Array.isArray(updateFields.tags)) {
//       throw new ApiError(400, "Tags must be an array");
//     }
//   } else {
//     updateFields.tags = []; // Ensure tags is an array if not provided
//   }

//   // Log the parsed tags for debugging
//   console.log("Parsed tags:", JSON.stringify(updateFields.tags, null, 2));

//   // Use $set to update only the provided fields
//   const updatedNote = await Note.findByIdAndUpdate(
//     noteId,
//     { $set: updateFields },
//     { new: true } // Return the updated note
//   );

//   if (!updatedNote) {
//     throw new ApiError(500, "Something went wrong while updating the note");
//   }

//   return res
//     .status(200)
//     .json(new ApiResponse(200, "Note updated successfully", updatedNote));
// });

// const deleteNote = asyncHandler(async (req, res) => {
//   const { noteId } = req.params;

//   // Validate noteId
//   if (!mongoose.Types.ObjectId.isValid(noteId)) {
//     throw new ApiError(400, "Invalid note ID");
//   }

//   // Update note using Note.findByIdAndUpdate()
//   const deletedNote = await Note.findByIdAndUpdate(
//     noteId,
//     { isDeleted: true },
//     { new: true } // Return the updated note
//   );

//   if (!deletedNote) {
//     throw new ApiError(500, "Something went wrong while deleting the note");
//   }

//   return res
//     .status(200)
//     .json(new ApiResponse(200, "Note deleted successfully", deletedNote));
// });

// export {
//   createNote,
//   getAllNotesByUser,
//   getNotesByFolder,
//   updateNote,
//   deleteNote,
// };

//v3

import mongoose from "mongoose";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { ApiError } from "../../utils/ApiError.js";
import ApiResponse from "../../utils/ApiResponse.js";
import Note from "../../models/note.model.js";
import { uploadOnCloudinary } from "../../utils/cloudinary.js";

const createNote = asyncHandler(async (req, res) => {
  let {
    title = "",
    content = "",
    links = [],
    photos = [],
    tags = [], // Default to an empty array
    folder = null,
    color = "white",
    isArchived = false,
    isDeleted = false,
  } = req.body;

  // Upload photos to Cloudinary if any
  const uploadedPhotos = [];
  if (req.files?.photos && req.files.photos.length > 0) {
    for (let photo of req.files.photos) {
      const uploadedPhoto = await uploadOnCloudinary(photo.path);
      if (!uploadedPhoto?.secure_url) {
        throw new ApiError(500, "Failed to upload photo");
      }
      uploadedPhotos.push(uploadedPhoto.secure_url);
    }
  }

  // Parse tags if it's a string, and handle blank or undefined tags
  if (typeof tags === "string" && tags.trim() === "") {
    tags = []; // Handle blank string by converting to an empty array
  } else if (typeof tags === "string") {
    try {
      tags = JSON.parse(tags);
    } catch (error) {
      console.error("Error parsing tags:", error);
      throw new ApiError(400, "Invalid tags format");
    }
  }

  // Create note using Note.create()
  const createdNote = await Note.create({
    title,
    content,
    links,
    photos: uploadedPhotos.length > 0 ? uploadedPhotos : photos,
    user: req.user._id,
    tags: tags.length > 0 ? tags : undefined, // Only set tags if not empty
    folder: folder || undefined, // Only set folder if not null
    color,
    isArchived: !!isArchived,
    isDeleted: !!isDeleted,
  });

  if (!createdNote) {
    throw new ApiError(500, "Something went wrong while creating the note");
  }

  return res
    .status(201)
    .json(new ApiResponse(201, "Note created successfully", createdNote));
});

const getAllNotesByUser = asyncHandler(async (req, res) => {
  const userId = req.user._id; // Ensure req.user._id is set

  // Find all notes for the given user and exclude deleted notes
  const notes = await Note.find({ user: userId, isDeleted: false });

  if (!notes) {
    return res
      .status(404)
      .json(new ApiResponse(404, "No notes found for the user"));
  }

  return res
    .status(200)
    .json(new ApiResponse(200, "Notes retrieved successfully", notes));
});

const getNotesByFolder = asyncHandler(async (req, res) => {
  const { folderId } = req.params;

  // Validate folderId
  if (!mongoose.Types.ObjectId.isValid(folderId)) {
    throw new ApiError(400, "Invalid folder ID");
  }

  // Find notes for the given folder and exclude deleted notes
  const notes = await Note.find({ folder: folderId, isDeleted: false });

  if (!notes) {
    return res
      .status(404)
      .json(new ApiResponse(404, "No notes found for the folder"));
  }

  return res
    .status(200)
    .json(new ApiResponse(200, "Notes retrieved successfully", notes));
});

const updateNote = asyncHandler(async (req, res) => {
  const { noteId } = req.params;
  const updateFields = req.body; // Get all fields from the request body

  // Validate noteId
  if (!mongoose.Types.ObjectId.isValid(noteId)) {
    throw new ApiError(400, "Invalid note ID");
  }

  // Fetch the existing note to get the current photos
  const existingNote = await Note.findById(noteId);
  if (!existingNote) {
    throw new ApiError(404, "Note not found");
  }

  // Upload new photos to Cloudinary if any
  if (req.files?.photos && req.files.photos.length > 0) {
    const uploadedPhotos = [];
    for (let photo of req.files.photos) {
      const uploadedPhoto = await uploadOnCloudinary(photo.path);
      if (!uploadedPhoto?.secure_url) {
        throw new ApiError(500, "Failed to upload photo");
      }
      uploadedPhotos.push(uploadedPhoto.secure_url);
    }

    // Merge new photos with existing photos
    updateFields.photos = [...(existingNote.photos || []), ...uploadedPhotos];
  }

  // Parse tags if it's a string, and handle blank or undefined tags
  if (updateFields.tags) {
    if (typeof updateFields.tags === "string") {
      if (updateFields.tags.trim() === "") {
        updateFields.tags = []; // Handle blank string by converting to an empty array
      } else {
        try {
          updateFields.tags = JSON.parse(updateFields.tags);
        } catch (error) {
          console.error("Error parsing tags:", error);
          throw new ApiError(400, "Invalid tags format");
        }
      }
    } else if (!Array.isArray(updateFields.tags)) {
      throw new ApiError(400, "Tags must be an array");
    }
  } else {
    updateFields.tags = []; // Ensure tags is an array if not provided
  }

  // Use $set to update only the provided fields
  const updatedNote = await Note.findByIdAndUpdate(
    noteId,
    { $set: updateFields },
    { new: true } // Return the updated note
  );

  if (!updatedNote) {
    throw new ApiError(500, "Something went wrong while updating the note");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, "Note updated successfully", updatedNote));
});

const deleteNote = asyncHandler(async (req, res) => {
  const { noteId } = req.params;

  // Validate noteId
  if (!mongoose.Types.ObjectId.isValid(noteId)) {
    throw new ApiError(400, "Invalid note ID");
  }

  // Update note using Note.findByIdAndUpdate()
  const deletedNote = await Note.findByIdAndUpdate(
    noteId,
    { isDeleted: true },
    { new: true } // Return the updated note
  );

  if (!deletedNote) {
    throw new ApiError(500, "Something went wrong while deleting the note");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, "Note deleted successfully", deletedNote));
});

export {
  createNote,
  getAllNotesByUser,
  getNotesByFolder,
  updateNote,
  deleteNote,
};
