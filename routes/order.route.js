import express from "express";
import { createOrder } from "../controllers/order.controller.js";
import upload from "../middlewares/upload.js";

const router = express.Router();

router.post("/checkout", upload.array("images"), createOrder);

export default router;
