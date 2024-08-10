import mongoose from "mongoose";

const tagSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  color: {
    type: String,
  },
});

const Tag = mongoose.model("Tag", tagSchema);
export default Tag;
