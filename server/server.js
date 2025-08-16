import dotenv from "dotenv";
dotenv.config({ debug: true });

import express from "express";
import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = import.meta.dirname;

// to allow us to accept JSON data in the req.body, 무조건 필요
// in earlier version, needed body-parser to parse the body data but after 4.10 express.json() 으로 바로 사용
// Middleware
app.use(express.json());
app.use("/api/products", productRoutes);

// if (process.env.NODE_ENV === "production") {
app.use(express.static(path.join(__dirname, "..", "client", "dist")));
app.get("/{*splat}", (req, res) => {
	res.sendFile(path.resolve(__dirname, "..", "client", "dist", "index.html"));
});
// }
app.listen(PORT, () => {
	connectDB();
	console.log(`Server started at port: http://localhost:${PORT}`);
});
