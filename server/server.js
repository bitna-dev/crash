import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

// to allow us to accept JSON data in the req.body, 무조건 필요
// in earlier version, needed body-parser to parse the body data but after 4.10 express.json() 으로 바로 사용
// Middleware
app.use(express.json());
app.use("/api/products", productRoutes);
app.listen(PORT, () => {
	connectDB();
	console.log(`Server started at port: http://localhost:${PORT}`);
});
