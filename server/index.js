import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors"
import userRoute from "./routes/user.js";
import productRoute from "./routes/product.js";
import categoryRoute from "./routes/category.js";
import orderRoute from "./routes/order.js";

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connection Successfull!"))
    .catch((err) => {
        console.log(err)
});

app.use(cors({
    origin: '*',
}));
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/orders", orderRoute);

app.listen(process.env.PORT || 5500, () => {
    console.log("Backend server is running!");
});