import express from "express";
const router = express.Router();
import {
    createOrder,
    updateOrder,
    deleteOrder,
    getOrder,
    getOrders
} from "../controllers/order.js";

router.post("/", createOrder);
router.put("/:id", updateOrder);
router.delete("/:id", deleteOrder);
router.get("/find/:id", getOrder);
router.get("/", getOrders);

export default router