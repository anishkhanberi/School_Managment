import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.static(path.join(__dirname, "../frontend")));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../index.html"));
});

// MongoDB Connection
const connectionMongoDb = async () => {
    try {
        console.log("Connecting to MongoDB...");
        console.log(process.env.MONGODB_URL);
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully.");

        const PORT = process.env.PORT || 8000;
        app.listen(PORT, () => {
            console.log(`App is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error(`MongoDB Connection Error: ${error.message}`);
        process.exit(1);
    }
};

connectionMongoDb();
