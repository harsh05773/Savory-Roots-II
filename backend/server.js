import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import { connectDB } from "./config/db.config.js";
import foodRouter from "./routes/food.route.js"

// Load env variables
dotenv.config();

const app=express();
const port =process.env.PORT;

// Middlewares
app.use(express.json());
app.use(cors());

// DB connection
connectDB();

// API endpoint
app.use("/api/food", foodRouter);

app.use("/images", express.static("uploads"));

app.get("/", (req, res)=>{
    res.send("API Working");
})
app.listen(port, ()=>{
    console.log(`Server listening on http://localhost:${port}`)
})