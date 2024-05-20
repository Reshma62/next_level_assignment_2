import express from "express";
const router = express.Router();
import { createProductController } from "./product.controller";

router.use("/create-product", createProductController);

export const ProductRoute = router;
