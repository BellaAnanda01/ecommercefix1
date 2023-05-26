import express from "express";
const router = express.Router();
import {
    createCategory,
    updateCategory,
    deleteCategory,
    getCategory,
    getCategories
} from "../controllers/category.js";

router.post("/", createCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);
router.get("/find/:id", getCategory);
router.get("/", getCategories);

export default router