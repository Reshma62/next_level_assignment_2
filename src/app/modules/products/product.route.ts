import express from "express";
const router = express.Router();
import {
  createProductController,
  getAllProductsController,
} from "./product.controller";

router.post("/products", createProductController);
router.get("/products", getAllProductsController);

export const ProductRoute = router;
