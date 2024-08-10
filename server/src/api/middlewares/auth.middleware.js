import ApiErrors from "../../utils/ApiError.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import User from "../../models/user.model.js";

export const verifyJWT = asyncHandler(async (req, res, next) => {
  //res -> _
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new ApiErrors("Unauthorized request", 401);
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    if (!decodedToken) {
      throw new ApiErrors(401, "Invalid access token or token expired");
    }

    const user = await User.findById(decodedToken?._id).select(
      "-password -refreshToken"
    );

    if (!user) {
      throw new ApiErrors("Unauthorized request", 401);
    }

    req.user = user;
    next();
  } catch (error) {
    throw new ApiErrors(401, error?.message || "Invalid access token");
  }
});
