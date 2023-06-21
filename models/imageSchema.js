import mongoose from "mongoose";

// create image schema
const imageSchema = new mongoose.Schema({
  createAt: {
    type: Date,
    default: Date.now,
  },
  name: {
    type: String,
    required: [true, "Uploaded file must have a name"],
  },
  author: {
    type: String,
    required: [true, "Author name is required"],
  },
});

// create image model
const ImageModel = mongoose.model("Images", imageSchema);
export default ImageModel;
