import express from "express";
const router = express.Router();
import {
  createProductController,
  deleteProductByIdController,
  getProductByIdController,
  searchProductController,
  updateProductByIdController,
} from "./product.controller";

router.get("/products", searchProductController);
router.get("/products/:productId", getProductByIdController);
router.post("/products", createProductController);
router.put("/products/:productId", updateProductByIdController);
router.delete("/products/:productId", deleteProductByIdController);

export const ProductRoute = router;
