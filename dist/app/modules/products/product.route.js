"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoute = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const product_controller_1 = require("./product.controller");
router.get("/products", product_controller_1.searchProductController);
router.get("/products/:productId", product_controller_1.getProductByIdController);
router.post("/products", product_controller_1.createProductController);
router.put("/products/:productId", product_controller_1.updateProductByIdController);
router.delete("/products/:productId", product_controller_1.deleteProductByIdController);
exports.ProductRoute = router;
