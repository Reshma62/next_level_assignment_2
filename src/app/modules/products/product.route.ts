import express from "express";
const router = express.Router();
import {
  createProductController,
  deleteProductByIdController,
  getAllProductsController,
  getProductByIdController,
  updateProductByIdController,
} from "./product.controller";

router.post("/products", createProductController);
router.get("/products", getAllProductsController);
router.get("/products/:productId", getProductByIdController);
router.put("/products/:productId", updateProductByIdController);
router.delete("/products/:productId", deleteProductByIdController);

export const ProductRoute = router;
