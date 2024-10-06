// import mongoose from "mongoose";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

// // const Default_Image = "/images/default.png";

// const userSchema = new mongoose.Schema(
//   {
//     // username: {
//     //   type: String,
//     //   required: [true, "Username is required"],
//     //   unique: true,
//     //   lowercase: true,
//     //   trim: true,
//     //   // index: true,
//     //   minlength: [3, "Username must be at least 3 characters long"],
//     // },
//     email: {
//       type: String,
//       match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
//       unique: true,
//       lowercase: true,
//       trim: true,
//       index: true,
//       required: [true, "Email is required"],
//     },
//     password: {
//       type: String,
//       required: [true, "Password is required"],
//       trim: true,
//       minlength: [6, "Password must be at least 6 characters long"],
//     },
//     fullName: {
//       type: String,
//       required: true,
//       trim: true,
//       index: true,
//       minlength: 3,
//     },
//     avatar: {
//       type: String,
//       // required: true,
//       // default: Default_Image,
//       default: "",
//     },
//     refreshToken: {
//       type: String,
//       default: "",
//     },
//     refreshTokenExpiry: {
//       type: Date,
//       default: null,
//     },
//     // notes: [
//     //   {
//     //     type: mongoose.Schema.Types.ObjectId,
//     //     ref: "Note",
//     //   },
//     // ],
//     // tags: [
//     //   {
//     //     type: mongoose.Schema.Types.ObjectId,
//     //     ref: "Tag",
//     //   },
//     // ],
//     // Additional fields if necessary
//   },
//   // { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
//   { timestamps: true }
// );

// // Indexing
// userSchema.index({ email: 1 });

// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) {
//     return next();
//   }
//   try {
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     return next();
//   } catch (err) {
//     return next(err);
//   }
// });

// userSchema.methods.isPasswordCorrect = async function (password) {
//   return await bcrypt.compare(password, this.password);
// };

// userSchema.methods.generateAccessToken = function () {
//   return jwt.sign(
//     {
//       _id: this._id,
//       email: this.email,
//       // username: this.username,
//       fullName: this.fullName,
//     },
//     process.env.ACCESS_TOKEN_SECRET,
//     { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
//   );
// };

// userSchema.methods.generateRefreshToken = function () {
//   return jwt.sign(
//     {
//       _id: this._id,
//     },
//     process.env.REFRESH_TOKEN_SECRET,
//     { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
//   );
// };

// const User = mongoose.model("User", userSchema);
// export default User;

import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
      unique: true,
      lowercase: true,
      trim: true,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters long"],
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    avatar: {
      type: String,
      default: "",
    },
    refreshToken: {
      type: String,
      default: "",
    },
    refreshTokenExpiry: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

userSchema.index({ email: 1 });

// Hash password before saving the user
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

// Compare entered password with hashed password
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Generate Access Token
userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      fullName: this.fullName,
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
  );
};

// Generate Refresh Token
userSchema.methods.generateRefreshToken = function () {
  return jwt.sign({ _id: this._id }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
  });
};

const User = mongoose.model("User", userSchema);
export default User;

// import mongoose from "mongoose";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import { v4 as uuidv4 } from 'uuid';

// const userSchema = new mongoose.Schema(
//   {
//     _id: {
//       type: String,
//       default: uuidv4,
//       required: true,
//     },
//     email: {
//       type: String,
//       match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
//       unique: true,
//       lowercase: true,
//       trim: true,
//       required: [true, "Email is required"],
//     },
//     password: {
//       type: String,
//       required: [true, "Password is required"],
//       minlength: [6, "Password must be at least 6 characters long"],
//     },
//     fullName: {
//       type: String,
//       required: true,
//       trim: true,
//       minlength: 3,
//     },
//     avatar: {
//       type: String,
//       default: "",
//     },
//     refreshToken: {
//       type: String,
//       default: "",
//     },
//     refreshTokenExpiry: {
//       type: Date,
//       default: null,
//     },
//   },
//   { timestamps: true }
// );

// userSchema.index({ email: 1 });

// // Hash password before saving the user
// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();

//   try {
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
//   } catch (err) {
//     next(err);
//   }
// });

// // Compare entered password with hashed password
// userSchema.methods.isPasswordCorrect = async function (password) {
//   return await bcrypt.compare(password, this.password);
// };

// // Generate Access Token
// userSchema.methods.generateAccessToken = function () {
//   return jwt.sign(
//     {
//       _id: this._id,
//       email: this.email,
//       fullName: this.fullName,
//     },
//     process.env.ACCESS_TOKEN_SECRET,
//     { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
//   );
// };

// // Generate Refresh Token
// userSchema.methods.generateRefreshToken = function () {
//   return jwt.sign({ _id: this._id }, process.env.REFRESH_TOKEN_SECRET, {
//     expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
//   });
// };

// const User = mongoose.model("User", userSchema);
// export default User;
