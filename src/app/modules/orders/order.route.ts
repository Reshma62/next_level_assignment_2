import express from "express";
import {
  createNewOrderController,
  getAllOrdersController,
} from "./order.controller";
const router = express.Router();
router.get("/orders", getAllOrdersController);
router.post("/orders", createNewOrderController);
export const OrderRoute = router;
