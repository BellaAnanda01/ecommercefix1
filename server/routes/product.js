import express from "express";
const router = express.Router();
import {
    createProduct,
    updateProduct,
    deleteProduct,
    getProduct,
    getProducts
} from "../controllers/product.js";

router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.get("/find/:id", getProduct);
router.get("/", getProducts);

export default router