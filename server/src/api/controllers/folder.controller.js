import ApiResponse from "../../utils/ApiResponse.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { ApiError } from "../../utils/ApiError.js";
import Folder from "../../models/folder.model.js";
import mongoose from "mongoose";

// const createFolder = asyncHandler(async (req, res) => {
//   const { name, parent = null } = req.body;

//   // Validate required fields
//   if (!name) {
//     throw new ApiError(400, "Folder name is required");
//   }

//   // Check for duplicate folder
//   const existingFolder = await Folder.findOne({ name, user: req.user._id });
//   if (existingFolder) {
//     throw new ApiError(400, "Folder with this name already exists");
//   }

//   // Convert parent to ObjectId if provided
//   let parentId = null;
//   if (parent) {
//     if (!mongoose.Types.ObjectId.isValid(parent)) {
//       throw new ApiError(400, "Invalid parent folder ID");
//     }
//     parentId = new mongoose.Types.ObjectId(parent);
//   }

//   // Create folder object
//   const folder = new Folder({
//     name,
//     // parent: parent ? mongoose.Types.ObjectId(parent) : null,
//     parent: parentId ? mongoose.Types.ObjectId(parentId) : null,
//     user: req.user._id,
//     ancestors: parent ? [mongoose.Types.ObjectId(parent)] : [],
//   });

//   // Save folder to database
//   const createdFolder = await folder.save();

//   if (!createdFolder) {
//     throw new ApiError(500, "Something went wrong while creating the folder");
//   }

//   return res
//     .status(201)
//     .json(
//       new ApiResponse(201, "Folder created successfully", { createdFolder })
//     );
// });

// const createFolder = asyncHandler(async (req, res) => {
//   const { name, parent = null } = req.body;

//   // Validate required fields
//   if (!name) {
//     throw new ApiError(400, "Folder name is required");
//   }

//   // Check for duplicate folder
//   const existingFolder = await Folder.findOne({ name, user: req.user._id });
//   if (existingFolder) {
//     throw new ApiError(400, "Folder with this name already exists");
//   }

//   // Convert parent to ObjectId if provided, otherwise use user's ID
//   let parentId = null;
//   if (parent) {
//     if (!mongoose.Types.ObjectId.isValid(parent)) {
//       throw new ApiError(400, "Invalid parent folder ID");
//     }
//     parentId = new mongoose.Types.ObjectId(parent);
//   } else {
//     parentId = req.user._id;
//   }

//   // Create folder object
//   const folder = new Folder({
//     name,
//     parent: parentId,
//     user: req.user._id,
//     ancestors: parentId ? [parentId] : [],
//   });

//   // Save folder to database
//   const createdFolder = await folder.save();

//   if (!createdFolder) {
//     throw new ApiError(500, "Something went wrong while creating the folder");
//   }

//   // Convert ObjectIds to strings for the response
//   const responseFolder = {
//     _id: createdFolder._id.toString(),
//     name: createdFolder.name,
//     parent: createdFolder.parent ? createdFolder.parent.toString() : null,
//     user: createdFolder.user.toString(),
//     ancestors: createdFolder.ancestors.map((id) => id.toString()),
//     createdAt: createdFolder.createdAt,
//     updatedAt: createdFolder.updatedAt,
//   };

//   return res
//     .status(201)
//     .json(new ApiResponse(201, "Folder created successfully", responseFolder));
// });

// const createFolder = asyncHandler(async (req, res) => {
//   const { name, parent = null } = req.body;

//   // Validate required fields
//   if (!name) {
//     throw new ApiError(400, "Folder name is required");
//   }

//   // Check for duplicate folder
//   const existingFolder = await Folder.findOne({ name, user: req.user._id });
//   if (existingFolder) {
//     throw new ApiError(400, "Folder with this name already exists");
//   }

//   // Convert parent to ObjectId if provided
//   let parentId = null;
//   if (parent) {
//     if (!mongoose.Types.ObjectId.isValid(parent)) {
//       throw new ApiError(400, "Invalid parent folder ID");
//     }
//     parentId = new mongoose.Types.ObjectId(parent);
//   }

//   // Create folder object
//   const folder = new Folder({
//     name,
//     parent: parentId,
//     user: req.user._id,
//     ancestors: parentId ? [parentId] : [],
//   });

//   // Save folder to database
//   const createdFolder = await folder.save();

//   if (!createdFolder) {
//     throw new ApiError(500, "Something went wrong while creating the folder");
//   }

//   // Convert ObjectIds to strings for the response
//   const responseFolder = {
//     _id: createdFolder._id.toString(),
//     name: createdFolder.name,
//     parent: createdFolder.parent ? createdFolder.parent.toString() : null,
//     user: createdFolder.user.toString(),
//     ancestors: createdFolder.ancestors.map((id) => id.toString()),
//     createdAt: createdFolder.createdAt,
//     updatedAt: createdFolder.updatedAt,
//   };

//   return res
//     .status(201)
//     .json(new ApiResponse(201, "Folder created successfully", responseFolder));
// });

// const createFolder = asyncHandler(async (req, res) => {
//   const { name, parent = null } = req.body;

//   // Validate required fields
//   if (!name) {
//     throw new ApiError(400, "Folder name is required");
//   }

//   // Check for duplicate folder
//   const existingFolder = await Folder.findOne({ name, user: req.user._id });
//   if (existingFolder) {
//     throw new ApiError(400, "Folder with this name already exists");
//   }

//   // Convert parent to ObjectId if provided
//   let parentId = null;
//   let ancestors = [];
//   if (parent) {
//     if (!mongoose.Types.ObjectId.isValid(parent)) {
//       throw new ApiError(400, "Invalid parent folder ID");
//     }
//     parentId = new mongoose.ObjectId(parent);

//     // Fetch parent folder and its ancestors
//     const parentFolder = await Folder.findById(parentId);
//     if (!parentFolder) {
//       throw new ApiError(404, "Parent folder not found");
//     }

//     // Set ancestors to include all parent folder's ancestors plus itself
//     ancestors = [...parentFolder.ancestors, parentId];
//   }

//   // Create folder object
//   const folder = new Folder({
//     name,
//     parent: parentId,
//     user: req.user._id,
//     ancestors,
//   });

//   // Save folder to database
//   const createdFolder = await folder.save();

//   if (!createdFolder) {
//     throw new ApiError(500, "Something went wrong while creating the folder");
//   }

//   // Convert ObjectIds to strings for the response
//   const responseFolder = {
//     _id: createdFolder._id.toString(),
//     name: createdFolder.name,
//     parent: createdFolder.parent ? createdFolder.parent.toString() : null,
//     user: createdFolder.user.toString(),
//     ancestors: createdFolder.ancestors.map((id) => id.toString()),
//     createdAt: createdFolder.createdAt,
//     updatedAt: createdFolder.updatedAt,
//   };

//   return res
//     .status(201)
//     .json(new ApiResponse(201, "Folder created successfully", responseFolder));
// });

const createFolder = asyncHandler(async (req, res) => {
  const { name, parent = null } = req.body;

  // Validate required fields
  if (!name) {
    throw new ApiError(400, "Folder name is required");
  }

  // Check for duplicate folder
  const existingFolder = await Folder.findOne({ name, user: req.user._id });
  if (existingFolder) {
    throw new ApiError(400, "Folder with this name already exists");
  }

  // Handle parent folder and ancestors
  let parentId = null;
  let ancestors = [];
  if (parent) {
    if (!mongoose.Types.ObjectId.isValid(parent)) {
      throw new ApiError(400, "Invalid parent folder ID");
    }
    parentId = new mongoose.ObjectId(parent);

    // Fetch parent folder and its ancestors
    const parentFolder = await Folder.findById(parentId);
    if (!parentFolder) {
      throw new ApiError(404, "Parent folder not found");
    }

    ancestors = [...parentFolder.ancestors, parentId];
  }

  // Create folder object
  const folder = new Folder({
    name,
    parent: parentId,
    user: req.user._id,
    ancestors,
  });

  // Save folder to the database
  const createdFolder = await folder.save();

  // Response object
  const responseFolder = {
    _id: createdFolder._id.toString(),
    name: createdFolder.name,
    slug: createdFolder.slug,
    parent: createdFolder.parent ? createdFolder.parent.toString() : null,
    user: createdFolder.user.toString(),
    ancestors: createdFolder.ancestors.map((id) => id.toString()),
    createdAt: createdFolder.createdAt,
    updatedAt: createdFolder.updatedAt,
  };

  return res
    .status(201)
    .json(new ApiResponse(201, "Folder created successfully", responseFolder));
});

const getFolders = asyncHandler(async (req, res) => {
  const { parent = null } = req.query;

  // Convert parent to ObjectId if provided
  let parentId = null;
  if (parent) {
    if (!mongoose.Types.ObjectId.isValid(parent)) {
      throw new ApiError(400, "Invalid parent folder ID");
    }
    parentId = mongoose.Types.ObjectId.createFromHexString(parent);
  }

  // Find folders
  const folders = await Folder.find({
    user: req.user._id,
    $or: [{ parent: parentId }, { _id: parentId }],
  });

  // Example of creating a new ObjectId with a specific timestamp
  // const specificTimestamp = Math.floor(Date.now() / 1000); // Current timestamp in seconds
  // const newObjectId = mongoose.Types.ObjectId.createFromTime(specificTimestamp);

  // You can use newObjectId as needed, for example, to create a new document
  // const newFolder = new Folder({ _id: newObjectId, user: req.user._id, ...otherFields });
  // await newFolder.save();

  return res
    .status(200)
    .json(new ApiResponse(200, "Folders retrieved successfully", folders));
});

const getFolder = asyncHandler(async (req, res) => {
  const { folderId } = req.params;

  // Validate folderId
  if (!mongoose.Types.ObjectId.isValid(folderId)) {
    throw new ApiError(400, "Invalid folder ID");
  }

  // Find folder
  const folder = await Folder.findOne({ _id: folderId, user: req.user._id });

  if (!folder) {
    throw new ApiError(404, "Folder not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, "Folder retrieved successfully", folder));
});

const getFolderBySlug = asyncHandler(async (req, res) => {
  const { slug } = req.params;

  // Find folder by slug and user
  const folder = await Folder.findOne({ slug, user: req.user._id });

  if (!folder) {
    throw new ApiError(404, "Folder not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, "Folder retrieved successfully", folder));
});

const deleteFolder = asyncHandler(async (req, res) => {
  const { folderId } = req.params;

  // Validate folderId
  if (!mongoose.Types.ObjectId.isValid(folderId)) {
    throw new ApiError(400, "Invalid folder ID");
  }

  // Convert folderId to ObjectId
  const objectId = mongoose.Types.ObjectId.createFromHexString(folderId);

  // Find and delete folder
  const folder = await Folder.findOneAndDelete({
    _id: objectId,
    user: req.user._id,
  });

  if (!folder) {
    throw new ApiError(404, "Folder not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, "Folder deleted successfully", folder));
});

const updateFolder = asyncHandler(async (req, res) => {
  const { folderId } = req.params;
  const { name, parent } = req.body;

  // Validate folderId
  if (!mongoose.Types.ObjectId.isValid(folderId)) {
    throw new ApiError(400, "Invalid folder ID");
  }

  // Convert folderId to ObjectId
  const objectId = mongoose.Types.ObjectId.createFromHexString(folderId);

  // Find the folder to update
  const folder = await Folder.findOne({ _id: objectId, user: req.user._id });

  if (!folder) {
    throw new ApiError(404, "Folder not found");
  }

  // Update folder fields
  if (name) {
    folder.name = name;
  }

  if (parent) {
    if (!mongoose.Types.ObjectId.isValid(parent)) {
      throw new ApiError(400, "Invalid parent folder ID");
    }
    const newParentId = mongoose.Types.ObjectId.createFromHexString(parent);

    // Find the new parent folder
    const newParentFolder = await Folder.findById(newParentId);
    if (!newParentFolder) {
      throw new ApiError(404, "New parent folder not found");
    }

    // Update the folder's parent and ancestors
    folder.parent = newParentId;

    // Update ancestors: include all ancestors of the new parent plus the new parent itself
    folder.ancestors = [...newParentFolder.ancestors, newParentId];
  }

  // Save updated folder
  const updatedFolder = await folder.save();

  return res
    .status(200)
    .json(new ApiResponse(200, "Folder updated successfully", updatedFolder));
});

export {
  createFolder,
  getFolders,
  getFolder,
  getFolderBySlug,
  deleteFolder,
  updateFolder,
};
