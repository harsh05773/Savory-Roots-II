import Food from "../models/food.model.js";
import fs from "fs";

// Have to add status code in the res later

// Add food item

const addFood = async (req, res) => {
    let image_name = req.file.filename;
    const food = new Food({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: image_name,
        category: req.body.category
    })
    try {
        await food.save();
        console.log("Item added");
        res.json({
            success: true,
            message: "Food Item Added"
        })
    } catch (error) {
        console.error("Error Food Item could not be saved " + error)
        res.json({
            success: false,
            message: "Food Item could not be saved"
        })
    }
}

// all food list
const listFood = async (req, res) => {
    try {
        const food = await Food.find({});
        res.json({ success: true, data: food });
    } catch (error) {
        console.error("Could not fetch Food list: ", error);
        res.json({ success: false, message: "Could not fetch Food list" })
    }
}

// Remove food item
const removeFood = async (req, res) => {
    try {
        const foodItem = await Food.findById(req.body._id);
        fs.unlink(`uploads/${foodItem.image}`, () => {
            console.log("image deleted from the local storage");
        })
        const delFood = await Food.findByIdAndDelete(req.body._id);
        console.log("Food Entry deleted from the db");
        res.json({ success: true, message: "Food Entry deleted from the db" })
    } catch (error) {
        console.error("Could not delete item from the db");
        res.json({ success: false, message: "Could not delete item from the db" })
    }
}

export { addFood, listFood, removeFood };