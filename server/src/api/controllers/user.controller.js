import { asyncHandler } from "../../utils/asyncHandler.js";
import ApiResponse from "../../utils/ApiResponse.js";
import User from "../../models/user.model.js";
import { ApiError } from "../../utils/ApiError.js";
import {
  uploadOnCloudinary,
  deleteFromCloudinary,
} from "../../utils/cloudinary.js";
import jwt from "jsonwebtoken";

const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId).exec();
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();
    // user.refreshTokenExpiry = Date.now() + 30 * 24 * 60 * 60 * 1000; // 30 days
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });
    // const refreshToken = user.refreshToken;
    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(500, "Failed to generate access and refresh tokens");
    console.error(error);
  }
};
const registerUser = asyncHandler(async (req, res) => {
  // res
  //   .status(200)
  //   .json(
  //     new ApiResponse(200, "User registered successfully", { user: req.user })
  //   );
  // ? get user details from request body
  // ? validate user details - not empty, valid email, password length
  // ? check if user with email already exists
  // ? hash password
  // ? save user to database
  // ? generate access token
  // ? generate refresh token
  // ? send response with access token and refresh token
  // ? check if user with email already exists
  // ? check for image and avatar
  // ? upload image to cloudinary, avatar
  // ? create user objects - create entry in database
  // ? remove password and refresh token from response
  // ? check for user creation
  // ? return response

  const { fullName, email, username, password } = req.body;
  // console.log("email:", email);

  // if (!email || !password || !fullName || !username) {
  //   throw new ApiError(400, "All fields are required");
  // }

  if (
    [fullName, email, username, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  if (password.length < 6) {
    throw new ApiError(400, "Password must be at least 6 characters");
  }

  if (!email.match(/.+\@.+\..+/)) {
    throw new ApiError(400, "Invalid email address");
  }

  if (username.length < 3 || username.length > 30) {
    throw new ApiError(400, "Username must be between 3 and 30 characters");
  }

  if (fullName.length < 3) {
    throw new ApiError(400, "Full name must be at least 3 characters");
  }

  // const existedUser = await User.findOne({
  //   $or: [{ username: username }, { email: email }],
  // });
  // Check if user already exists
  const existedUser = await User.findOne({
    $or: [{ username: username.toLowerCase() }, { email: email.toLowerCase() }],
  }).exec();

  if (existedUser) {
    throw new ApiError(409, "User with this email or username already exists");
  }

  // const avatarLocalPath = req.files?.avatar[0]?.path;
  const avatarLocalPath = req.files?.avatar ? req.files?.avatar[0]?.path : null;

  // let avatarLocalPath;
  // if (
  //   req.files &&
  //   Array.isArray(req.files.avatar) &&
  //   req.files.avatar.length > 0
  // ) {
  //   avatarLocalPath = req.files.avatar[0].path;
  // }

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar is required");
  }

  const avatar = await uploadOnCloudinary(avatarLocalPath);

  if (!avatar) {
    throw new ApiError(500, "Failed to upload avatar");
  }

  const user = await User.create({
    fullName,
    email,
    username: username.toLowerCase(),
    password,
    avatar: avatar?.url,
  });

  // const createdUser = await User.findById(user._id).select(
  //   "-password -refreshToken"
  // );
  const createdUser = await User.findById(user._id)
    .select("-password -refreshToken")
    .exec();

  if (!createdUser) {
    throw new ApiError(500, "something went wrong while creating user");
  }

  res.status(201).json(
    new ApiResponse(200, "User registered successfully", {
      user: createdUser,
    })
  );
});

// const registerUser = asyncHandler(async (req, res) => {
//   // res
//   //   .status(200)
//   //   .json(
//   //     new ApiResponse(200, "User registered successfully", { user: req.user })
//   //   );
//   // ? get user details from request body
//   // ? validate user details - not empty, valid email, password length
//   // ? check if user with email already exists
//   // ? hash password
//   // ? save user to database
//   // ? generate access token
//   // ? generate refresh token
//   // ? send response with access token and refresh token
//   // ? check if user with email already exists
//   // ? check for image and avatar
//   // ? upload image to cloudinary, avatar
//   // ? create user objects - create entry in database
//   // ? remove password and refresh token from response
//   // ? check for user creation
//   // ? return response

//   const { fullName, email, username, password } = req.body;
//   // console.log("email:", email);

//   // if (!email || !password || !fullName || !username) {
//   //   throw new ApiError(400, "All fields are required");
//   // }

//   if (
//     [fullName, email, username, password].some((field) => field?.trim() === "")
//   ) {
//     throw new ApiError(400, "All fields are required");
//   }

//   if (password.length < 6) {
//     throw new ApiError(400, "Password must be at least 6 characters");
//   }

//   if (!email.match(/.+\@.+\..+/)) {
//     throw new ApiError(400, "Invalid email address");
//   }

//   if (username.length < 3 || username.length > 30) {
//     throw new ApiError(400, "Username must be between 3 and 30 characters");
//   }

//   if (fullName.length < 3) {
//     throw new ApiError(400, "Full name must be at least 3 characters");
//   }

//   // const existedUser = await User.findOne({
//   //   $or: [{ username: username }, { email: email }],
//   // });
//   // Check if user already exists
//   const existedUser = await User.findOne({
//     $or: [{ username: username.toLowerCase() }, { email: email.toLowerCase() }],
//   });

//   if (existedUser) {
//     throw new ApiError(409, "User with this email or username already exists");
//   }

//   // const avatarLocalPath = req.files?.avatar[0]?.path;
//   const avatarLocalPath = req.files?.avatar ? req.files?.avatar[0]?.path : null;

//   // let avatarLocalPath;
//   // if (
//   //   req.files &&
//   //   Array.isArray(req.files.avatar) &&
//   //   req.files.avatar.length > 0
//   // ) {
//   //   avatarLocalPath = req.files.avatar[0].path;
//   // }

//   if (!avatarLocalPath) {
//     throw new ApiError(400, "Avatar is required");
//   }

//   const avatar = await uploadOnCloudinary(avatarLocalPath);

//   if (!avatar) {
//     throw new ApiError(500, "Failed to upload avatar");
//   }

//   const user = await User.create({
//     fullName,
//     email,
//     username: username.toLowerCase(),
//     password,
//     avatar: avatar?.url,
//   });

//   // const createdUser = await User.findById(user._id).select(
//   //   "-password -refreshToken"
//   // );
//   const createdUser = await User.findById(user._id).select(
//     "-password -refreshToken"
//   );

//   if (!createdUser) {
//     throw new ApiError(500, "something went wrong while creating user");
//   }

//   res.status(201).json(
//     new ApiResponse(200, "User registered successfully", {
//       user: createdUser,
//     })
//   );
// });

const loginUser = asyncHandler(async (req, res) => {
  // ? get user details from request body req.body -> email, password (data)
  // ? validate user details - not empty, valid email, password length,
  // ? check if user with email exists
  // ? check if password is correct
  // ? generate access token
  // ? generate refresh token
  // ? send response with access token and refresh token using cookie
  // * done with login
  // todo - implement login

  const { email, password } = req.body;

  // if (!email || !password) {
  //   console.log("Email and password both are required");
  // } else {
  //   console.log("All fields are filled");
  // }
  if ([email, password].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "Email and password both are required");
  }

  const user = await User.findOne({ email: email.toLowerCase() }).exec();

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  const isPasswordCorrect = await user.isPasswordCorrect(password);

  if (!isPasswordCorrect) {
    throw new ApiError(401, "Incorrect password");
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    user._id
  );

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  //how can I update User without any query with object
  // user.refreshToken = refreshToken;
  // await user.save({ validateBeforeSave: false });

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(200, "User logged in Successfully", {
        user: loggedInUser,
        accessToken,
        refreshToken,
      })
    );
});

const logoutUser = asyncHandler(async (req, res) => {
  // ? clear refresh token from database  - set it to empty
  // ? clear refresh token from cookie
  // ? send response
  // todo - implement logout

  // const user = req.user._id;
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {
        refreshToken: undefined,
      },
    },
    {
      new: true,
    }
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, "User logged out successfully", {}));
});

const refreshAccessToken = asyncHandler(async (req, res) => {
  // ? get refresh token from cookie
  // ? check if refresh token is valid
  // ? generate new access token
  // * send response with new access token
  // todo - implement refresh token

  // const { refreshToken } = req.cookies;
  // if (!refreshToken) {
  //   throw new ApiError(401, "Refresh token is required");
  // }
  const incomingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;

  if (!incomingRefreshToken) {
    throw new ApiError(401, "Unauthorized request, Refresh token is required");
  }

  try {
    const decodedRefreshToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    const user = await User.findById(decodedRefreshToken?._id);

    if (!user) {
      throw new ApiError(404, "User not found, Invalid refresh token");
    }
    if (incomingRefreshToken !== user?.refreshToken) {
      throw new ApiError(401, "Refresh token is expired, invalid or used");
    }

    const options = {
      httpOnly: true,
      secure: true,
    };

    const { accessToken, newRefreshToken } =
      await generateAccessAndRefreshTokens(user._id);

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", newRefreshToken, options)
      .json(
        new ApiResponse(200, "Access token refreshed successfully", {
          accessToken,
          refreshToken: newRefreshToken,
        })
      );
  } catch (error) {
    throw new ApiError(401, "Unauthorized request, Invalid refresh token");
    console.error(error);
  }
});

const changeCurrentPassword = asyncHandler(async (req, res) => {
  // ? get user details from request body req.body -> email, password (data)
  // ? validate user details - not empty, valid email, password length,
  // ? check if user with email exists
  // ? check if password is correct
  // ? generate access token
  // ? generate refresh token
  // ? send response with access token and refresh token using cookie
  // * done with login
  // todo - implement login

  try {
    const { oldPassword, newPassword, confirmPassword } = req.body;

    if (
      [oldPassword, newPassword, confirmPassword].some(
        (field) => field?.trim() === ""
      )
    ) {
      throw new ApiError(400, "All fields are required");
    }

    if (newPassword !== confirmPassword) {
      // throw new ApiError(400, "New password and confirm password do not match");
      throw new ApiError(400, "New password and confirm password do not match");
    }

    const user = await User.findById(req.user?._id);
    if (!user) {
      throw new ApiError(404, "User not found");
    }

    const isPasswordCorrect = await user.isPasswordCorrect(oldPassword);

    if (!isPasswordCorrect) {
      throw new ApiError(401, "Incorrect password");
    }

    user.password = newPassword;
    await user.save({ validateBeforeSave: false });

    return res
      .status(200)
      .json(new ApiResponse(200, "Password changed successfully", {}));
  } catch (error) {
    throw new ApiError(500, "Failed to change password");
    console.error(error);
  }
});

// const changeCurrentPassword = asyncHandler(async (req, res) => {
//   const { currentPassword, newPassword, confirmPassword } = req.body;

//   if (
//     [currentPassword, newPassword, confirmPassword].some(
//       (field) => field?.trim() === ""
//     )
//   ) {
//     throw new ApiError(400, "All fields are required");
//   }

//   if (newPassword !== confirmPassword) {
//     throw new ApiError(400, "Passwords do not match");
//   }

//   const user = await User.findById(req.user?._id);

//   const isPasswordCorrect = await user.isPasswordCorrect(currentPassword);

//   if (!isPasswordCorrect) {
//     throw new ApiError(400, "Invalid current password");
//   }
//   user.password = newPassword;
//   // user.password = await bcrypt.hash(newPassword, 10);

//   await user.save({ validateBeforeSave: false });

//   return res
//     .status(200)
//     .json(new ApiResponse(200, "Password changed successfully", {}));
// });

const getCurrentUser = asyncHandler(async (req, res) => {
  return res.status(200).json(
    new ApiResponse(200, "User details fetched successfully", {
      user: req.user,
    })
  );
});

const updateAccountDetails = asyncHandler(async (req, res) => {
  // ? get user details from request body req.body -> email, password (data)
  // ? validate user details - not empty, valid email, password length,
  // ? check if user with email exists
  // ? change user details
  // ? save into database
  // ? return response
  // * done with update account details
  // todo - implement update account details

  const { fullName, email } = req.body;

  if (!email) {
    throw new ApiError(400, "Email is required");
  }
  if (!fullName) {
    throw new ApiError(400, "Full name is required");
  }

  const user = await User.findByIdAndUpdate(
    req.user?._id,
    {
      $set: {
        fullName: fullName,
        email: email,
      },
    },
    { new: true }
  ).select("-password -refreshToken");

  return res
    .status(200)
    .json(
      new ApiResponse(200, "Account details updated successfully", { user })
    );
});

const updateUserEmail = asyncHandler(async (req, res) => {
  // ? get user details from request body req.body -> email, password (data)
  // ? validate user details - not empty, valid email, password length,
  // ? check if user with email exists
  // ? change user details
  // ? save into database
  // ? return response
  // * done with update account details
  // todo - implement update account details

  const { email } = req.body;

  if (!email) {
    throw new ApiError(400, "Email is required");
  }

  const user = await User.findByIdAndUpdate(
    req.user?._id,
    {
      $set: {
        email: email,
      },
    },
    { new: true }
  ).select("-password -refreshToken");

  return res
    .status(200)
    .json(new ApiResponse(200, "Email updated successfully", { user }));
});

const updateUserFullName = asyncHandler(async (req, res) => {
  // ? get user details from request body req.body -> email, password (data)
  // ? validate user details - not empty, valid email, password length,
  // ? check if user with email exists
  // ? change user details
  // ? save into database
  // ? return response
  // * done with update account details
  // todo - implement update account details

  const { fullName } = req.body;

  if (!fullName) {
    throw new ApiError(400, "Full name is required");
  }

  const user = await User.findByIdAndUpdate(
    req.user?._id,
    {
      $set: {
        fullName: fullName,
      },
    },
    { new: true }
  ).select("-password -refreshToken");

  return res
    .status(200)
    .json(new ApiResponse(200, "Full Name updated successfully", { user }));
});
const updateUserAvatar = asyncHandler(async (req, res) => {
  // ? get details from request.files -> avatar
  // ? check if avatar is present
  // ? upload avatar to cloudinary
  // ? update user avatar
  // ? save user
  // ? delete old avatar from cloudinary
  // ? send response
  // * done with update avatar
  // todo - implement update avatar

  try {
    const avatarLocalPath = req.file?.path;

    if (!avatarLocalPath) {
      throw new ApiError(400, "Avatar is required");
    }
    const avatar = await uploadOnCloudinary(avatarLocalPath);

    if (!avatar.url) {
      throw new ApiError(500, "Failed to upload avatar");
    }
    const user = await User.findByIdAndUpdate(
      req.user?._id,
      {
        $set: {
          avatar: avatar.url,
        },
      },
      { new: true }
    ).select("-password -refreshToken");

    // Delete the old image from Cloudinary
    // Extract the public ID from the old avatar URL
    const publicId = req.user.avatar.split("/").pop().split(".")[0];
    // console.log("Public ID to delete:", publicId);

    await deleteFromCloudinary(publicId);
    // console.log("deleted publicId:", publicId);

    return res
      .status(200)
      .json(new ApiResponse(200, "Avatar updated successfully", { user }));
  } catch (error) {
    throw new ApiError(500, "Failed to update avatar");
    console.error(error);
  }
});

export {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  changeCurrentPassword,
  getCurrentUser,
  updateAccountDetails,
  updateUserAvatar,
  updateUserEmail,
  updateUserFullName,
};
