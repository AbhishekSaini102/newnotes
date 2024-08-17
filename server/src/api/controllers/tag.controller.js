import ApiResponse from "../../utils/ApiResponse.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { ApiError } from "../../utils/ApiError.js";
import Tag from "../../models/tag.model.js";
import mongoose from "mongoose";

const createTag = asyncHandler(async (req, res) => {
  const { name, color = "#000000" } = req.body;

  // Validate required fields
  if (!name) {
    throw new ApiError(400, "Tag name is required");
  }

  // Check for duplicate tag
  const existingTag = await Tag.findOne({ name, user: req.user._id });
  if (existingTag) {
    throw new ApiError(400, "Tag with this name already exists");
  }

  // Create tag object
  const tag = new Tag({
    name,
    color,
    user: req.user._id,
  });

  // Save tag to database
  const createdTag = await tag.save();

  if (!createdTag) {
    throw new ApiError(500, "Something went wrong while creating the tag");
  }

  return res
    .status(201)
    .json(new ApiResponse(201, "Tag created successfully", createdTag));
});

const getTags = asyncHandler(async (req, res) => {
  const tags = await Tag.find({ user: req.user._id });

  return res
    .status(200)
    .json(new ApiResponse(200, "Tags retrieved successfully", tags));
});

const getTag = asyncHandler(async (req, res) => {
  const { tagId } = req.params;

  // Validate tagId
  if (!mongoose.Types.ObjectId.isValid(tagId)) {
    throw new ApiError(400, "Invalid tag ID");
  }

  // Find tag by ID
  const tag = await Tag.findOne({ _id: tagId, user: req.user._id });

  if (!tag) {
    throw new ApiError(404, "Tag not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, "Tag retrieved successfully", tag));
});

const updateTag = asyncHandler(async (req, res) => {
  const { tagId } = req.params;
  const { name, color } = req.body;

  // Validate tagId
  if (!mongoose.Types.ObjectId.isValid(tagId)) {
    throw new ApiError(400, "Invalid tag ID");
  }

  // Find tag by ID and update
  const tag = await Tag.findOneAndUpdate(
    { _id: tagId, user: req.user._id },
    { name, color },
    { new: true, runValidators: true }
  );

  if (!tag) {
    throw new ApiError(404, "Tag not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, "Tag updated successfully", tag));
});

const deleteTag = asyncHandler(async (req, res) => {
  const { tagId } = req.params;

  // Validate tagId
  if (!mongoose.Types.ObjectId.isValid(tagId)) {
    throw new ApiError(400, "Invalid tag ID");
  }

  // Find and delete tag
  const tag = await Tag.findOneAndDelete({
    _id: tagId,
    user: req.user._id,
  });

  if (!tag) {
    throw new ApiError(404, "Tag not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, "Tag deleted successfully", tag));
});
export { createTag, getTags, getTag, updateTag, deleteTag };
