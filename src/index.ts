
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import app from "./app";
const port: string | number = process.env.DB_PORT || 8000;

const connectDB = async () => {
    try {

        await mongoose.connect(process.env.DB_URL as string);
        console.log(`🛢 Database connection successful`);
        app.listen(port, () => console.log(`http://localhost:${port}/`))

    } catch (error) {
        console.log(error)
    }
};

connectDB();


