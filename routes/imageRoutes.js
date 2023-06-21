import express from "express";
import {
  get_home_route,
  get_image_upload_route,
  post_image_upload_route,
} from "../controllers/imageControllers.js";
import multer from "multer";
const router = express.Router();

// configure the multer storage to read image upload (middleware)
const multerStorage = multer.diskStorage({
  destination: (req, file, callbackFn) => {
    callbackFn(null, "public/uploads");
  },
  filename: (req, file, callbackFn) => {
    const ext = file.mimetype.split("/")[1];
    // console.log(file.mimetype);
    callbackFn(null, `img-${file.fieldname}-${Date.now()}.${ext}`);
  },
});
// use multer
const upload = multer({
  storage: multerStorage,
});

// get home route
router.get("/", get_home_route);

// get image upload route
router.get("/upload", get_image_upload_route);

// post image upload route "array" for multipls files OR "single" for one file
router.post("/upload", upload.array("files"), post_image_upload_route);

export default router;
