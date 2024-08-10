import { asyncHandler } from "../../utils/asyncHandler.js";
import ApiResponse from "../../utils/ApiResponse.js";
// import User from "../models/user.model.js";
// import ApiError from "../../utils/ApiError.js";
// import {
//   uploadOnCloudinary,
//   deleteFromCloudinary,
// } from "../../utils/cloudinary.js";
// import jsonwebtoken from "jsonwebtoken";

const registerUser = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json(
      new ApiResponse(200, "User registered successfully", { user: req.user })
    );
});

export { registerUser };
