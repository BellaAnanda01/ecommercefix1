import express from "express";
const router = express.Router();
import {
    registerUser,
    loginUser,
    deleteUser,
    getUser,
    getUsers,
    updateUser
} from "../controllers/user.js";

router.post("/register", registerUser);
router.post("/login", loginUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/find/:id", getUser);
router.get("/", getUsers);

export default router