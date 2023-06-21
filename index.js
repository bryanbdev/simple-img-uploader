import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import imageRoutes from "./routes/imageRoutes.js";

// middeleware
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //parse urlencoded request bodies <-- help read form data on post methods
app.use(express.static("public"));

// set the view engine to ejs
app.set("view engine", "ejs");

// routes
app.use("/", imageRoutes);

// connection to database
const DB_URL = process.env.MONGODB_URL;
const PORT = process.env.APP_PORT;

mongoose
  .connect(DB_URL, {
    useNewUrlParser: "true",
    useUnifiedTopology: "true",
  })
  .then(() => {
    app.listen(PORT, (err) => {
      if (err) console.log(err.message);
      console.log("Connected to DB");
      console.log("App running on port: " + PORT);
    });
  })
  .catch((err) => console.log(err.message));
