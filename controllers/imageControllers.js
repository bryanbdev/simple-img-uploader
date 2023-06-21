import ImageModel from "../models/imageSchema.js";

// handle get home route
export const get_home_route = async (req, res) => {
  try {
    const getAllImgs = await ImageModel.find({});
    res.render("pages/home", { getAllImgs });
  } catch (error) {
    res.status(404).json(error);
  }
};

// handle get image upload route
export const get_image_upload_route = async (req, res) => {
  try {
    res.render("pages/upload");
  } catch (error) {
    res.status(404).json(error);
  }
};

// handle get image upload route
export const post_image_upload_route = async (req, res) => {
  try {
    const file = req.files[0];
    const author = req.body.author;
    const newFile = await ImageModel.create({
      name: file.filename,
      author,
    });
    res.status(200).json({
      status: res.statusCode,
      message: "File created successfully",
      data: newFile,
    });
  } catch (error) {
    res.status(404).json(error.message);
  }
};
