import mongoose from "mongoose";

const tagSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Tag name is required"],
      trim: true,
      minlength: [2, "Tag name must be at least 2 characters long"],
    },
    color: {
      type: String,
      default: "#000000", // Default black color
      match: [/^#([0-9A-F]{3}){1,2}$/i, "Please use a valid hex color code"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Indexing
tagSchema.index({ name: 1, user: 1 }, { unique: true });

const Tag = mongoose.model("Tag", tagSchema);
export default Tag;
