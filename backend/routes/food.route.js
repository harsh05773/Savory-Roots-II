import express from "express";
import { addFood, listFood, removeFood } from "../controller/food.controller.js";
import multer from "multer";

const foodRouter = express.Router();

// Image storage using multer
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, Date.now() + "-" + file.originalname);
    }
})

const upload = multer({ storage });

// Route to add food item by sending post request
foodRouter.post("/add", upload.single("image"), addFood);
// Route to access food list using get request
foodRouter.get("/list", listFood)
// Route to delete item 
foodRouter.delete("/remove", removeFood)

export default foodRouter;