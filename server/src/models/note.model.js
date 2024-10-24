// import mongoose from "mongoose";

// const noteSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       trim: true,
//     },
//     content: {
//       type: String,
//       required: true,
//     },
//     links: [
//       {
//         type: String, // URLs for links
//       },
//     ],
//     photos: [
//       {
//         type: String, // URLs for photos
//       },
//     ],
//     // location: {
//     //   type: {
//     //     type: String,
//     //     enum: ["Point"],
//     //     default: "Point",
//     //   },
//     //   coordinates: {
//     //     type: [Number], // [longitude, latitude]
//     //     index: "2dsphere",
//     //   },
//     // },
//     tags: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Tag", // Reference to Tag model
//       },
//     ],
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     folder: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Folder",
//       default: null,
//     },
//     isArchived: {
//       type: Boolean,
//       default: false,
//     },
//     isDeleted: {
//       type: Boolean,
//       default: false,
//     },
//     color: {
//       type: String,
//       default: "white",
//     },
//   },
//   { timestamps: true }
// );

// // Indexing
// noteSchema.index({ title: "text", content: "text" });
// noteSchema.index({ user: 1, folder: 1 });

// // Automatically update the `updatedAt` field
// noteSchema.pre("save", function (next) {
//   this.updatedAt = Date.now();
//   next();
// });

// const Note = mongoose.model("Note", noteSchema);
// export default Note;

import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
    },
    content: {
      type: String,
    },
    links: [
      {
        type: String, // URLs for links
      },
    ],
    photos: [
      {
        type: String, // URLs for photos
      },
    ],
    // location: {
    //   type: {
    //     type: String,
    //     enum: ["Point"],
    //     default: "Point",
    //   },
    //   coordinates: {
    //     type: [Number], // [longitude, latitude]
    //     index: "2dsphere",
    //   },
    // },
    tags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tag", // Reference to Tag model
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    folder: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Folder",
      default: null,
    },
    isArchived: {
      type: Boolean,
      default: false,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "white",
    },
  },
  { timestamps: true }
);

// Indexing
noteSchema.index({ title: "text", content: "text" });
noteSchema.index({ user: 1, folder: 1 });

// Automatically update the `updatedAt` field
noteSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const Note = mongoose.model("Note", noteSchema);
export default Note;
